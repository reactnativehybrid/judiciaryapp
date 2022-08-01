
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getFirestore,getDoc,setDoc,doc} from "firebase/firestore" ;
import {getAuth} from "firebase/auth" ;

const firebaseConfig = {
  apiKey: "AIzaSyAV0Ecz6eb4fi_PKO9Zqt8gTPGBs_s-aXc",
  authDomain: "iit-test-ad13e.firebaseapp.com",
  projectId: "iit-test-ad13e",
  storageBucket: "iit-test-ad13e.appspot.com",
  messagingSenderId: "392171905381",
  appId: "1:392171905381:web:a473407b12fc856aae818c",
  measurementId: "G-EEBDVY8PD1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth= getAuth(app) ;
//const analytics = getAnalytics(app);
export const db =getFirestore(app) ;
/*export const createUserDocument =  (user, additionalData,Mobile) => {
    if (!user) return;
  
    //const userRef = firestore.doc(`Users/${user.uid}`);
    const userRef = doc(db,`Users/${user.uid}`);
    const snapshot = userRef.get();
  
    if (!snapshot.exists) {
      const { email } = user;
      const { UserName } = additionalData;
      const {Phoneno} = Mobile;
      try {
        setDoc(userRef,{
          UserName,
          email,
          Phoneno,
          createdAt: new Date(),
        });
      } catch (error) {
        console.log('Error in creating user', error);
      }
    }
  };*/
  /*export const createUserDocument =  (user, additionalData,Mobile) => {
    if (!user) return;
  
    const userRef = doc(db,`Users/${user.uid}`);
  
    const snapshot = getDoc(userRef);
  
    if (!snapshot.exists) {
      const { email } = user;
      const { UserName } = additionalData;
      const {Phoneno} = Mobile;
      try {
        setDoc(userRef,{
          UserName,
          email,
          Phoneno,
          createdAt: new Date(),
        });
      } catch (error) {
        console.log('Error in creating user', error);
      }
    }
  };*/
  export const createUserDocument = ()=>
  {

    const myDoc = doc(db,"MyCollection","MyDocument")
    const docData =
    {
      "name" :"Umang",
      "bio"  :"Engineer"
    }
    setDoc(myDoc,docData)
    .then(()=>{
      alert("Document Created")
    }
    )
    .catch((error)=>
    {
      alert(error.message) ;
    })

  }
  /*export const createUserDocument =  (user, additionalData,Mobile) => {
    if (!user) return;
    const myDoc = doc(db,"Users",user.uid)
    getDoc(myDoc)
      .then((snapshot)=>
      {
        if(!snapshot.exists)
        {
          const { email } = user;
          const { UserName } = additionalData;
          const {Phoneno} = Mobile;

          try
          {
            setDoc(myDoc,{
              UserName,
              email,
              Phoneno,
              createdAt: new Date(),
            });
       
          }
          catch(error)
          {
            console.log('Error in creating user', error);
          }
        }
      });
    }*/