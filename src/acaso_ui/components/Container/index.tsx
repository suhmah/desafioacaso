import React from 'react';

import { StatusBar } from 'react-native';
import colors from '@/acaso_ui/colors';
import images from '@/acaso_ui/assets';
import Metrics from '@/acaso_ui/helpers/metrics';
import { Main, Image, Wrapper } from './styles';
import AcasoText from '../AcasoText';

interface IContainer {
  children?: React.ReactNode;
  title: string;
}

const Container = ({ children, title }: IContainer) => {
  return (
    <Main>
      <StatusBar
        backgroundColor={colors.primary.main}
        barStyle="light-content"
      />
      <Wrapper>
        <Image source={images.logo} />

        <AcasoText
          value={title}
          variant="headtile-1"
          color={colors.primary.white}
          style={{ marginTop: Metrics(77), textAlign: 'center' }}
        />
        {children}
      </Wrapper>
    </Main>
  );
};

export default Container;
