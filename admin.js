import { auth, database } from "./firebase.js";

import {
  ref,
  get
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const studentRef = ref(database, "students");

onAuthStateChanged(auth, async (user) => {

  if (!user) {
    window.location.href = "login.html";
    return;
  }

alert(user.uid);
  
if (user.uid !== "JEas0RgYp1MLSARWd3iMzHGuysW2") {

  alert("❌ Access Denied");

  window.location.href = "dashboard.html";

  return;

}

  const studentRef = ref(database, "students");

  const snapshot = await get(studentRef);

  if (!snapshot.exists()) {

    document.getElementById("studentList").innerHTML =
      "<h3>No Students Found</h3>";

    return;

  }

  const students = snapshot.val();

  let html = "";

  let total = 0;
  let quran = 0;
  let certificate = 0;

  for (const uid in students) {

    total++;

    const student = students[uid];

    if (student.quranProgress > 0) quran++;

    if (student.overallProgress >= 100) certificate++;

    html += `
      <div class="card">
        <h3>👤 ${student.name}</h3>
        <p>📧 ${student.email}</p>
        <p>📖 Quran Progress: ${student.quranProgress}%</p>
        <p>📊 Overall Progress: ${student.overallProgress}%</p>
      </div>
    `;

  }

  document.getElementById("studentList").innerHTML = html;

  document.getElementById("totalStudents").innerHTML = total;

  document.getElementById("quranStudents").innerHTML = quran;

  document.getElementById("certificateCount").innerHTML = certificate;

  const searchBox = document.getElementById("searchStudent");

searchBox.addEventListener("keyup", () => {

  const value = searchBox.value.toLowerCase();

  const cards = document.querySelectorAll("#studentList .card");

  cards.forEach((card) => {

    if (card.innerText.toLowerCase().includes(value)) {

      card.style.display = "block";

    } else {

      card.style.display = "none";

    }

  });

});

});

