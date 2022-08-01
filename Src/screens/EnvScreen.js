import {useNavigation} from '@react-navigation/native';
import React,{useState,useEffect} from 'react';
import {View, Button} from 'react-native';
import { auth,firestore } from '../../firebase'

export function EnvScreen() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Details', {name: 'Coffstack'})}
        title="Go to Details"
      />
    </View>
  );
}