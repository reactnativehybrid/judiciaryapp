import * as React from 'react';
import { useNavigation } from '@react-navigation/core'
import { Text, View, StyleSheet, Animated,TouchableOpacity,ImageBackground } from 'react-native';
import 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
const Header_Max_Height = 120;
const Header_Min_Height = 90;

export default function DynamicHeader({animHeaderValue}) {
    const navigation = useNavigation()
 /* const animateHeaderBackgroundColor = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: ['blue', 'red'],
    extrapolate: 'clamp'
  })*/

  const animateHeaderHeight =  animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height , Header_Min_Height],
    extrapolate: 'clamp'
  })

  return (
  <LinearGradient colors={[ '#fdc830', '#f37335']}>
    <Animated.View 
        style={[
          styles.header,
          {
            height: animateHeaderHeight,  
          }
        
        ]}
      >
         
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
    </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    
    paddingLeft:20,
        paddingRight:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
            
    alignItems: 'center',      
    left: 0,
    right: 0,
    paddingTop: 10         
  },
  headerText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});
