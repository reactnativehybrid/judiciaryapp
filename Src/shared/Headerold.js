import { useNavigation } from '@react-navigation/core'
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, TouchableOpacity, View,SafeAreaView,
  ScrollView,ImageBackground} from 'react-native'
import { auth } from '../../firebase';
import AppLoading from 'expo-app-loading';
import { useFonts} from 'expo-font';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { LinearGradient } from 'expo-linear-gradient';
import 'react-native-gesture-handler';

export default function Header(){

    const navigation = useNavigation()


    let [fontsLoaded] = useFonts({
        'Roboto-Bold': require('../../public/fonts/Roboto-Bold.ttf'),
        'Roboto-BoldItalic': require('../../public/fonts/Roboto-BoldItalic.ttf'),
        'Roboto-Regular': require('../../public/fonts/Roboto-Regular.ttf'),
        'Roboto-Italic': require('../../public/fonts/Roboto-Italic.ttf'),
        'Roboto-Medium': require('../../public/fonts/Roboto-Medium.ttf'),
        'Roboto-Black': require('../../public/fonts/Roboto-Black.ttf'),
        'Roboto-MediumItalic': require('../../public/fonts/Roboto-MediumItalic.ttf'),
      });
    
    if (!fontsLoaded) {
        return <AppLoading/>;
    }

    return (
       <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}style={{   
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:'100%',
        paddingLeft:20,
        paddingRight:20,
        alignItems:'center',
        height:120,
        //backgroundColor:'#4a4a4c',
        backgroundColor: 'linear-gradient(to right bottom, rgb(77, 84, 209), rgb(165, 28, 123) 5%, rgb(238, 74, 55) 5%) center center',
        borderBottomRightRadius: 50,
        marginBottom:20,}}>
          <Text style={{fontSize: 18, color:'white'}}>
            Hello, 
            Sameer 
          </Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require('../../public/images/UJF.jpg')}
              style={{width: 50, height: 50}}
              imageStyle={{borderRadius: 25}}
            />
          </TouchableOpacity>
          
       </LinearGradient>
    );
}