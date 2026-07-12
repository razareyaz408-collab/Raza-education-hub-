import { auth } from "./firebase.js";

import {
onAuthStateChanged,
signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

onAuthStateChanged(auth, (user) => {

if (user) {

document.getElementById("welcome").innerHTML =
"👋 Welcome " + (user.displayName || "Student");

} else {

window.location.href = "login.html";

}

});

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

logoutBtn.addEventListener("click", async () => {

await signOut(auth);

alert("Logout Successful");

window.location.href = "login.html";

});

}
