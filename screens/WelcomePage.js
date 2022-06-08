import React, { useState,useEffect} from 'react';
import { useNavigation } from '@react-navigation/core';
import { auth } from '../firebase';
import { ImageBackground, View, Text, StyleSheet,KeyboardAvoidingView, TouchableOpacity, TextInput, Platform,Image, Alert } from 'react-native';


const WelcomePage = () =>{
    return(
        <View>
           <TouchableOpacity style={styles.button}>
             <Text style={styles.buttonText}>SignUp</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.button} >
             <Text style={styles.buttonText}>SignUp</Text>
           </TouchableOpacity>
        </View>
    )
  
}
const styles = StyleSheet.create({
    button: {
        marginTop:'20%',
        marginBottom:20,
        width: '80%',
        backgroundColor: 'black',
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight:'400',
    },
});
export default WelcomePage;