import { useRequestLogin } from '../../data/services/loginService';
import { IRequestLogin } from '../../models/types';

export const useLogin = () => {
  const { isLoading, data, mutate } = useRequestLogin();

  const request = (body: IRequestLogin) => {
    mutate(body);
  };

  return {
    request,
    isLoading,
  };
};
