import { Button, Container, Margin, TextInput } from '@/acaso_ui';
import React, { useState } from 'react';
import { useCaseValidateEmail } from '@/modules/signUp/domain/useCases/useCaseValidateEmail';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Wrapper } from './styles';
import { TSignUpRouteParams } from '../../routes/types';
import { RouteNameSignUp } from '../../routes/RouteName';

type RouteParams = RouteProp<TSignUpRouteParams, RouteNameSignUp.CONFIRM_EMAIL>;

const ConfirmEmail = () => {
  const {
    params: { email },
  } = useRoute<RouteParams>();
  const [number, setNumber] = useState<string>();

  const { request, isLoading } = useCaseValidateEmail();

  return (
    <Container title={`Confirmar\ne-mail`}>
      <Wrapper>
        <TextInput
          label="Código"
          placeHolder="Digite o código recebido..."
          value={number}
          onChange={(t) => {
            setNumber(t);
          }}
        />
        <Margin />
        <Button label="Confirmar e-mail" />
        <Margin />
        <Button
          label="Não recebeu o código?"
          isDefault
          loading={isLoading}
          onPress={() => {
            if (number) {
              request({
                email,
                confirmationCode: number,
              });
            }
          }}
        />
        <Margin height={8} />

        <Button label="Aguarde  para reenviar..." variant="action_1" />
      </Wrapper>
    </Container>
  );
};

export default ConfirmEmail;
