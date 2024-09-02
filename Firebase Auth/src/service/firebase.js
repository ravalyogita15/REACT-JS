// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASCedY7qxQqauTptg_QKV1LuEemhLDVAg",
  authDomain: "fir-auth-76424.firebaseapp.com",
  projectId: "fir-auth-76424",
  storageBucket: "fir-auth-76424.appspot.com",
  messagingSenderId: "354892091015",
  appId: "1:354892091015:web:80607d14a8f15769fd7222",
  measurementId: "G-PL4Y5N0GLL"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
