import { auth } from "./firebase.js";

import {

onAuthStateChanged,
signOut

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

onAuthStateChanged(auth,(user)=>{

if(user){

document.getElementById("userName").innerHTML=user.displayName || "Student";

document.getElementById("userEmail").innerHTML=user.email;

}else{

window.location.href="login.html";

}

});

document.getElementById("logoutBtn").addEventListener("click",async()=>{

await signOut(auth);

window.location.href="login.html";

});
