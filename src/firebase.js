// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAiwz9MQp33YeWYtJhottw4EWqfwUcZNY",
  authDomain: "jumia-firebase.firebaseapp.com",
  projectId: "jumia-firebase",
  storageBucket: "jumia-firebase.appspot.com",
  messagingSenderId: "657593046781",
  appId: "1:657593046781:web:b5bb370a15dcfb9fc15094"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
