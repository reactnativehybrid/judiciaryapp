import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Linking,View, Button} from 'react-native';

export function EduScreen() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Button
      onPress={() => {Linking.openURL('tel:9873988');}}
      title="Call Helpline"
    />
  </View>
  );
}