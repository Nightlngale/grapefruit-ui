import { Flex } from '../Flex';
import type { RowProps } from './types';

export const Row = (props: RowProps) => {
  const { dataTestId, wrap = 'wrap', orientation, children, ...rest } = props;

  return (
    <Flex data-test-id={dataTestId} grow={1} wrap={wrap} direction={orientation} {...rest}>
      {children}
    </Flex>
  );
}
