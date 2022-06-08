import React, { useState,useEffect} from 'react';
import { useNavigation } from '@react-navigation/core';
import { auth } from '../firebase';
import { ImageBackground, View, Text, StyleSheet,KeyboardAvoidingView, TouchableOpacity, TextInput, Platform,Image, Alert } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
const AuthScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])

 /* const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }*/

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }


    /*const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    console.log(userName,password);
    const onSubmit = () =>{
        //return Alert.alert(userName,password);

        if(userName =="admin@gmail.com" && password == "12345" ){
            Alert.alert( 'Success',
            'You are Logged in Successfully',
            [
              {
                text: 'Ok',
                onPress: () => navigation.navigate("Home"),
              },
            ],
            { cancelable: false });
            //navigation.navigate("Home");
        }else{
            Alert.alert('Username and Password is not correct');
        }
    };*/
    const Register = () => {
       navigation.navigate("Register")

    };
    return (


          <KeyboardAwareScrollView  contentContainerStyle={{flex:1}} extraHeight={120}> 
            <View style={styles.card}>
                 <Image style={styles.loginlogo}  source={require('../public/icons/UJF-128.jpg')}/>
                 <View style={styles.form}>
                     <View style={styles.inputs}>
                         <TextInput style={styles.input} placeholder="Email id" autoCapitalize="none" value={email} onChangeText={text => setEmail(text)}></TextInput>
                         <TextInput secureTextEntry={true} style={styles.input} autoCapitalize="none" placeholder="Password" autoCorrect={false} value={password} onChangeText={text => setPassword(text)}></TextInput>
                         <TouchableOpacity style={styles.button} onPress={handleLogin}>
                          <Text style={styles.buttonText}>Log in</Text>
                         </TouchableOpacity>
                         <TouchableOpacity style={styles.create} onPress={Register}>
                           <Text style={styles.createText}>Create new Account ?</Text>
                         </TouchableOpacity>
                     </View>    
                 </View>
             </View> 
            </KeyboardAwareScrollView> 
        
    );
};

const styles = StyleSheet.create({
     
    card: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%',  
        alignSelf: 'center',
    },
    
    loginlogo: {
        resizeMode: 'contain',
        width:'100%',
        marginTop:50,
        marginBottom:'30%',
    },
    form: {
        flex: 1,
        justifyContent: 'space-between',
       
    },
    inputs: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',   
    },  
    input: {
        width: '80%',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginBottom:20,
        fontSize: 16, 
        fontWeight:'400',
        minHeight: 40,
    },
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
    create:{
      textAlign: 'left',
      position:'relative',
      right:75,
    },
    createText: {
       fontSize:14,
       fontWeight:'bold',
       
     color: '#04AA6D',
    },
});

export default AuthScreen;