import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import { getDatabase } from "firebase/database";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCcZM3xSOuSm1SafB1rt_xOLoABxk9WC2M",
  authDomain: "visualblend-fbb5b.firebaseapp.com",
  projectId: "visualblend-fbb5b",
  storageBucket: "visualblend-fbb5b.appspot.com",
  messagingSenderId: "295882022548",
  appId: "1:295882022548:web:a9a467ef81ec3be77ade81",
  measurementId: "G-3HZ91C6BWK"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider(app);
export const db = getFirestore(app)
export const database = getDatabase(app);