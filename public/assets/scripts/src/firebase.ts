import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyABqeaB_7wcPajPxQ1LWOWty5J4pxAV4qE",
  authDomain: "lab-ferrari-alex.firebaseapp.com",
  projectId: "lab-ferrari-alex",
  storageBucket: "lab-ferrari-alex.appspot.com",
  messagingSenderId: "882887958652",
  appId: "1:882887958652:web:009ee3352c202ed66aa9f9",
  measurementId: "G-HF7D9YDVCG"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);