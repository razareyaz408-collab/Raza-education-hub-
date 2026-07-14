import { auth, database } from "./firebase.js";

import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  ref,
  get,
  update
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// ======================
// SETTINGS
// ======================

const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id")) || 1;

const language =
localStorage.getItem("translation") || "en.asad";

// Save last reading
localStorage.setItem("lastSurah", id);

// ======================
// DOM ELEMENTS
// ======================

const surahTitle =
document.getElementById("surahTitle");

const surahContent =
document.getElementById("surahContent");

const audioPlayer =
document.getElementById("audioPlayer");

const languageSelect =
document.getElementById("languageSelect");

const bookmarkBtn =
document.getElementById("bookmarkBtn");

const completeBtn =
document.getElementById("completeBtn");

const prevBtn =
document.getElementById("prevSurah");

const nextBtn =
document.getElementById("nextSurah");

// ======================
// LOAD SURAH
// ======================

async function loadSurah() {

  try {

    surahContent.innerHTML = `
      <div class="card">
        <h3 style="text-align:center">
          ⏳ Loading Surah...
        </h3>
      </div>
    `;

    const response = await fetch(
      `https://api.alquran.cloud/v1/surah/${id}/editions/quran-uthmani,${language},ar.alafasy`
    );

    if (!response.ok) {
      throw new Error("API Error");
    }

    const result = await response.json();

    const arabic = result.data[0];
    const translation = result.data[1];
    const audio = result.data[2];

    surahTitle.innerHTML =
      `${arabic.englishName} (${arabic.name})`;

      // ======================
    // FULL SURAH AUDIO
    // ======================

    audioPlayer.src =
      `https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${id}.mp3`;

    audioPlayer.load();

    audioPlayer.onended = () => {

      if (id < 114) {

        location.href = `surah.html?id=${id + 1}`;

      }

    };

    // ======================
    // SHOW AYAHS
    // ======================

    let html = "";

    arabic.ayahs.forEach((ayah, index) => {

      html += `

      <div class="card">

        <h2
        style="
        text-align:right;
        font-size:32px;
        line-height:2;
        direction:rtl;">
          ${ayah.text}
        </h2>

        <hr style="margin:15px 0;">

        <p style="font-size:17px;">
          ${translation.ayahs[index].text}
        </p>

        <p style="margin-top:12px;">
          <b>Ayah ${ayah.numberInSurah}</b>
        </p>

        <button
          class="hero-btn playAyah"
          data-audio="${audio.ayahs[index].audio}">
          ▶️ Play Ayah
        </button>

      </div>

      `;

    });

    surahContent.innerHTML = html;

    // ======================
    // PLAY SINGLE AYAH
    // ======================

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

  } catch (error) {

    console.error(error);

    surahContent.innerHTML = `
      <div class="card">
        <h3 style="text-align:center;color:red;">
          ❌ Failed to load Surah.
        </h3>
      </div>
    `;

  }

}

loadSurah();

// ======================
// BOOKMARK
// ======================

bookmarkBtn?.addEventListener("click", () => {

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

    alert("⚠️ Already Bookmarked!");

  }

});


// ======================
// UPDATE PROGRESS
// ======================

completeBtn?.addEventListener("click", () => {

  onAuthStateChanged(auth, async (user) => {

    if (!user) {

      alert("Please Login First");

      return;

    }

    try {

      const studentRef =
        ref(database, "students/" + user.uid);

      const snapshot =
        await get(studentRef);

      if (!snapshot.exists()) return;

      const data = snapshot.val();

      await update(studentRef, {

        quranProgress:
          Math.min((data.quranProgress || 0) + 1, 100),

        overallProgress:
          Math.min((data.overallProgress || 0) + 1, 100)

      });

      alert("✅ Progress Updated");

    } catch (error) {

      console.error(error);

      alert("❌ Failed to update progress.");

    }

  });

});

// ======================
// PREVIOUS SURAH
// ======================

prevBtn?.addEventListener("click", () => {

  if (id > 1) {

    location.href = `surah.html?id=${id - 1}`;

  } else {

    alert("📖 This is the first Surah.");

  }

});


// ======================
// NEXT SURAH
// ======================

nextBtn?.addEventListener("click", () => {

  if (id < 114) {

    location.href = `surah.html?id=${id + 1}`;

  } else {

    alert("🎉 You reached the last Surah.");

  }

});


// ======================
// TRANSLATION SELECTOR
// ======================

if (languageSelect) {

  languageSelect.value = language;

  languageSelect.addEventListener("change", () => {

    localStorage.setItem(
      "translation",
      languageSelect.value
    );

    location.reload();

  });

}


// ======================
// PAGE TITLE
// ======================

document.title = `Surah ${id} | Raza Education Hub`;


// ======================
// SCROLL TO TOP
// ======================

window.scrollTo({
  top: 0,
  behavior: "smooth"
});
