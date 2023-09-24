import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RouteName } from '@/main/routes/RouteName';
import SignUpRoutes from '@/modules/signUp/presentation/routes';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Home from '@/modules/signIn/presentation/screens/Home';
import { TSignInRouteParams } from '@/modules/signIn/presentation/routes/types';

const Stack = createNativeStackNavigator<TSignInRouteParams>();

const useSignINavigator = () => {
  return useNavigation<NavigationProp<TSignInRouteParams>>();
};

const SignInRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={RouteName.HOME} component={Home} />
      <Stack.Screen name={RouteName.SIGNUPROUTES} component={SignUpRoutes} />
    </Stack.Navigator>
  );
};

export default { SignInRoutes, useSignINavigator };
