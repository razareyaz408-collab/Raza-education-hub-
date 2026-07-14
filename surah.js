// ======================================
// RAZA EDUCATION HUB
// Quran Reader v3 Professional
// Part 1
// ======================================

import { auth, database } from "./firebase.js";

import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  ref,
  get,
  update
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// ======================================
// URL PARAMETERS
// ======================================

const params = new URLSearchParams(window.location.search);

const surahId = Number(params.get("id")) || 1;

// ======================================
// USER SETTINGS
// ======================================

const settings = {

  translation:
    localStorage.getItem("translation") || "en.asad",

  theme:
    localStorage.getItem("theme") || "light",

  fontSize:
    Number(localStorage.getItem("fontSize")) || 32

};

// ======================================
// DOM ELEMENTS
// ======================================

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

// ======================================
// GLOBAL VARIABLES
// ======================================

let arabicData = null;

let translationData = null;

let audioData = null;

const ayahAudio = new Audio();

// ======================================
// PAGE SETTINGS
// ======================================

document.title =
`Surah ${surahId} | Raza Education Hub`;

localStorage.setItem(
"lastSurah",
surahId
);

if(settings.theme==="dark"){

document.body.classList.add("dark-mode");

}

// ======================================
// LANGUAGE SELECT
// ======================================

if(languageSelect){

languageSelect.value=settings.translation;

languageSelect.onchange=()=>{

localStorage.setItem(
"translation",
languageSelect.value
);

location.reload();

};

}

console.log("✅ Part 1 Loaded");

// ======================================
// LOAD SURAH
// ======================================

async function loadSurah() {

  try {

    surahContent.innerHTML = `
      <div class="card">
        <h2 style="text-align:center">
          ⏳ Loading Surah...
        </h2>
      </div>
    `;

    const response = await fetch(
      `https://api.alquran.cloud/v1/surah/${surahId}/editions/quran-uthmani,${settings.translation},ar.alafasy`
    );

    if (!response.ok) {
      throw new Error("Unable to load Surah.");
    }

    const result = await response.json();

    arabicData = result.data[0];
    translationData = result.data[1];
    audioData = result.data[2];

    surahTitle.innerHTML =
      `${arabicData.englishName} (${arabicData.name})`;

    audioPlayer.src =
      `https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${surahId}.mp3`;

    audioPlayer.load();

    renderAyahs();

  } catch (error) {

    console.error(error);

    surahContent.innerHTML = `
      <div class="card">
        <h2 style="color:red;text-align:center">
          ❌ Failed to Load Surah
        </h2>

        <p style="text-align:center">
          Please check your internet connection.
        </p>

        <button class="hero-btn" onclick="loadSurah()">
          🔄 Retry
        </button>
      </div>
    `;

  }

}

// ======================================
// RENDER AYAHS
// ======================================

function renderAyahs() {

  if (!arabicData || !translationData || !audioData) return;

  let html = "";

  arabicData.ayahs.forEach((ayah, index) => {

    html += `
      <div class="card">

        <h2 class="ayahArabic"
        style="
          direction:rtl;
          text-align:right;
          line-height:2;
          font-size:${settings.fontSize}px;
        ">
          ${ayah.text}
        </h2>

        <hr>

        <p class="translation">
          ${translationData.ayahs[index].text}
        </p>

        <p class="ayahNumber">
          Ayah ${ayah.numberInSurah}
        </p>

        <div class="ayahButtons">

          <button
            class="hero-btn playAyah"
            data-audio="${audioData.ayahs[index].audio}">
            ▶️ Play
          </button>

          <button
            class="hero-btn copyAyah"
            data-text="${ayah.text}">
            📋 Copy
          </button>

          <button
            class="hero-btn shareAyah"
            data-text="${ayah.text}">
            📤 Share
          </button>

          <button
            class="hero-btn favAyah"
            data-number="${ayah.numberInSurah}"
            data-text="${ayah.text}">
            ⭐ Favourite
          </button>

          <button
            class="hero-btn saveAyah"
            data-number="${ayah.numberInSurah}"
            data-text="${ayah.text}">
            💾 Save
          </button>

        </div>

      </div>
    `;

  });

  surahContent.innerHTML = html;

  activateAyahButtons();

}

// ======================================
// ACTIVATE AYAH BUTTONS
// ======================================

