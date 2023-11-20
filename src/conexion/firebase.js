// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuX4ei0xukMV_DycXKfywNtY3lxmDx5YU",
  authDomain: "react-app04-cea65.firebaseapp.com",
  databaseURL: "https://react-app04-cea65-default-rtdb.firebaseio.com",
  projectId: "react-app04-cea65",
  storageBucket: "react-app04-cea65.appspot.com",
  messagingSenderId: "180832192844",
  appId: "1:180832192844:web:3822134bfc9265a49ba7e9",
  measurementId: "G-5EJVCP256Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth(app);
export const db=getFirestore(app);
export const storage=getStorage(app);