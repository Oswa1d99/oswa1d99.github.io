import type { CollectionEntry } from 'astro:content';
import { SHUFFLED_PALETTE, PALETTE_BY_NAME } from './color-palette';
import { colorOverrides } from '../data/color-overrides';

export interface ColorResult {
  name: string;
  hex: string;
}

function fnv1a(str: string): number {
  let hash = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return hash >>> 0;
}

function resolveColorValue(value: string): ColorResult {
  const paletteMatch = PALETTE_BY_NAME.get(value);
  if (paletteMatch) return paletteMatch;

  if (/^#[0-9a-fA-F]{6}$/.test(value)) {
    const hex = value.toUpperCase();
    return { name: hex, hex };
  }
  if (/^#[0-9a-fA-F]{3}$/.test(value)) {
    const hex = ('#' + value[1] + value[1] + value[2] + value[2] + value[3] + value[3]).toUpperCase();
    return { name: hex, hex };
  }

  console.warn(`Unknown color value "${value}". Using hash-based fallback.`);
  return paletteColorByHash(value);
}

export function resolveAllColors(
  posts: CollectionEntry<'blog'>[],
): Map<string, ColorResult> {
  const colorMap = new Map<string, ColorResult>();

  const frontmatterOverrides = new Map<string, string>();
  for (const post of posts) {
    if (post.data.tagColors) {
      for (const [tagName, colorVal] of Object.entries(post.data.tagColors)) {
        if (!frontmatterOverrides.has(tagName)) {
          frontmatterOverrides.set(tagName, colorVal);
        } else if (frontmatterOverrides.get(tagName) !== colorVal) {
          console.warn(
            `Color conflict for tag "${tagName}": "${frontmatterOverrides.get(tagName)}" vs "${colorVal}". Keeping first.`,
          );
        }
      }
    }
    if (post.data.series && post.data.seriesColor) {
      if (!frontmatterOverrides.has(post.data.series)) {
        frontmatterOverrides.set(post.data.series, post.data.seriesColor);
      } else if (frontmatterOverrides.get(post.data.series) !== post.data.seriesColor) {
        console.warn(
          `Color conflict for series "${post.data.series}". Keeping first.`,
        );
      }
    }
  }

  const allNames = new Set<string>();
  for (const post of posts) {
    for (const tag of post.data.tags) {
      allNames.add(tag);
    }
    if (post.data.series) {
      allNames.add(post.data.series);
    }
  }

  for (const name of allNames) {
    if (colorOverrides[name]) {
      colorMap.set(name, resolveColorValue(colorOverrides[name]));
    } else if (frontmatterOverrides.has(name)) {
      colorMap.set(name, resolveColorValue(frontmatterOverrides.get(name)!));
    } else {
      colorMap.set(name, paletteColorByHash(name));
    }
  }

  return colorMap;
}

function paletteColorByHash(value: string): ColorResult {
  return SHUFFLED_PALETTE[fnv1a(value) % SHUFFLED_PALETTE.length];
}

export function getColor(colorMap: Map<string, ColorResult>, name: string): ColorResult {
  return colorMap.get(name) ?? paletteColorByHash(name);
}