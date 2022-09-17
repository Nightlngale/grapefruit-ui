import type { CSSProperties } from 'react';
import type { FlexStyleProps, FlexStylePropsKeys } from './types';

export const flexProps: FlexStylePropsKeys[] = [
  'display',
  'direction',
  'wrap',
  'justify',
  'justifySelf',
  'justifyItems',
  'align',
  'alignSelf',
  'alignContent',
  'order',
  'grow',
  'shrink',
  'basis',
  'flex'
];

export const mapFlexPropsToStyles = ({
  display = 'flex',
  direction,
  wrap,
  justify,
  align,
  grow,
  shrink,
  basis,
  ...rest
}: FlexStyleProps): CSSProperties => ({
  display,
  flexDirection: direction,
  flexWrap: wrap,
  justifyContent: justify,
  alignItems: align,
  flexGrow: grow,
  flexShrink: shrink,
  flexBasis: basis,
  ...rest
});
