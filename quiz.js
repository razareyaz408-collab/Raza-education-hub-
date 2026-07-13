import { auth, database } from "./firebase.js";

import {
  ref,
  update
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const submitBtn = document.getElementById("submitQuiz");

submitBtn.addEventListener("click", () => {

  let score = 0;

  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');

  if (!q1 || !q2) {
    alert("⚠️ Please answer all questions.");
    return;
  }

  if (q1.value === "B") score++;
  if (q2.value === "A") score++;

  const percentage = Math.round((score / 2) * 100);

  document.getElementById("result").innerHTML =
    "🏆 Your Score: " + percentage + "%";

  const user = auth.currentUser;

  if (user) {

    const studentRef = ref(database, "students/" + user.uid);

    update(studentRef, {
      quizScore: percentage
    });

  }

});
