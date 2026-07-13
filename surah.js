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

// Save last opened Surah
localStorage.setItem("lastSurah", id);

async function loadSurah() {

  try {

    const response = await fetch(
  `https://api.alquran.cloud/v1/surah/${id}/editions/quran-uthmani,en.asad,ar.alafasy`
);

    const result = await response.json();

    const arabic = result.data[0];
    const english = result.data[1];

    // Surah Title
    document.getElementById("surahTitle").innerHTML =
      `${arabic.englishName} (${arabic.name})`;

    // Audio Player
    const audioPlayer = document.getElementById("audioPlayer");

    if (audioPlayer) {

      audioPlayer.src =
        `https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${id}.mp3`;

      audioPlayer.load();

      audioPlayer.addEventListener("error", () => {
        console.log("Audio could not be loaded.");
      });

      audioPlayer.addEventListener("ended", () => {

  let next = parseInt(id) + 1;

  if (next <= 114) {

    window.location.href = `surah.html?id=${next}`;

   }

 });      
    
}

    // Ayahs
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

        <p><b>Ayah ${ayah.numberInSurah}</b></p>

        <button
class="hero-btn playAyah"
data-audio="${ayah.audio || ''}"
style="margin-top:10px;">
▶️ Play Ayah
</button>

      </div>
      `;

    });

    document.getElementById("surahContent").innerHTML = html;

  } catch (error) {

    console.error(error);

    document.getElementById("surahContent").innerHTML =
      "<h3>Failed to load Surah.</h3>";

  }

}

loadSurah();


// Bookmark

const bookmarkBtn = document.getElementById("bookmarkBtn");

if (bookmarkBtn) {

  bookmarkBtn.addEventListener("click", () => {

    let bookmarks =
      JSON.parse(localStorage.getItem("bookmarks")) || [];

    if (!bookmarks.includes(id)) {

      bookmarks.push(id);

      localStorage.setItem(
        "bookmarks",
        JSON.stringify(bookmarks)
      );

      alert("⭐ Surah Bookmarked!");

    } else {

      alert("Already Bookmarked!");

    }

  });

}


// Progress Update

const completeBtn = document.getElementById("completeBtn");

if (completeBtn) {

  completeBtn.addEventListener("click", () => {

    onAuthStateChanged(auth, async (user) => {

      if (!user) {

        alert("Please login first.");

        return;

      }

      const studentRef =
        ref(database, "students/" + user.uid);

      const snapshot = await get(studentRef);

      if (snapshot.exists()) {

        const data = snapshot.val();

        let quranProgress =
          Number(data.quranProgress || 0);

        let overallProgress =
          Number(data.overallProgress || 0);

        if (quranProgress < 100)
          quranProgress++;

        if (overallProgress < 100)
          overallProgress++;

        await update(studentRef, {

          quranProgress: quranProgress,

          overallProgress: overallProgress

        });

        alert("✅ Progress Updated Successfully!");

      }

    });

  });

                               }

// Previous & Next Surah Buttons

const prevBtn = document.getElementById("prevSurah");
const nextBtn = document.getElementById("nextSurah");

if (prevBtn) {

  prevBtn.addEventListener("click", () => {

    let prev = parseInt(id) - 1;

    if (prev < 1) {

      alert("This is the first Surah.");

      return;

    }

    window.location.href = `surah.html?id=${prev}`;

  });

}

if (nextBtn) {

  nextBtn.addEventListener("click", () => {

    let next = parseInt(id) + 1;

    if (next > 114) {

      alert("This is the last Surah.");

      return;

    }

    window.location.href = `surah.html?id=${next}`;

  });

}
