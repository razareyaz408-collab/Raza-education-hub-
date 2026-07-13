import { auth, database } from "./firebase.js";

import {
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
ref,
get,
update
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

localStorage.setItem("lastSurah", id);

async function loadSurah() {
  try {
    const response = await fetch(
      `https://api.alquran.cloud/v1/surah/${id}/editions/quran-uthmani,en.asad`
    );

    const result = await response.json();

    const arabic = result.data[0];
    const english = result.data[1];

    const audioPlayer = document.getElementById("audioPlayer");

if (audioPlayer) {
audioPlayer.src =
  `https://server8.mp3quran.net/afs/${String(id).padStart(3, "0")}.mp3`;

audioPlayer.load();

  audioPlayer.load();

  audioPlayer.addEventListener("error", () => {
    alert("Audio failed to load");
  });
}

    document.getElementById("surahTitle").innerHTML =
      arabic.englishName + " (" + arabic.name + ")";

    let html = "";

    arabic.ayahs.forEach((ayah, index) => {
      html += `
        <div class="card">
          <h2 style="text-align:right;font-size:32px;line-height:2;">
            ${ayah.text}
          </h2>

          <p style="margin-top:15px;color:#444;">
            ${english.ayahs[index].text}
          </p>

          <p>Ayah ${ayah.numberInSurah}</p>
        </div>
      `;
    });

    document.getElementById("surahContent").innerHTML = html;

  } catch (error) {
    console.error(error);
    document.getElementById("surahContent").innerHTML =
      "Failed to load Surah.";
  }
}

loadSurah();

const bookmarkBtn = document.getElementById("bookmarkBtn");

if (bookmarkBtn) {

  bookmarkBtn.addEventListener("click", () => {

    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

if (!bookmarks.includes(id)) {
    bookmarks.push(id);
}

localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

alert("⭐ Surah Bookmarked Successfully!");
    
  });

}

const completeBtn = document.getElementById("completeBtn");

if (completeBtn) {

  completeBtn.addEventListener("click", () => {
onAuthStateChanged(auth, async (user) => {

if (!user) return;

const studentRef = ref(database, "students/" + user.uid);

const snapshot = await get(studentRef);

if (snapshot.exists()) {

const data = snapshot.val();

let progress = data.quranProgress + 1;

if (progress > 100) progress = 100;

await update(studentRef, {

quranProgress: progress,

overallProgress: progress

});

alert("✅ Progress Updated!");

   }

  });

});

}
