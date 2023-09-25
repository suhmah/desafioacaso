import { useRequestSignUp } from '../../data/services/SignUpService';
import { IRequestValidateCode } from '../../models/types';

interface IError {
  error: { code: 'ERR.1.0009'; message: 'Email already registered' };
  message: 'Request failed with status code 400';
  status: 400;
}

export const useCaseValidateEmail = () => {
  const { isLoading, mutate, error } = useRequestSignUp();

  const request = (body: IRequestValidateCode) => {
    mutate(body);
  };

  return {
    request,
    isLoading,
    isError: error as IError | null,
  };
};
