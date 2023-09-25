import { api } from '@/api/NetWork';
import { IRequestSignUp } from '../../models/types';

export const SignUpRepository = async (body: IRequestSignUp) => {
  const response = await api.post('/auth/sign-up', {
    email: body.email,
    first_name: body.firstName,
    last_name: body.lastedName,
    password: body.password,
  });

  return response.data;
};
