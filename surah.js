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
const id = Number(params.get("id")) || 1;

// Save Last Reading
localStorage.setItem("lastSurah", id);

async function loadSurah() {

  try {

    document.getElementById("surahContent").innerHTML =
      "<h3>Loading Surah...</h3>";

    const response = await fetch(
      `https://api.alquran.cloud/v1/surah/${id}/editions/quran-uthmani,en.asad,ar.alafasy`
    );

    const result = await response.json();

    const arabic = result.data[0];
    const english = result.data[1];
    const audio = result.data[2];

    // Title
    document.getElementById("surahTitle").innerHTML =
      `${arabic.englishName} (${arabic.name})`;

    // Full Surah Audio
    const audioPlayer = document.getElementById("audioPlayer");

    if (audioPlayer) {

      audioPlayer.src =
        `https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${id}.mp3`;

      audioPlayer.load();

      audioPlayer.onended = () => {

        if (id < 114) {

          window.location.href = `surah.html?id=${id + 1}`;

        }

      };

    }

    // Ayahs
    let html = "";

    arabic.ayahs.forEach((ayah, index) => {

      html += `
      <div class="card">

        <h2 style="text-align:right;font-size:32px;line-height:2;">
          ${ayah.text}
        </h2>

        <p style="margin:15px 0;">
          ${english.ayahs[index].text}
        </p>

        <p><b>Ayah ${ayah.numberInSurah}</b></p>

        <button
        class="hero-btn playAyah"
        data-audio="${audio.ayahs[index].audio}">
        ▶️ Play Ayah
        </button>

      </div>
      `;

    });

    document.getElementById("surahContent").innerHTML = html;

    // Ayah Audio

    const ayahAudio = new Audio();

    document.querySelectorAll(".playAyah").forEach(btn => {

      btn.onclick = () => {

        ayahAudio.pause();

        ayahAudio.src = btn.dataset.audio;

        ayahAudio.play().catch(() => {

          alert("Audio unavailable.");

        });

      };

    });

  } catch (e) {

    console.error(e);

    document.getElementById("surahContent").innerHTML =
      "<h3>❌ Failed to load Surah.</h3>";

  }

}

loadSurah();


// Bookmark

document.getElementById("bookmarkBtn")?.addEventListener("click", () => {

  let bookmarks =
    JSON.parse(localStorage.getItem("bookmarks")) || [];

  if (!bookmarks.includes(id)) {

    bookmarks.push(id);

    localStorage.setItem(
      "bookmarks",
      JSON.stringify(bookmarks)
    );

    alert("⭐ Bookmarked Successfully");

  } else {

    alert("Already Bookmarked");

  }

});


// Progress

document.getElementById("completeBtn")?.addEventListener("click", () => {

  onAuthStateChanged(auth, async (user) => {

    if (!user) {

      alert("Please Login First");

      return;

    }

    const studentRef =
      ref(database, "students/" + user.uid);

    const snapshot = await get(studentRef);

    if (!snapshot.exists()) return;

    const data = snapshot.val();

    const quranProgress =
      Math.min((data.quranProgress || 0) + 1, 100);

    const overallProgress =
      Math.min((data.overallProgress || 0) + 1, 100);

    await update(studentRef, {

      quranProgress,
      overallProgress

    });

    alert("✅ Progress Updated");

  });

});


// Previous

document.getElementById("prevSurah")?.addEventListener("click", () => {

  if (id > 1) {

    window.location.href =
      `surah.html?id=${id - 1}`;

  } else {

    alert("This is the first Surah.");

  }

});


// Next

document.getElementById("nextSurah")?.addEventListener("click", () => {

  if (id < 114) {

    window.location.href =
      `surah.html?id=${id + 1}`;

  } else {

    alert("This is the last Surah.");

  }

});
