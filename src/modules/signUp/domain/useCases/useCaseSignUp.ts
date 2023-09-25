import { useRequestSignUp } from '../../data/services/SignUpService';
import { IRequestSignUp } from '../../models/types';

interface IError {
  error: { code: 'ERR.1.0009'; message: 'Email already registered' };
  message: 'Request failed with status code 400';
  status: 400;
}

export const useSignUp = () => {
  const { isLoading, mutate, error, isSuccess } = useRequestSignUp();

  const request = (body: IRequestSignUp) => {
    mutate(body);
  };

  return {
    request,
    isLoading,
    isError: error as IError | null,
    isSuccess,
  };
};
