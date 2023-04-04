import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoS-GsWA1CG2T-XswuMHCuRkCtW9NfeZo",
  authDomain: "linkedin-clone-dc17a.firebaseapp.com",
  projectId: "linkedin-clone-dc17a",
  storageBucket: "linkedin-clone-dc17a.appspot.com",
  messagingSenderId: "505706650964",
  appId: "1:505706650964:web:1c729b2cddb6d862853cc1",
  measurementId: "G-GLX6R5PRBN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)

export { db, auth };