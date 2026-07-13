import { auth, database } from "./firebase.js";

import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  ref,
  get
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

onAuthStateChanged(auth, async (user) => {

  if (!user) {
    window.location.href = "login.html";
    return;
  }

  const studentRef = ref(database, "students/" + user.uid);

  const snapshot = await get(studentRef);

  if (snapshot.exists()) {

    const data = snapshot.val();

    document.getElementById("studentName").innerHTML =
      data.name;

  }

});
