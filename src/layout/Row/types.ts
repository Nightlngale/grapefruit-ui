import type { Property } from 'csstype';
import type { LayoutBaseComponentProps } from '../types';

export interface RowProps extends LayoutBaseComponentProps {
  wrap?: Property.FlexWrap;
  orientation?: 'row' | 'column';
}