function activateAyahButtons() {

  // ▶️ PLAY AYAH
  document.querySelectorAll(".playAyah").forEach(btn => {

    btn.onclick = () => {

      ayahAudio.pause();

      ayahAudio.src = btn.dataset.audio;

      ayahAudio.play().catch(() => {

        alert("❌ Audio unavailable");

      });

    };

  });

  // 📋 COPY AYAH
  document.querySelectorAll(".copyAyah").forEach(btn => {

    btn.onclick = async () => {

      try {

        await navigator.clipboard.writeText(
          btn.dataset.text
        );

        alert("✅ Ayah Copied");

      } catch {

        alert("❌ Copy Failed");

      }

    };

  });

  // 📤 SHARE AYAH
  document.querySelectorAll(".shareAyah").forEach(btn => {

    btn.onclick = async () => {

      if (navigator.share) {

        try {

          await navigator.share({

            title: "Holy Quran",

            text: btn.dataset.text

          });

        } catch {}

      } else {

        await navigator.clipboard.writeText(
          btn.dataset.text
        );

        alert("📋 Ayah copied. Share manually.");

      }

    };

  });

  // ⭐ FAVOURITE AYAH
  document.querySelectorAll(".favAyah").forEach(btn => {

    btn.onclick = () => {

      let fav = JSON.parse(
        localStorage.getItem("favouriteAyahs") || "[]"
      );

      const item = {
        surah: surahId,
        ayah: Number(btn.dataset.number),
        text: btn.dataset.text
      };

      const exists = fav.findIndex(a =>
        a.surah === item.surah &&
        a.ayah === item.ayah
      );

      if (exists === -1) {

        fav.push(item);

        btn.innerHTML = "⭐ Saved";

      } else {

        fav.splice(exists, 1);

        btn.innerHTML = "⭐ Favourite";

      }

      localStorage.setItem(
        "favouriteAyahs",
        JSON.stringify(fav)
      );

    };

  });

  // 💾 SAVE AYAH
  document.querySelectorAll(".saveAyah").forEach(btn => {

    btn.onclick = () => {

      let saved = JSON.parse(
        localStorage.getItem("savedAyah") || "[]"
      );

      saved.push({

        surah: surahId,

        ayah: Number(btn.dataset.number),

        text: btn.dataset.text,

        date: new Date().toLocaleString()

      });

      localStorage.setItem(
        "savedAyah",
        JSON.stringify(saved)
      );

      btn.innerHTML = "✅ Saved";

    };

  });

}

// ======================================
// PART 5
// SETTINGS + INITIALIZATION
// ======================================

// Theme
function applyTheme() {
  document.body.classList.toggle(
    "dark-mode",
    localStorage.getItem("theme") === "dark"
  );
}

// Font Size
function applyFontSize() {
  const size = Number(localStorage.getItem("fontSize")) || 32;

  document.querySelectorAll(".ayahArabic").forEach(el => {
    el.style.fontSize = size + "px";
  });
}

// Translation
function applyLanguage() {

  if (!languageSelect) return;

  languageSelect.value =
    localStorage.getItem("translation") || "en.asad";

  languageSelect.onchange = () => {

    localStorage.setItem(
      "translation",
      languageSelect.value
    );

    location.reload();

  };

}

// Reading History
function saveHistory() {

  let history =
    JSON.parse(localStorage.getItem("readingHistory")) || [];

  history.unshift({

    surah: id,

    date: new Date().toLocaleString()

  });

  history = history.slice(0, 20);

  localStorage.setItem(
    "readingHistory",
    JSON.stringify(history)
  );

}

// Keyboard Navigation
document.addEventListener("keydown", e => {

  if (e.key === "ArrowRight" && id < 114)
    location.href = `surah.html?id=${id + 1}`;

  if (e.key === "ArrowLeft" && id > 1)
    location.href = `surah.html?id=${id - 1}`;

});

// Auto Next
audioPlayer.onended = () => {

  if (id < 114) {

    location.href =
      `surah.html?id=${id + 1}`;

  }

};

// Last Visit
localStorage.setItem(
  "lastVisit",
  new Date().toLocaleString()
);

// Start
applyTheme();
applyLanguage();
loadSurah();
saveHistory();

console.log("✅ surah.js loaded");

// ======================================
// PART 6
// BOOKMARK + FAVOURITE + FIREBASE
// ======================================

// Bookmark Surah
bookmarkBtn?.addEventListener("click", () => {

  let bookmarks = JSON.parse(
    localStorage.getItem("bookmarks") || "[]"
  );

  if (!bookmarks.includes(id)) {

    bookmarks.push(id);

    localStorage.setItem(
      "bookmarks",
      JSON.stringify(bookmarks)
    );

    alert("⭐ Surah Bookmarked");

  } else {

    alert("Already Bookmarked");

  }

});

// Favourite Ayah
function toggleFavouriteAyah(number, text) {

  let fav = JSON.parse(
    localStorage.getItem("favouriteAyahs") || "[]"
  );

  const index = fav.findIndex(
    a => a.surah === id && a.number === number
  );

  if (index === -1) {

    fav.push({
      surah: id,
      number,
      text
    });

    alert("⭐ Favourite Added");

  } else {

    fav.splice(index, 1);

    alert("🗑 Favourite Removed");

  }

  localStorage.setItem(
    "favouriteAyahs",
    JSON.stringify(fav)
  );

}

document.addEventListener("click", e => {

  if (!e.target.classList.contains("favAyah")) return;

  toggleFavouriteAyah(
    Number(e.target.dataset.number),
    e.target.dataset.text
  );

});

