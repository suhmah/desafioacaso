import { api } from '@/api/NetWork';
import { IRequestValidateCode } from '../../models/types';

export const ValidateCodeService = async (body: IRequestValidateCode) => {
  const response = await api.post('/auth/sign-up', {
    email: body.email,
    confirmation_code: body.confirmationCode,
  });

  return response.data;
};
