import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';
import 'firebase/compat/analytics'

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWvfy04fG5wsvTS22uepEs_-OY5i2UzT4",
  authDomain: "tiffome-5077c.firebaseapp.com",
  databaseURL: "https://tiffome-5077c-default-rtdb.firebaseio.com",
  projectId: "tiffome-5077c",
  storageBucket: "tiffome-5077c.appspot.com",
  messagingSenderId: "78337069304",
  appId: "1:78337069304:web:9d8b338e349797caeb2b0d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
