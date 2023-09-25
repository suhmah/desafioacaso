import { RouteName } from '@/main/routes/RouteName';
import { RouteNameSignUp } from './RouteName';

export type TSignUpRouteParams = {
  [RouteName.HOME]: undefined;
  [RouteName.SIGNUPROUTES]: undefined;
  [RouteNameSignUp.CONFIRM_EMAIL]: { email: string };
};
