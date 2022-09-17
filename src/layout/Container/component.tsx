import classNames from 'classnames';
import type { ContainerProps } from './types';

import classes from './container.scss';

export const Container = (props: ContainerProps) => {
  const { dataTestId, children, className, fullwidth = false, ...rest } = props;

  return (
    <div
      data-test-id={dataTestId}
      className={classNames(className, classes['container'], {
        [classes['container-fullwidth']]: fullwidth,
      })}
      {...rest}
    >
      {children}
    </div>
  );
};
