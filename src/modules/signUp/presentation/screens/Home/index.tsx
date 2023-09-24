import React from 'react';
import { Button, Container, TextInput } from '@/acaso_ui';
import ConfirmPasswordTemplate from '@/modules/signUp/Shared/presentation/components/ConfirmPasswordTemplate';
import Margin from '@/acaso_ui/components/Margin';
import { useFormik } from 'formik';
import { Wrapper } from './styles';
import { signuPSchema } from './helpers/scshemaValidators';
import { useSignINavigator } from '../../routes';
import { RouteNameSignUp } from '../../routes/RouteName';

const Home = () => {
  const { navigate } = useSignINavigator();

  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastedName: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: () => {
      navigate(RouteNameSignUp.CONFIRM_EMAIL);
    },
    validationSchema: signuPSchema,
  });

  return (
    <Container title="Cadastro">
      <Wrapper>
        <TextInput
          label="E-mail*"
          type="email-address"
          placeHolder="seu@email.com"
          onChange={(t) => {
            handleChange('email')(t);
          }}
          error={{
            state: !!errors?.email,
            label: errors.email || '',
          }}
        />

        <Margin />

        <TextInput
          label="Primeiro nome*"
          placeHolder="Primeiro nome"
          onChange={(t) => {
            handleChange('firstName')(t);
          }}
          error={{
            state: !!errors.firstName,
            label: errors.firstName || '',
          }}
        />

        <Margin />

        <TextInput
          label="Último nome*"
          placeHolder="Último nome"
          onChange={(t) => {
            handleChange('lastedName')(t);
          }}
          error={{
            state: !!errors.lastedName,
            label: errors.lastedName || '',
          }}
        />

        <Margin />

        <ConfirmPasswordTemplate
          onchange={(t) => {
            handleChange('password')(t.password || '');
            handleChange('confirmPassword')(t.confirmPassword || '');
          }}
          error={{
            password: !!errors.password,
            state: !!errors.password || !!errors.confirmPassword,
            label: errors.password || errors.confirmPassword || '',
          }}
        />

        <Margin />

        <Button label="Criar conta em aca.so" onPress={handleSubmit} />

        <Margin />

        <Button label="Voltar ao login" variant="action_2" />
      </Wrapper>
    </Container>
  );
};

export default Home;
