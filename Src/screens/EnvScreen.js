import {useNavigation} from '@react-navigation/native';
import React,{useState,useEffect} from 'react';
import {View, Button} from 'react-native';
import { auth,firestore } from '../../firebase'
import email from 'react-native-email'

export function EnvScreen() {
  const navigation = useNavigation(); 
  
  const handleEmail = () => {
    const to = ['iamumangg@gmail.com'] // string or array of email addresses
    email(to, {
        
        subject: 'Suggestion About the Application',
        body: 'Write your Valuable Feedback here',
        checkCanOpen: false // Call Linking.canOpenURL prior to Linking.openURL
    }).catch(console.error)
}



  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      
      
      <Button
        onPress={handleEmail}
        title="Contact Us"
      />
    </View>
  );
}

