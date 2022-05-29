import type { HTMLAttributes, ReactNode } from 'react';
import type { Breakpoints } from './breakpoints';

export type SizesProps = Partial<Record<Breakpoints, number>>;

export interface BaseComponent {
  dataTestId?: string;
}

export interface LayoutBaseComponentProps extends HTMLAttributes<HTMLDivElement>, BaseComponent {
  children?: ReactNode;
}
