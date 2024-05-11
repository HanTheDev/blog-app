// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-ea4e3.firebaseapp.com",
  projectId: "blog-ea4e3",
  storageBucket: "blog-ea4e3.appspot.com",
  messagingSenderId: "961125428133",
  appId: "1:961125428133:web:069811c48c1a584c7a964c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);