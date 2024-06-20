// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVyxOzFFxt1TW0YAwquRrclc1XSjyfEGY",
  authDomain: "temuekspor-mvp.firebaseapp.com",
  projectId: "temuekspor-mvp",
  storageBucket: "temuekspor-mvp.appspot.com",
  messagingSenderId: "865220552149",
  appId: "1:865220552149:web:e19d943e577a8c1788895c",
  measurementId: "G-KJ77V7ES0J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);