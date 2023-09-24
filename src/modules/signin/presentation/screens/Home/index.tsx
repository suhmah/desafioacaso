import { Container, Button, colors } from '@/acaso_ui';
import TextInput from '@/acaso_ui/components/TextInput';
import React from 'react';
import Margin from '@/acaso_ui/components/Margin';
import { RouteName } from '@/main/routes/RouteName';
import { useSignINavigator } from '@/modules/signUp/presentation/routes';
import { Wrapper } from '@/modules/signIn/presentation/screens/Home/styles';

const Home = () => {
  const { navigate } = useSignINavigator();

  return (
    <Container title="login">
      <Wrapper>
        <TextInput
          label="E-mail"
          placeHolder="seu@email.com"
          type="email-address"
        />

        <Margin />

        <TextInput label="Senha" placeHolder="seu@email.com" type="password" />

        <Margin />

        <Button label="Entrar" labelColor={colors.primary.main} />

        <Margin />

        <Button label="Não possui conta em aca.so?" isDefault />

        <Margin height={8} />

        <Button
          label="Criar uma conta"
          variant="action_2"
          onPress={() => navigate(RouteName.SIGNUPROUTES)}
        />
      </Wrapper>
    </Container>
  );
};

export default Home;
