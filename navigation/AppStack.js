import React from 'react';
import home from "../screens/home";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AboutScreen } from '../screens/EduScreen';
import MedScreen from '../screens/MedScreen';
import {EnvScreen} from '../screens/EnvScreen';
import {MouScreen} from '../screens/MouScreen';
import {LegalScreen}from '../screens/LegalScreen';
import {EduScreen} from '../screens/EduScreen';
import CustomDrawer from '../components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Drawer = createDrawerNavigator();

const AppStack = () =>{

  return (
    
    <Drawer.Navigator initialRouteName="Home" 
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
      drawerActiveBackgroundColor: '#aa18ea',
      drawerActiveTintColor: '#fff',
      drawerInactiveTintColor: '#333',
      drawerLabelStyle: {
        marginLeft: 5,
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
      },
      }}
    >
        <Drawer.Screen name="Home" component={home} 
         options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
        <Drawer.Screen name="Legal" component={LegalScreen} 
        options={{
          title: 'Legal',
         }}
        />
        <Drawer.Screen name="Educational" component={EduScreen}
         options={{
          title: 'Educational',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
        <Drawer.Screen name="Medical" component={MedScreen}
         options={{
          title: 'Medical',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
        <Drawer.Screen name="Environment" component={EnvScreen}
         options={{
          title: 'Environment',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          
        }}
        />
        <Drawer.Screen name="Mou" component={MouScreen}
         options={{
          title: 'Mou',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
      </Drawer.Navigator>
  
    
  );
}
export default AppStack;