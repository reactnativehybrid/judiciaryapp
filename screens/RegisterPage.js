import React, { useState,useEffect} from 'react';
import { useNavigation } from '@react-navigation/core';
import { auth,createUserDocument } from '../firebase';
import { ImageBackground, View, Text, StyleSheet,KeyboardAvoidingView, TouchableOpacity, TextInput, Platform,Image, Alert, ScrollView } from 'react-native';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [UserName, setUserName] = useState('');
  const [Phoneno, setPhoneNumber] = useState('');
  
  const navigation = useNavigation();
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Home")
      }
    })
    return unsubscribe
  }, [])

  const handleSignUp = () => {
    auth.createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
       createUserDocument(user,{UserName},{Phoneno});
        console.log('Registered with:', user.email);
      })  
      .catch(error => alert(error.message))
  };
  const Login = () => {
    navigation.navigate("Login")
 
  };
  
  return (
      
    <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === 'ios'? 'padding':'height'}> 
          <ScrollView contentContainerStyle={{flex:1}}>
              <View style={styles.card}>
                   <Image style={styles.loginlogo}  source={require('../public/icons/UJF-128.jpg')}/>
                   <View style={styles.form}>
                       <View style={styles.inputs}>
                       <TextInput style={styles.input} placeholder="UserName" autoCapitalize="none" value={UserName} onChangeText={text => setUserName(text)}></TextInput>
                           <TextInput style={styles.input} placeholder="Email id" autoCapitalize="none" value={email} onChangeText={text => setEmail(text)}></TextInput>
                           <TextInput secureTextEntry={true} style={styles.input} autoCapitalize="none" placeholder="Password" autoCorrect={false} value={password} onChangeText={text => setPassword(text)}></TextInput>
                           <TextInput style={styles.input} placeholder="Mobile No." autoCapitalize="none" value={Phoneno} onChangeText={Number => setPhoneNumber(Number)}></TextInput>
                           <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                            <Text style={styles.buttonText}>SignUp</Text>
                           </TouchableOpacity>
                           <TouchableOpacity style={styles.create} onPress={Login}>
                           <Text style={styles.createText}>Already Have An Account ?</Text>
                         </TouchableOpacity>
                       </View>    
                   </View>
               </View> 
          </ScrollView>
        </KeyboardAvoidingView>
        
  );
};
  
  const styles = StyleSheet.create({

    main: {
        flex: 1,
       
    },  
    
    card: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        alignSelf: 'center',
    },
    
    loginlogo: {
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop:50,
        width:'100%',
        marginBottom:10,
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
      right:60,
    },
    createText: {
       fontSize:14,
       fontWeight:'bold',
       
     color: '#04AA6D',
    },
});
  
  export default RegisterPage;