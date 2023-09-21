import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@/modules/signin/presentation/screens/Home';
import { RouteName } from './RouteName';

const Stack = createNativeStackNavigator();

const PublicStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={RouteName.HOME} component={Home} />
    </Stack.Navigator>
  );
};

export default PublicStack;
