import { Button, Container, Margin, TextInput } from '@/acaso_ui';
import React, { useState } from 'react';
import { Wrapper } from './styles';

// import { Container } from './styles';

const ConfirmEmail = () => {
  const [number, setNumber] = useState<string>();
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
        <Button label="Não recebeu o código?" isDefault />
        <Margin height={8} />

        <Button label="Aguarde 1:59 para reenviar..." variant="action_1" />
      </Wrapper>
    </Container>
  );
};

export default ConfirmEmail;
