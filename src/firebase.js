import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey:  "AIzaSyAzzm5qAlMJgug-Mq6vFzj7WctBTQh6yyw",
  authDomain: "kreed-b0b60.firebaseapp.com",
  projectId: "kreed-b0b60",
  storageBucket: "kreed-b0b60.appspot.com",
  messagingSenderId: "602565333834",
  appId: "1:602565333834:web:a650c94a2af997fdc467b3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth()
export const storage = getStorage(app);