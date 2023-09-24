import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RouteName } from '@/main/routes/RouteName';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Home from '../screens/Home';
import { TSignUpRouteParams } from './types';
import { RouteNameSignUp } from './RouteName';
import ConfirmEmail from '../screens/ConfirmEmail';

const Stack = createNativeStackNavigator();

export const useSignINavigator = () => {
  return useNavigation<NavigationProp<TSignUpRouteParams>>();
};

const SignUpRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={RouteName.HOME} component={Home} />
      <Stack.Screen
        name={RouteNameSignUp.CONFIRM_EMAIL}
        component={ConfirmEmail}
      />
    </Stack.Navigator>
  );
};

export default SignUpRoutes;
