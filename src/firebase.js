// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//config file

import firebase from "firebase/compat/app";
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore/lite'
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA12ib4lHFMImKxk6L3PUCDWDJ4k87Nz74",
    authDomain: "clone-311b0.firebaseapp.com",
    projectId: "clone-311b0",
    storageBucket: "clone-311b0.appspot.com",
    messagingSenderId: "35661854928",
    appId: "1:35661854928:web:f4e8857c0b2e8d00fa86d5",
    measurementId: "G-H915SPPYZ3"
  };

const firebaseApp = initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
const db = getFirestore(firebaseApp)
// const auth = firebase.auth();
const auth = getAuth(firebaseApp)

export {db, auth};