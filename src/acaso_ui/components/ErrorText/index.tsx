import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import AcasoText from '../AcasoText';

interface IProps {
  label: string;
  state: boolean;
  styleText?: StyleProp<TextStyle> | undefined;
}

const ErrorText = ({ label, state, styleText }: IProps) => {
  if (state) {
    return <AcasoText value={label} variant="error" style={styleText} />;
  }
  return null;
};

export default ErrorText;
