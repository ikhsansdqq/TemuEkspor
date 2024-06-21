// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVyxOzFFxt1TW0YAwquRrclc1XSjyfEGY",
  authDomain: "temuekspor-mvp.firebaseapp.com",
  databaseURL: "https://temuekspor-mvp-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "temuekspor-mvp",
  storageBucket: "temuekspor-mvp.appspot.com",
  messagingSenderId: "865220552149",
  appId: "1:865220552149:web:e19d943e577a8c1788895c",
  measurementId: "G-KJ77V7ES0J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
