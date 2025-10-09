// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVNvtRCKkACIqIAfd-fSYIEuDRk9o39bg",
  authDomain: "react-course-udemy-3cc7d.firebaseapp.com",
  projectId: "react-course-udemy-3cc7d",
  storageBucket: "react-course-udemy-3cc7d.firebasestorage.app",
  messagingSenderId: "689206100809",
  appId: "1:689206100809:web:6d0b293eb961ccece7d098"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB   = getFirestore(FirebaseApp);