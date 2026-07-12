import { auth } from "./firebase.js";

import {
createUserWithEmailAndPassword,
updateProfile
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const signupForm = document.getElementById("signupForm");

if (signupForm) {

signupForm.addEventListener("submit", async (e) => {

e.preventDefault();

const name = document.getElementById("name").value.trim();

const email = document.getElementById("email").value.trim();

const password = document.getElementById("password").value;

try {

const userCredential = await createUserWithEmailAndPassword(
auth,
email,
password
);

await updateProfile(userCredential.user, {
displayName: name
});

alert("✅ Account Created Successfully!");

window.location.href = "dashboard.html";

}

catch(error){

alert(error.message);

}

});

}
