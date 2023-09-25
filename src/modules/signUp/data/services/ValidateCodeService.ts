import { useMutation } from 'react-query';
import { SignUpRepository } from '../repository/SignUpRepository';
import { useSignINavigator } from '../../presentation/routes';
import { RouteNameSignUp } from '../../presentation/routes/RouteName';

export const useValidateCodeService = () => {
  const { navigate } = useSignINavigator();
  return useMutation({
    mutationFn: SignUpRepository,
    onSuccess: () => {
      navigate(RouteNameSignUp.CONFIRM_EMAIL);
    },
  });
};
