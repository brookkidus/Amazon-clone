// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:procees.env.REACT_APP_API ,
  authDomain:procees.env.REACT_APP_DOMAIN,
  projectId: procees.env.REACT_APP_ID,
  storageBucket:procees.env.REACT_APP_BUCKET ,
  messagingSenderId: procees.env.REACT_APP_SENDERID,
  appId:procees.env.REACT_APP_APPID ,
  measurementId:procees.env.REACT_APP_MEASUREMENTID 
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { auth, db };