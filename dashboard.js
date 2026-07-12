import { auth, database } from "./firebase.js";

import {
onAuthStateChanged,
signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
ref,
set
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

onAuthStateChanged(auth, (user) => {

if (user) {

set(
ref(database, "students/" + user.uid),
{
name: user.displayName,
email: user.email,
overallProgress: 35,
quranProgress: 20,
hadithProgress: 60,
quizScore: 85
}
);
  
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
