import React from 'react';
import Metrics from '@/acaso_ui/helpers/metrics';
import { KeyboardTypeOptions, ViewStyle } from 'react-native';
import { Wrapper } from './styles';
import AcasoText from '../AcasoText';
import Input from './components/Input';

export interface IErrorInput {
  state: boolean | undefined;
  label: string | undefined;
}

export interface ITextInput {
  placeHolder?: string;
  label?: string;
  type?: KeyboardTypeOptions | 'password';
  onChange?: (e: string, error?: boolean) => void;
  value?: string;
  style?: ViewStyle;
  error?: IErrorInput;
}

const TextInput = ({ label, placeHolder, onChange, ...props }: ITextInput) => {
  const styleText = { marginLeft: Metrics(16) };
  return (
    <Wrapper>
      <AcasoText variant="body-1" value={label} style={styleText} />
      <Input onChange={onChange} placeHolder={placeHolder} {...props} />
    </Wrapper>
  );
};

export default TextInput;
