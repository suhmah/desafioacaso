import React from 'react';
import ErrorText from '@/acaso_ui/components/ErrorText';
import Metrics from '@/acaso_ui/helpers/metrics';
import { Input } from '../../styles';
import { ITextInput } from '../..';

const DefaultInput = ({
  value,
  onChange,
  placeHolder,
  ...props
}: ITextInput) => {
  const styleText = { marginTop: Metrics(8), marginLeft: Metrics(16) };

  return (
    <>
      <Input
        value={value}
        placeholder={placeHolder}
        onChangeText={(t) => onChange && onChange(t)}
        {...props}
      />
      <ErrorText
        label={props?.error?.label || ''}
        state={props.error?.state || false}
        styleText={props.style || styleText}
      />
    </>
  );
};

export default DefaultInput;
