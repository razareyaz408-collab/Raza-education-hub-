import { auth } from "./firebase.js";

import {

signInWithEmailAndPassword

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const loginForm = document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit", async(e)=>{

e.preventDefault();

const email=document.getElementById("loginEmail").value;

const password=document.getElementById("loginPassword").value;

try{

await signInWithEmailAndPassword(

auth,

email,

password

);

alert("✅ Login Successful");

window.location.href="dashboard.html";

}

catch(error){

alert(error.message);

}

});

}
