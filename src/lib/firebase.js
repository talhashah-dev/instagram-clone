import { initializeApp, getApps , getApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut ,
  sendPasswordResetEmail,

} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  // apiKey: "AIzaSyDAtEhyKjjOq0LIJp9LdyDHuNhpUE8stqM",
  // authDomain: "instagramclone-50ea1.firebaseapp.com",
  // projectId: "instagramclone-50ea1",
  // storageBucket: "instagramclone-50ea1.appspot.com",
  // messagingSenderId: "392623062530",
  // appId: "1:392623062530:web:b548b287591e0362d3f11b",
  // measurementId: "G-GQFQL5ZNF6"
  apiKey: "AIzaSyAgfINf7zHbqg56HEboKhsmFKKU5cz93fM",
  authDomain: "clone-130f3.firebaseapp.com",
  projectId: "clone-130f3",
  storageBucket: "clone-130f3.appspot.com",
  messagingSenderId: "813361592349",
  appId: "1:813361592349:web:74a1eb9e9bbaddbe646ef4"
};




const app = initializeApp(firebaseConfig)
const auth = getAuth(app);
const db = getFirestore(app);

let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export {
  auth,
  db,
  getAuth,
  onAuthStateChanged,
  doc,
  setDoc,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  analytics,
};
