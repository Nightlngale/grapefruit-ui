import type { HTMLAttributes, ReactNode } from 'react';
import type { Breakpoint } from './breakpoints';

export type SizesProps = Partial<Record<Breakpoint, number>>;

export interface BaseComponent {
  dataTestId?: string;
}

export interface LayoutBaseComponentProps
  extends React.HTMLProps<HTMLDivElement>,
    HTMLAttributes<HTMLDivElement>,
    BaseComponent {
  children?: ReactNode;
}
