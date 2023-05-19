// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,collection} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAY7CNsFcXqVJJYZjru_ECgq0Deq4sLCVo",
  authDomain: "rsmovies-a62f6.firebaseapp.com",
  projectId: "rsmovies-a62f6",
  storageBucket: "rsmovies-a62f6.appspot.com",
  messagingSenderId: "972456028781",
  appId: "1:972456028781:web:e841d2118e771d5eeead64",
  measurementId: "G-8TQ2FZCTM8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export default app;