// Firebase Progress
completeBtn?.addEventListener("click", () => {

  onAuthStateChanged(auth, async user => {

    if (!user) {

      alert("Login First");
      return;

    }

    try {

      const userRef = ref(
        database,
        "students/" + user.uid
      );

      const snap = await get(userRef);

      const data = snap.exists()
        ? snap.val()
        : {};

      await update(userRef, {

        quranProgress:
          Math.min((data.quranProgress || 0) + 1, 100),

        overallProgress:
          Math.min((data.overallProgress || 0) + 1, 100)

      });

      alert("✅ Progress Updated");

    } catch (err) {

      console.error(err);

      alert("Progress Update Failed");

    }

  });

});

// Previous Surah
prevBtn?.addEventListener("click", () => {

  if (id > 1) {

    location.href =
      `surah.html?id=${id - 1}`;

  }

});

// Next Surah
nextBtn?.addEventListener("click", () => {

  if (id < 114) {

    location.href =
      `surah.html?id=${id + 1}`;

  }

});

console.log("✅ Part 6 Loaded");

// ======================================
// PART 7
// SEARCH + SAVED AYAH + STATS
// ======================================

// Search Box
const searchBox = document.createElement("input");

searchBox.type = "search";
searchBox.placeholder = "🔍 Search Translation...";
searchBox.className = "search-box";

searchBox.style.cssText = `
width:100%;
padding:12px;
margin:20px 0;
border-radius:10px;
`;

surahTitle.insertAdjacentElement(
  "afterend",
  searchBox
);

searchBox.addEventListener("input", () => {

  const key = searchBox.value.toLowerCase();

  document.querySelectorAll("#surahContent .card")
  .forEach(card => {

    card.style.display =
      card.innerText.toLowerCase().includes(key)
      ? "block"
      : "none";

  });

});

// Saved Ayah
document.addEventListener("click", e => {

  if (!e.target.classList.contains("saveAyah")) return;

  let saved = JSON.parse(
    localStorage.getItem("savedAyahs") || "[]"
  );

  saved.push({

    surah: id,

    ayah: e.target.dataset.number,

    text: e.target.dataset.text

  });

  localStorage.setItem(
    "savedAyahs",
    JSON.stringify(saved)
  );

  alert("⭐ Ayah Saved");

});

// Reading Statistics
const stats = JSON.parse(
  localStorage.getItem("readingStats") || "{}"
);

stats.total = (stats.total || 0) + 1;

stats.lastSurah = id;

stats.lastVisit = new Date().toLocaleString();

localStorage.setItem(
  "readingStats",
  JSON.stringify(stats)
);

const statsCard = document.createElement("div");

statsCard.className = "card";

statsCard.innerHTML = `
<h3>📊 Reading Statistics</h3>

<p>📖 Total Opens: ${stats.total}</p>

<p>📚 Current Surah: ${id}/114</p>

<p>🕒 Last Visit:<br>${stats.lastVisit}</p>
`;

surahContent.appendChild(statsCard);

console.log("✅ Part 7 Loaded");

// ======================================
// PART 8
// FINAL FEATURES
// ======================================

// Export Favourite Ayahs
function exportFavourites() {

  const fav = JSON.parse(
    localStorage.getItem("favouriteAyahs") || "[]"
  );

  if (fav.length === 0) {
    alert("No Favourite Ayah");
    return;
  }

  const blob = new Blob(
    [JSON.stringify(fav, null, 2)],
    { type: "application/json" }
  );

  const a = document.createElement("a");

  a.href = URL.createObjectURL(blob);
  a.download = "Favourite-Ayahs.json";
  a.click();

}

// Import Favourite Ayahs
function importFavourites(file) {

  const reader = new FileReader();

  reader.onload = () => {

    try {

      localStorage.setItem(
        "favouriteAyahs",
        reader.result
      );

      alert("✅ Imported Successfully");

    } catch {

      alert("Invalid File");

    }

  };

  reader.readAsText(file);

}

// Export Button
const exportBtn = document.createElement("button");

exportBtn.className = "hero-btn";
exportBtn.innerHTML = "📤 Export";

exportBtn.onclick = exportFavourites;

surahTitle.insertAdjacentElement(
  "afterend",
  exportBtn
);

// Import Button
const importBtn = document.createElement("input");

importBtn.type = "file";
importBtn.accept = ".json";
importBtn.style.display = "none";

document.body.appendChild(importBtn);

const importOpen = document.createElement("button");

importOpen.className = "hero-btn";
importOpen.innerHTML = "📥 Import";

importOpen.onclick = () => importBtn.click();

exportBtn.insertAdjacentElement(
  "afterend",
  importOpen
);

importBtn.onchange = () => {

  if (importBtn.files.length) {

    importFavourites(importBtn.files[0]);

  }

};

// Last Surah Message
if (id === 114) {

  const box = document.createElement("div");

  box.className = "card";

  box.innerHTML = `
    <h2 style="text-align:center;color:green;">
      🎉 Congratulations
    </h2>

    <p style="text-align:center;">
      You completed all 114 Surahs.
      <br><br>
      May Allah accept your efforts.
      <br>
      Ameen 🤲
    </p>
  `;

  surahContent.appendChild(box);

}

// Scroll Top
window.scrollTo({
  top: 0,
  behavior: "smooth"
});

console.log("✅ surah.js Version 3 Complete");
