// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-fdd98.firebaseapp.com",
  projectId: "mern-estate-fdd98",
  storageBucket: "mern-estate-fdd98.firebasestorage.app",
  messagingSenderId: "927849809269",
  appId: "1:927849809269:web:5beb04c37a83a50904bf3c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
