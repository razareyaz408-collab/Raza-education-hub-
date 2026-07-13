import { auth, database } from "./firebase.js";

import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  ref,
  set,
  get
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

onAuthStateChanged(auth, async (user) => {

  if (!user) {
    window.location.href = "login.html";
    return;
  }

  document.getElementById("welcome").innerHTML =
    "👋 Welcome " + (user.displayName || "Student");

  const studentRef = ref(database, "students/" + user.uid);

const snapshot = await get(studentRef);

if (!snapshot.exists()) {

  await set(studentRef, {
    name: user.displayName || "Student",
    email: user.email,
    overallProgress: 35,
    quranProgress: 20,
    hadithProgress: 60,
    quizScore: 85
  });

}

const newSnapshot = await get(studentRef);

  if (newSnapshot.exists()) {

    const data = newSnapshot.val();
    document.getElementById("overallProgress").innerHTML =
      data.overallProgress + "%";

    document.getElementById("overallBar").style.width =
  data.overallProgress + "%";

    document.getElementById("quranProgress").innerHTML =
      data.quranProgress + "%";

    document.getElementById("quranBar").style.width =
  data.quranProgress + "%";

    document.getElementById("hadithProgress").innerHTML =
      data.hadithProgress + "%";

    document.getElementById("hadithBar").style.width =
  data.hadithProgress + "%";

    document.getElementById("quizScore").innerHTML =
      data.quizScore + "%";

  if (data.overallProgress >= 100) {

  document.getElementById("achievement").innerHTML = "🥇 Gold";

  document.getElementById("achievementText").innerHTML =
    "Congratulations! You completed the course.";

}

else if (data.overallProgress >= 50) {

  document.getElementById("achievement").innerHTML = "🥈 Silver";

  document.getElementById("achievementText").innerHTML =
    "Half course completed.";

}

else if (data.overallProgress >= 25) {

  document.getElementById("achievement").innerHTML = "🥉 Bronze";

  document.getElementById("achievementText").innerHTML =
    "Great start! Keep learning.";

    }
    
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
