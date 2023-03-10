
import { useNavigation } from '@react-navigation/core';
import React, { useState, useRef } from 'react';
import { SafeAreaView, ScrollView, Text, Animated, StyleSheet } from 'react-native';
import { auth } from '../../firebase';
import DynamicHeader from '../components/Header';
import { DATA } from '../components/data';

const MedScreen= () => {
  const navigation = useNavigation();
  let scrollOffsetY = useRef(new Animated.Value(0)).current;  

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
            {DATA.map((book, index) => {
              return (                
                  <Text style={styles.scrollText} key={book.id}>{book.title}</Text>                
              )
            })}         
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({  
  container: {
    flex: 1,  
    paddingTop: 10, 
    margin: 0     
  },
  scrollText: {            
    fontSize: 19,
    textAlign: 'center',
    padding: 20,
    color: '#000'
  }
});
export default MedScreen;