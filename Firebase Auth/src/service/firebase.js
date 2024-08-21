// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0GNrJTIuNF5-DacuTrpVQZIamtGmB4s0",
  authDomain: "fir-auth-150de.firebaseapp.com",
  projectId: "fir-auth-150de",
  storageBucket: "fir-auth-150de.appspot.com",
  messagingSenderId: "256209573303",
  appId: "1:256209573303:web:aca24340b9cdcd03654432",
  measurementId: "G-ZGG2N0L7SD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
