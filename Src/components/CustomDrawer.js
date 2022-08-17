import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Share,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { auth,db} from '../../firebase'
import { useNavigation } from '@react-navigation/core'
import { getStorage, ref, uploadBytes ,getDownloadURL} from 'firebase/storage';
import {getFirestore, getDoc,setDoc,doc, snapshotEqual} from "firebase/firestore" ;
import * as ImagePicker from 'expo-image-picker';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CustomDrawer = props => {
  const navigation = useNavigation()
  // share link
  const onShare = async () => {
    try{
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction)
      {
        // dismissed
      }
    } catch (error){
     alert(error.message);
    }
  };
  //image upload and show
  const [image,setimage] =useState(null)
  const [useri,setname] =useState("")
  useEffect(() => {(async () => {
    const storage = getStorage();
     let s = auth.currentUser?.uid;
   
      const reference = ref(storage, s);
      await getDownloadURL(reference).then((x) => {
        setimage(x);

      })
      const myDoc= doc(db,"Users",s);
        getDoc(myDoc) 
       .then((snapshot)=>
      {
      if(snapshot.exists)
      {

      setname(snapshot.data().UserName) ;
      //console.log(useri) ;
      }});
     if (Platform.OS !== 'web') {
       const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
       if (status !== 'granted') {
         alert('Sorry, we need camera roll permissions to make this work!');
       }
     }
   })(); }, []
  );

  const pickImage = async () => {
  
   let result = await ImagePicker.launchImageLibraryAsync({
     media: 'photo',
     allowsEditing: true,
     aspect: [4, 3],
     quality: 1,
   });
   //console.log(result) ;

   if (!result.cancelled) {
     setimage(result.uri)
   
     const storage = getStorage(); //the storage itself
    //  let link = result.uri
     let s = auth.currentUser?.uid;
      //let s='GGErg'
      console.log(s)
     const refi = ref(storage,s); //how the image will be addressed inside the storage
     
     //convert image to array of bytes
     const img = await fetch(result.uri);
     const bytes =await img.blob();
     await uploadBytes(refi, bytes); //upload images
   }
  };
  // Signout
  const handleSignOut = () =>
  {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#f37335'}}>
        <ImageBackground  style={{padding: 20,}} >
          <TouchableOpacity onPress={pickImage}>
          <Image 
          style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10,borderColor:"white",borderWidth:5,}}
          source={{uri:image}}

          //source={require('./images/image.png')}
        />
        </TouchableOpacity>
        
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              marginLeft:10,
            }}>
             {useri}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: '#fff',
                marginRight: 15,
              }}>
            </Text>
          </View>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 20}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={onShare} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}>
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignOut} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;