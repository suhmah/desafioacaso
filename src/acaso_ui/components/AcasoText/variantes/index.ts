import * as titles from './title';

export const variants = {
  'headtile-1': titles.title,
} as const;

export type TAcasoTextVariants = keyof typeof variants;
