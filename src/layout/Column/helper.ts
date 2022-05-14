import { SizesProps } from '../types';

export const mapStylesAttributes = (args: SizesProps) => {
  const classes: string[] = [];
  const variables: Record<string, number> = {};

  Object.entries(args).forEach(([key, value]) => {
    variables[`--col-${key}`] = value;
    classes.push(`col-${key}`);
  });

  return {
    classes,
    variables
  };
};
