import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs0tOWlCAmSA2oJuYnxqRmyjbPe4LMebM",
  authDomain: "slave-78d46.firebaseapp.com",
  projectId: "slave-78d46",
  storageBucket: "slave-78d46.appspot.com",
  messagingSenderId: "1002170702172",
  appId: "1:1002170702172:web:db56f43864ce0085c4c999",
  measurementId: "G-E0DR8H9Z28",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics };
