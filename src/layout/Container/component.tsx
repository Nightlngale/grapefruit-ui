import classNames from 'classnames';
import { ContainerProps } from './types';
import styles from './container.scss';

export const Container = (props: ContainerProps) => {
  const { dataTestId, children, className, ...rest } = props;

  return (
    <div data-test-id={dataTestId} className={classNames(className, styles.container)} {...rest}>
      {children}
    </div>
  );
}
