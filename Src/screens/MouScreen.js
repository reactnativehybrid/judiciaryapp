import {useNavigation} from '@react-navigation/native';
import React, { useState, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View,SafeAreaView,Animated,
  Image, FlatList, Linking, Button,StatusBar} from 'react-native'
import email from 'react-native-email'
import { ScrollView } from 'react-native-gesture-handler';
import DynamicHeader from '../components/Header';
export function MouScreen() {
  const navigation = useNavigation();
  let scrollOffsetY = useRef(new Animated.Value(0)).current;  

  const handleEmail = () => {
    const to = ['iamumangg@gmail.com'] // string or array of email addresses
    email(to, {
        
        subject: 'Suggestion About the Application',
        body: 'Write your Valuable Feedback here',
        checkCanOpen: false // Call Linking.canOpenURL prior to Linking.openURL
    }).catch(console.error)
}



  return (
    <SafeAreaView style={styles.container}>
    <DynamicHeader animHeaderValue={scrollOffsetY} />
    <ScrollView 
      scrollEventThrottle={16}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollOffsetY}}}],
        {useNativeDriver: false}
      )}
    >  
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop :200}}>
      
      
      <Button
        onPress={handleEmail}
        title="Contact Us"
      />
    </View>
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',paddingTop :100}}>
    <Button
      onPress={() => {Linking.openURL('tel:100');}}
      title="Call Helpline"
    />
  </View>
    </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({  
  container: {
    flex: 1,  
    
    margin: 0     
  },
  scrollText: {            
    fontSize: 19,
    textAlign: 'center',
    padding: 20,
    color: '#000'
  }
});