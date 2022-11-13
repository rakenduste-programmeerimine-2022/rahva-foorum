// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeOFHhGWyqTnfU4P3YixOox6fuEmwL6Fo",
  authDomain: "rahva-foorum.firebaseapp.com",
  projectId: "rahva-foorum",
  storageBucket: "rahva-foorum.appspot.com",
  messagingSenderId: "199237889271",
  appId: "1:199237889271:web:6dfc4a4d1d95e1051577f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db
};