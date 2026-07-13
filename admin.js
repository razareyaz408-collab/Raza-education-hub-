import { database } from "./firebase.js";

import {
  ref,
  get
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const studentRef = ref(database, "students");

get(studentRef).then((snapshot) => {

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

});
