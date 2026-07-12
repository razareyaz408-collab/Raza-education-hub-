import { auth } from "./firebase.js";

import {
onAuthStateChanged,
signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

onAuthStateChanged(auth, (user) => {

if(user){

document.querySelector("h2").innerHTML =
"👋 Welcome " + (user.displayName || "Student");

}else{

window.location.href="login.html";

}

});
