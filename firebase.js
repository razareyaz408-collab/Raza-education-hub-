// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNoVNUVqolCBP5SgXEHVSxy0VkT4IBZ24",
  authDomain: "raza-education-hub.firebaseapp.com",
  projectId: "raza-education-hub",
  storageBucket: "raza-education-hub.firebasestorage.app",
  messagingSenderId: "54645861151",
  appId: "1:54645861151:web:908c60ae16dd80ba619e2a",
  measurementId: "G-N0D06HSX8S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
