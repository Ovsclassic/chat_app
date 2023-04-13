// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoxAW2ofbt1-CPYVYItr84iV5VCpCHmE4",
  authDomain: "chatapp-d9b44.firebaseapp.com",
  projectId: "chatapp-d9b44",
  storageBucket: "chatapp-d9b44.appspot.com",
  messagingSenderId: "1023135990710",
  appId: "1:1023135990710:web:cbf4cf7c2b2354a8763717",
  measurementId: "G-P9MTHJMXQB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
