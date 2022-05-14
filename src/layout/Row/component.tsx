import { Flex } from '../Flex';
import { RowProps } from './types';

export const Row = ({ dataTestId, wrap = 'wrap', orientation, children }: RowProps) => (
  <Flex data-test-id={dataTestId} grow={1} wrap={wrap} direction={orientation}>
    {children}
  </Flex>
);
