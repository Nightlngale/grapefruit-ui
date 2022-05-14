import classNames from 'classnames';
import { ContainerProps } from './types';
import styles from './container.module.scss';

export const Container = ({ dataTestId, children, className, ...rest }: ContainerProps) => (
  <div data-test-id={dataTestId} className={classNames(className, styles.container)} {...rest}>
    {children}
  </div>
);
