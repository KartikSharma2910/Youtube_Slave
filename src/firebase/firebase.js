import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDs0tOWlCAmSA2oJuYnxqRmyjbPe4LMebM",
  authDomain: "slave-78d46.firebaseapp.com",
  projectId: "slave-78d46",
  storageBucket: "slave-78d46.appspot.com",
  messagingSenderId: "1002170702172",
  appId: "1:1002170702172:web:db56f43864ce0085c4c999",
  measurementId: "G-E0DR8H9Z28",
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
