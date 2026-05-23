export interface PaletteColor {
  name: string;
  hex: string;
}

const ORGANIZED_PALETTE: PaletteColor[] = [
  // Red (Open Color)
  { name: 'salmon', hex: '#FFA8A8' },
  { name: 'coral', hex: '#FF8787' },
  { name: 'tomato', hex: '#FF6B6B' },
  { name: 'crimson', hex: '#FA5252' },
  // Pink (Open Color)
  { name: 'blush', hex: '#FAA2C1' },
  { name: 'rose', hex: '#F783AC' },
  { name: 'hot-pink', hex: '#F06595' },
  { name: 'magenta', hex: '#E64980' },
  // Grape (Open Color)
  { name: 'orchid', hex: '#E599F7' },
  { name: 'amethyst', hex: '#DA77F2' },
  { name: 'plum', hex: '#CC5DE8' },
  { name: 'mulberry', hex: '#BE4BDB' },
  // Violet (Open Color)
  { name: 'lavender', hex: '#B197FC' },
  { name: 'iris', hex: '#9775FA' },
  { name: 'violet', hex: '#845EF7' },
  { name: 'deep-violet', hex: '#7950F2' },
  // Indigo (Open Color)
  { name: 'periwinkle', hex: '#91A7FF' },
  { name: 'cornflower', hex: '#748FFC' },
  { name: 'sapphire', hex: '#5C7CFA' },
  { name: 'cobalt', hex: '#4C6EF5' },
  // Blue (Open Color)
  { name: 'sky', hex: '#74C0FC' },
  { name: 'azure', hex: '#4DABF7' },
  { name: 'cerulean', hex: '#339AF0' },
  { name: 'ocean', hex: '#228BE6' },
  // Cyan (Open Color)
  { name: 'turquoise', hex: '#66D9E8' },
  { name: 'aqua', hex: '#3BC9DB' },
  { name: 'teal', hex: '#22B8CF' },
  { name: 'cyan', hex: '#15AABF' },
  // Teal (Open Color)
  { name: 'mint', hex: '#63E6BE' },
  { name: 'jade', hex: '#38D9A9' },
  { name: 'seafoam', hex: '#20C997' },
  { name: 'teal-green', hex: '#12B886' },
  // Green (Open Color)
  { name: 'spring', hex: '#8CE99A' },
  { name: 'clover', hex: '#69DB7C' },
  { name: 'fern', hex: '#51CF66' },
  { name: 'moss', hex: '#40C057' },
  // Lime (Open Color)
  { name: 'chartreuse', hex: '#C0EB75' },
  { name: 'apple', hex: '#A9E34B' },
  { name: 'lime', hex: '#94D82D' },
  { name: 'olive', hex: '#82C91E' },
  // Yellow (Open Color)
  { name: 'lemon', hex: '#FFE066' },
  { name: 'sunflower', hex: '#FFD43B' },
  { name: 'gold', hex: '#FCC419' },
  { name: 'mustard', hex: '#FAB005' },
  // Orange (Open Color)
  { name: 'peach', hex: '#FFC078' },
  { name: 'tangerine', hex: '#FFA94D' },
  { name: 'carrot', hex: '#FF922B' },
  { name: 'rust', hex: '#FD7E14' },
  // Rose (Tailwind)
  { name: 'watermelon', hex: '#FB7185' },
  { name: 'ruby', hex: '#F43F5E' },
  { name: 'garnet', hex: '#E11D48' },
  { name: 'burgundy', hex: '#BE123C' },
  // Fuchsia (Tailwind)
  { name: 'neon-pink', hex: '#E879F9' },
  { name: 'fuchsia', hex: '#D946EF' },
  { name: 'electric-purple', hex: '#C026D3' },
  { name: 'deep-magenta', hex: '#A21CAF' },
  // Purple (Tailwind)
  { name: 'lilac', hex: '#C084FC' },
  { name: 'purple', hex: '#A855F7' },
  { name: 'royal-purple', hex: '#9333EA' },
  { name: 'deep-purple', hex: '#7E22CE' },
  // Sky (Tailwind)
  { name: 'baby-blue', hex: '#38BDF8' },
  { name: 'cerulean-blue', hex: '#0EA5E9' },
  { name: 'deep-sky', hex: '#0284C7' },
  { name: 'navy-blue', hex: '#0369A1' },
  // Emerald (Tailwind)
  { name: 'mint-green', hex: '#34D399' },
  { name: 'emerald', hex: '#10B981' },
  { name: 'pine', hex: '#059669' },
  { name: 'forest-green', hex: '#047857' },
  // Amber (Tailwind)
  { name: 'marigold', hex: '#FBBF24' },
  { name: 'amber', hex: '#F59E0B' },
  { name: 'honey', hex: '#D97706' },
  { name: 'bronze', hex: '#B45309' },
];

function seededShuffle<T>(arr: T[], seed: number): T[] {
  const result = [...arr];
  let s = seed;
  for (let i = result.length - 1; i > 0; i--) {
    s = (Math.imul(s, 1664525) + 1013904223) & 0xffffffff;
    const j = (s >>> 0) % (i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export const SHUFFLED_PALETTE: PaletteColor[] = seededShuffle(ORGANIZED_PALETTE, 42);

export const PALETTE_BY_NAME = new Map(
  SHUFFLED_PALETTE.map(c => [c.name, c]),
);