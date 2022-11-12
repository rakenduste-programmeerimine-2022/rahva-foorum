// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

import {
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeOFHhGWyqTnfU4P3YixOox6fuEmwL6Fo",
  authDomain: "rahva-foorum.firebaseapp.com",
  projectId: "rahva-foorum",
  storageBucket: "rahva-foorum.appspot.com",
  messagingSenderId: "199237889271",
  appId: "1:199237889271:web:e595c5f8a33cf28f1577f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db,
  ref
};