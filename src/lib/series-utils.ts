import type { CollectionEntry } from 'astro:content';

export interface SeriesInfo {
  name: string;
  posts: CollectionEntry<'blog'>[];
}

export function groupBySeries(posts: CollectionEntry<'blog'>[]): Map<string, SeriesInfo> {
  const map = new Map<string, CollectionEntry<'blog'>[]>();
  for (const post of posts) {
    if (post.data.series) {
      if (!map.has(post.data.series)) {
        map.set(post.data.series, []);
      }
      map.get(post.data.series)!.push(post);
    }
  }

  const result = new Map<string, SeriesInfo>();
  for (const [name, seriesPosts] of map) {
    seriesPosts.sort((a, b) => {
      const orderA = a.data.seriesOrder ?? Number.MAX_SAFE_INTEGER;
      const orderB = b.data.seriesOrder ?? Number.MAX_SAFE_INTEGER;
      if (orderA !== orderB) return orderA - orderB;
      return a.data.pubDate.getTime() - b.data.pubDate.getTime();
    });
    result.set(name, { name, posts: seriesPosts });
  }

  return result;
}

export function getSeriesNavigation(
  seriesPosts: CollectionEntry<'blog'>[],
  currentId: string,
): { prev: CollectionEntry<'blog'> | null; next: CollectionEntry<'blog'> | null } {
  const idx = seriesPosts.findIndex(p => p.id === currentId);
  return {
    prev: idx > 0 ? seriesPosts[idx - 1] : null,
    next: idx < seriesPosts.length - 1 ? seriesPosts[idx + 1] : null,
  };
}