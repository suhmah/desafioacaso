import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '@/modules/signIn/presentation/routes';
import { RouteName } from './RouteName';

const Stack = createNativeStackNavigator();

const PublicStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={RouteName.LOGIN} component={SignIn.SignInRoutes} />
    </Stack.Navigator>
  );
};

export default PublicStack;
