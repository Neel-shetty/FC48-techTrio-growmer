import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrFQP_k_U03DkAns35IdSEj2ZwkKJL5uw",
  authDomain: "growmer-19c3b.firebaseapp.com",
  projectId: "growmer-19c3b",
  storageBucket: "growmer-19c3b.appspot.com",
  messagingSenderId: "899712250201",
  appId: "1:899712250201:web:670dd0d746ac4082595c48",
  measurementId: "G-DMK3NKGZP0",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
