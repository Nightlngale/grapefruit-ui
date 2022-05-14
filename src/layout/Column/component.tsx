import classNames from 'classnames';
import { splitObjectPropsByArray } from '../../helpers';
import { SizesProps } from '../types';
import { breakpointsSizes } from '../breakpoints';
import { mapStylesAttributes } from './helper';
import type { ColumnProps } from './types';

import styles from './column.module.scss';

export const Column = (props: ColumnProps) => {
  const [{ children, dataTestId, ...rest }, sizingProps] = splitObjectPropsByArray<
    ColumnProps,
    SizesProps
  >(props, breakpointsSizes);

  const { classes, variables } = mapStylesAttributes(sizingProps);
  const className = classNames(
    styles.column,
    classes.map((it) => styles[it])
  );

  return (
    <div data-test-id={dataTestId} className={className} style={variables} {...rest}>
      {children}
    </div>
  );
};
