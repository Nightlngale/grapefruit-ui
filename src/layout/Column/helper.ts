import type { SizesProps } from '../types';

export const mapStylesAttributes = (args: SizesProps) => {
  const selectors: string[] = [];
  const variables: Record<string, number> = {};

  Object.entries(args).forEach(([key, value]) => {
    variables[`--col-${key}`] = value;
    selectors.push(`column-${key}`);
  });

  return {
    selectors,
    variables,
  };
};
