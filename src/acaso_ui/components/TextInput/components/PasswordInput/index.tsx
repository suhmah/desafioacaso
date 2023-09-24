import React, { useState } from 'react';
import BaseIcon from '@/acaso_ui/components/BaseIcon';
import images from '@/acaso_ui/assets';
import { TouchableHighlight } from 'react-native';
import Metrics from '@/acaso_ui/helpers/metrics';
import ErrorText from '@/acaso_ui/components/ErrorText';
import { ContainerInput, TextInput } from '../../styles';
import { ITextInput } from '../..';

const PasswordInput = ({
  value,
  onChange,
  placeHolder,
  style,
  ...props
}: ITextInput) => {
  const [visible, setVisible] = useState(false);
  const styleText = { marginTop: Metrics(8), marginLeft: Metrics(16) };

  return (
    <>
      <ContainerInput>
        <TextInput
          value={value}
          placeholder={placeHolder}
          onChangeText={(t) => onChange && onChange(t)}
          secureTextEntry={visible}
          style={style}
          {...props}
        />
        <TouchableHighlight onPress={() => setVisible(!visible)}>
          <BaseIcon
            style={{ width: Metrics(19), height: Metrics(12) }}
            source={images.passwordIcon}
          />
        </TouchableHighlight>
      </ContainerInput>
      <ErrorText
        label={props?.error?.label || ''}
        state={props.error?.state || false}
        styleText={styleText}
      />
    </>
  );
};

export default PasswordInput;
