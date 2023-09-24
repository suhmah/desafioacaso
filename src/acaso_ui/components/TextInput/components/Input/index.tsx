import React from 'react';
import DefaultInput from '../DefaultInput';
import { ITextInput } from '../..';
import EmailInput from '../EmailInput';
import PasswordInput from '../PasswordInput';

const Input = ({ onChange, placeHolder, ...props }: ITextInput) => {
  if (props.type === 'email-address') {
    return (
      <EmailInput onChange={onChange} placeHolder={placeHolder} {...props} />
    );
  }

  if (props.type === 'password') {
    return (
      <PasswordInput
        value={props.value}
        onChange={onChange}
        placeHolder={placeHolder}
        {...props}
      />
    );
  }
  return (
    <DefaultInput
      value={props.value}
      onChange={onChange}
      placeHolder={placeHolder}
      {...props}
    />
  );
};

export default Input;
