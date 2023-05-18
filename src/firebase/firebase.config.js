// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-ImprMkBVJT6J7tDUo-cL9Zb738qISQA",
  authDomain: "the-puzzled-mind.firebaseapp.com",
  projectId: "the-puzzled-mind",
  storageBucket: "the-puzzled-mind.appspot.com",
  messagingSenderId: "331755718949",
  appId: "1:331755718949:web:f910b155db1afbde4ef2cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;