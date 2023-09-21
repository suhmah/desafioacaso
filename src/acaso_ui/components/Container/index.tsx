import React from 'react';

import { StatusBar } from 'react-native';
import { colors } from '@/acaso_ui';
import images from '@/acaso_ui/assets';
import { Main, Image } from './styles';
import AcasoText from '../AcasoText';

interface IContainer {
  children: React.ReactNode;
}

const Container = ({ children }: IContainer) => {
  const styleText = { marginTop: 77 };
  return (
    <Main>
      <StatusBar
        backgroundColor={colors.primary.main}
        barStyle="light-content"
      />
      <Image source={images.logo} />

      <AcasoText
        value="Login"
        variant="headtile-1"
        color={colors.primary.white}
        style={styleText}
      />

      {children}
    </Main>
  );
};

export default Container;
