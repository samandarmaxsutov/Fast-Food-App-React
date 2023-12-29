// firebase.js

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDztmjxCPlBzLReFlCw73zMe6MvidTKeTc",
  authDomain: "fast-food-app-76b66.firebaseapp.com",
  databaseURL: "https://fast-food-app-76b66-default-rtdb.firebaseio.com",
  projectId: "fast-food-app-76b66",
  storageBucket: "fast-food-app-76b66.appspot.com",
  messagingSenderId: "215455682067",
  appId: "1:215455682067:web:9856953cd1f2e5153379e6",
  measurementId: "G-WGDLNQNVW3",
};


firebase.initializeApp(firebaseConfig);


const firestore = firebase.firestore();
const storage = firebase.storage();

export { firebase, firestore, storage };