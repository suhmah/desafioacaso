import React, { useState } from 'react';
import Metrics from '@/acaso_ui/helpers/metrics';
import { validateEmail } from '@/acaso_ui/helpers/emailValidate';
import ErrorText from '@/acaso_ui/components/ErrorText';
import { Input } from '../../styles';
import { ITextInput } from '../..';

const EmailInput = ({ onChange, placeHolder, ...props }: ITextInput) => {
  const styleText = { marginTop: Metrics(8), marginLeft: Metrics(16) };
  const [error, SetError] = useState(false);
  const [local, setLocalValue] = useState<string>();

  return (
    <>
      <Input
        placeholder={placeHolder}
        onChangeText={(t) => {
          if (onChange) {
            if (!t) {
              SetError(false);
              onChange(t, false);
              setLocalValue(t);
            } else {
              SetError(!validateEmail(t));
              setLocalValue(t);
              onChange(t, !validateEmail(t));
            }
          }
        }}
        value={local}
        keyboardType="email-address"
        autoCapitalize="none"
        {...props}
      />
      <ErrorText
        label={props.error?.label || 'E-mail inválido'}
        state={props.error?.state || error}
        styleText={styleText}
      />
    </>
  );
};

export default EmailInput;
