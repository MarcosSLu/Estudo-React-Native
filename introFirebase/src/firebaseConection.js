import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCtu7hT2wpybrjFLUmHYuD46_rJsTrOZVY",
  authDomain: "devcurso-9bc62.firebaseapp.com",
  projectId: "devcurso-9bc62",
  storageBucket: "devcurso-9bc62.firebasestorage.app",
  messagingSenderId: "171263665265",
  appId: "1:171263665265:web:2e4bdeb17fb14148fce7d0"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
})

export {db, auth};