import { useMutation } from 'react-query';
import { SignUpRepository } from '../repository/SignUpRepository';

export const useRequestSignUp = () => {
  return useMutation({
    mutationFn: SignUpRepository,
  });
};
