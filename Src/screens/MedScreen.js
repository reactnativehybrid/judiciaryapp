
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../../firebase';

const MedScreen= () => {
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
export default MedScreen;