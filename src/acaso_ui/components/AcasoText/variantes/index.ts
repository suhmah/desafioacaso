import * as titles from './title';
import * as body from './body';
import * as error from './error';

export const variants = {
  'headtile-1': titles.title,
  'body-1': body.body_1,
  'body-2': body.body_2,
  'body-3': body.body_3,
  error: error.error,
} as const;

export type TAcasoTextVariants = keyof typeof variants;
