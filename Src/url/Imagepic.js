import { auth,db} from '../../firebase'
import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/core'
import { getStorage, ref, uploadBytes ,getDownloadURL} from 'firebase/storage';
import {getFirestore, getDoc,setDoc,doc, snapshotEqual} from "firebase/firestore" ;
import * as ImagePicker from 'expo-image-picker';

function Imagepic(props){
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
}