import classNames from 'classnames';
import { splitObjectPropsByArray } from '../../helpers';
import type { SizesProps } from '../types';
import { breakpointsSizes } from '../breakpoints';
import { mapStylesAttributes } from './helper';
import type { ColumnProps } from './types';

import classes from './column.scss';

export const Column = (props: ColumnProps) => {
  const [sizingProps, { children, dataTestId, style,  className, ...rest }] = splitObjectPropsByArray<
    ColumnProps,
    SizesProps
  >(props, breakpointsSizes);

  const { selectors, variables } = mapStylesAttributes(sizingProps);
  const classname = classNames(
    classes['column'],
    selectors.map((it) => classes[it]),
    className
  );

  return (
    <div data-test-id={dataTestId} className={classname} style={{ ...style, ...variables }} {...rest}>
      {children}
    </div>
  );
};
