import { auth } from "./firebase.js";

import {
onAuthStateChanged,
signOut,
updateProfile
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
onAuthStateChanged(auth, (user) => {

if(user){

document.getElementById("userName").textContent =
user.displayName || "Student";

document.getElementById("userEmail").textContent =
user.email;

document.getElementById("userUID").textContent =
user.uid;

}else{

window.location.href="login.html";

}

});

document.getElementById("logoutBtn").addEventListener("click",async()=>{

await signOut(auth);

alert("Logout Successful");

window.location.href="login.html";

});
