import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCNoVNUVqolCBP5SgXEHVSxy0VkT4IBZ24",
  authDomain: "raza-education-hub.firebaseapp.com",
  projectId: "raza-education-hub",
  storageBucket: "raza-education-hub.firebasestorage.app",
  messagingSenderId: "54645861151",
  appId: "1:54645861151:web:3505619bbb144121619e2a"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
