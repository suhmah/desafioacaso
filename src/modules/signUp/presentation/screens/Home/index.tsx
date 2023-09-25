import React, { useEffect } from 'react';
import { Button, Container, ErrorText, TextInput } from '@/acaso_ui';
import ConfirmPasswordTemplate from '@/modules/signUp/Shared/presentation/components/ConfirmPasswordTemplate';
import Margin from '@/acaso_ui/components/Margin';
import { useFormik } from 'formik';
import { useSignUp } from '@/modules/signUp/domain/useCases/useCaseSignUp';
import { Wrapper } from './styles';
import { signuPSchema } from './helpers/scshemaValidators';
import { RouteNameSignUp } from '../../routes/RouteName';
import { useSignINavigator } from '../../routes';

const Home = () => {
  const { request, isLoading, isError, isSuccess } = useSignUp();
  const { navigate } = useSignINavigator();

  const { handleChange, handleSubmit, errors, values } = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastedName: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: (value) => {
      request({
        email: value.email,
        firstName: value.firstName,
        lastedName: value.lastedName,
        password: value.password,
      });
    },
    validationSchema: signuPSchema,
  });

  useEffect(() => {
    if (isSuccess) {
      navigate(RouteNameSignUp.CONFIRM_EMAIL, { email: values.email });
    }
  }, [isSuccess, navigate, values]);

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

        <Button
          label="Criar conta em aca.so"
          onPress={handleSubmit}
          loading={isLoading}
        />

        <ErrorText
          label={isError?.error?.message || ''}
          state={!!isError?.status}
          styleText={{ marginTop: 5 }}
        />

        <Margin />

        <Button label="Voltar ao login" variant="action_2" />
      </Wrapper>
    </Container>
  );
};

export default Home;
