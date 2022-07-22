
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './Src/navigation/AuthStack';
import AppStack from './Src/navigation/AppStack';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <AuthStack /> 
    </NavigationContainer>
    
  );
};
