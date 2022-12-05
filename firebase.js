// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFtHliycGYXd-B4ILsj2ymZWT7Mgur8Ok",
  authDomain: "instagram-clone-c4977.firebaseapp.com",
  projectId: "instagram-clone-c4977",
  storageBucket: "instagram-clone-c4977.appspot.com",
  messagingSenderId: "678352130695",
  appId: "1:678352130695:web:e9d093d7afb5fd8d0f5e22",
  measurementId: "G-GNTW497QJY",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, dp, storage };
