import type { Property } from 'csstype';
import { LayoutBaseComponentProps } from '../types';

export type FlexStyleProps = {
  display?: 'flex' | 'inline-flex';
  direction?: Property.FlexDirection;
  wrap?: Property.FlexWrap;
  justify?: Property.JustifyContent;
  align?: Property.AlignItems;
  alignSelf?: Property.AlignItems;
  alignContent?: Property.AlignContent;
  order?: Property.Order;
  grow?: Property.FlexGrow;
  shrink?: Property.FlexShrink;
  basis?: Property.FlexBasis;
  flex?: Property.Flex;
};

export type FlexStylePropsKeys = keyof FlexStyleProps;

export type FlexProps = LayoutBaseComponentProps & FlexStyleProps;
