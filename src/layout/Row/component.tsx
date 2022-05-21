import { Flex } from '../Flex';
import type { RowProps } from './types';

export const Row = (props: RowProps) => {
  const { dataTestId, wrap = 'wrap', orientation, children } = props;

  return (
    <Flex data-test-id={dataTestId} grow={1} wrap={wrap} direction={orientation}>
      {children}
    </Flex>
  );
}
