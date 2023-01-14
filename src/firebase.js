// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsnlL6OERlI8qscomKKiWw_GgyYym2D7k",
  authDomain: "realtor-clone-d40f7.firebaseapp.com",
  projectId: "realtor-clone-d40f7",
  storageBucket: "realtor-clone-d40f7.appspot.com",
  messagingSenderId: "808007025364",
  appId: "1:808007025364:web:0520484e1fa0b860a83141",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
