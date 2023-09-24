import { object, string } from 'yup';
import { validatePassword } from './validatePassword';

export const signuPSchema = object({
  email: string().required('E-mail é um campo obrigatório'),
  firstName: string().required('Primeiro nome é um campo obrigatório'),
  lastedName: string().required('Último nome é um campo obrigatório'),
  password: string()
    .required('Senha é um campo obrigatório')
    .min(6, 'A sua senha precisa ter no mínimo 6 caracteres')
    .test(
      'validate-password',
      'A senha precisa conter pelo menos 1 letra e 1 número',
      (value) => validatePassword(value),
    ),
  confirmPassword: string()
    .required('Confirme sua senha é um campo obrigatório')
    .min(6, 'A sua senha precisa ter no mínimo 6 caracteres')
    .test(
      'validate-password',
      'A senha precisa conter pelo menos 1 letra e 1 número',
      (value) => validatePassword(value),
    ),
});
