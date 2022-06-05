
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from "./screens/home";
import RegisterPage from './screens/RegisterPage';

import { AuthScreen } from './screens';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Login">

         <Stack.Screen name="Login" component={AuthScreen} options={{ headerShown: true }}/>
         <Stack.Screen name="Register" component={RegisterPage} options={{ headerShown: true }}/>
         <Stack.Screen name="Home" component={home} options={{ headerShown: true }}/>
       </Stack.Navigator>
    </NavigationContainer>
    
  );
};