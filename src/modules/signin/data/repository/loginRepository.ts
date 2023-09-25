import { api } from '@/api/NetWork';
import { IRequestLogin } from '../../models/types';

export const loginRepository = async (body: IRequestLogin) => {
  try {
    const response = await api.post('/auth/login', {
      body,
    });

    return response.data;
  } catch (error) {}
};
