import { splitObjectPropsByArray } from '../../helpers';
import type { FlexProps, FlexStyleProps } from './types';
import { flexProps, mapFlexPropsToStyles } from './helper';

export const Flex = (props: FlexProps) => {
  const [styles, { children, dataTestId, ...rest }] = splitObjectPropsByArray<
    FlexProps,
    FlexStyleProps
  >(props, flexProps);

  return (
    <div data-test-id={dataTestId} style={mapFlexPropsToStyles(styles)} {...rest}>
      {children}
    </div>
  );
};
