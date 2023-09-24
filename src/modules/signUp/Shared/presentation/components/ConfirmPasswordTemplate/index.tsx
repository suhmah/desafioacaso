import React, { useState } from 'react';
import { TextInput } from '@/acaso_ui';
import Margin from '@/acaso_ui/components/Margin';
import { IErrorInput } from '@/acaso_ui/components/TextInput';
import { checkPassword } from '../../helpers/checkPassword';

interface IOnchange {
  password?: string | undefined;
  confirmPassword?: string | undefined;
  error: boolean;
}

interface IError extends IErrorInput {
  password: boolean;
}

export interface IConfirmPasswordTemplate {
  onchange: (values: IOnchange) => void;
  error?: IError;
}

const ConfirmPasswordTemplate = ({
  onchange,
  error,
}: IConfirmPasswordTemplate) => {
  const [noEqual, setNoEqual] = useState(false);
  const [localPassword, setLocalPassword] = useState<string | undefined>();
  const [localConfirmPassword, setLocalConfirmPassword] = useState<
    string | undefined
  >();

  return (
    <>
      <TextInput
        label="Senha*"
        placeHolder="Senha"
        type="password"
        onChange={(t) => {
          setLocalPassword(t);
          const validate = checkPassword({
            password: t,
            confirmPassword: localConfirmPassword,
          });
          setNoEqual(!validate);

          onchange({
            password: t,
            error: validate,
            confirmPassword: localConfirmPassword,
          });
        }}
        error={
          error?.password
            ? {
                state: error?.state || noEqual,
                label: error?.label || 'Senhas não coincidem',
              }
            : {
                state: noEqual,
                label: 'Senhas não coincidem',
              }
        }
      />
      <Margin />

      <TextInput
        label="Confirme sua senha*"
        placeHolder="Confirme sua senha"
        type="password"
        onChange={(t) => {
          setLocalConfirmPassword(t);
          const validate = checkPassword({
            password: localPassword,
            confirmPassword: t,
          });

          setNoEqual(!validate);
          onchange({
            password: localPassword,
            error: validate,
            confirmPassword: t,
          });
        }}
        error={
          !error?.password
            ? {
                state: error?.state || noEqual,
                label: error?.label || 'Senhas não coincidem',
              }
            : {
                state: noEqual,
                label: 'Senhas não coincidem',
              }
        }
      />
    </>
  );
};

export default ConfirmPasswordTemplate;
