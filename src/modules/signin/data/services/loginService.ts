import { useMutation } from 'react-query';
import { loginRepository } from '../repository/loginRepository';

export const useRequestLogin = () => {
  return useMutation({
    mutationFn: loginRepository,
    onSuccess: () => {},
    onError: (error: Error) => {},
  });
};
