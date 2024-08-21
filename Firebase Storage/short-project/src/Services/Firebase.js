// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoh4t_FwXn3uTYYfqEhTE5kWMAHEqnm8U",
  authDomain: "fir-storage-c6a26.firebaseapp.com",
  projectId: "fir-storage-c6a26",
  storageBucket: "fir-storage-c6a26.appspot.com",
  messagingSenderId: "3691154399",
  appId: "1:3691154399:web:36316287d1242a164a926a",
  measurementId: "G-WN8MZX6JRP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()
export const db =getFirestore(app);
