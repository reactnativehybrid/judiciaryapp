// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import * as firebase from "firebase";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhyNFO6EsuN6yzHsYke3mxhZXEjBw1uYc",
  authDomain: "iit-project-565f2.firebaseapp.com",
  projectId: "iit-project-565f2",
  storageBucket: "iit-project-565f2.appspot.com",
  messagingSenderId: "274481330017",
  appId: "1:274481330017:web:6ca0592475dd5f84e6f720"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()
export { auth };