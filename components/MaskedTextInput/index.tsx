import NumberFormat from 'react-number-format';

import { IMaskedTextInput } from './types';

const MaskedTextInput = (props: IMaskedTextInput) => {
  const { inputRef, onChange, mask, ...restProps } = props;

  return (
    <NumberFormat
      {...restProps}
      getInputRef={inputRef}
      format={mask}
      onValueChange={values => {
        onChange({
          target: {
            name: props.name,
            value: values.value
          }
        });
      }}
    />
  );
};

export default MaskedTextInput;
