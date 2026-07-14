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
// RAZA EDUCATION HUB
// Quran Reader Version 2.0
// ======================================

// URL PARAMS
const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id")) || 1;

// USER SETTINGS
const language =
localStorage.getItem("translation") || "en.asad";

const theme =
localStorage.getItem("theme") || "light";

const fontSize =
Number(localStorage.getItem("fontSize")) || 32;

// SAVE LAST READING
localStorage.setItem("lastSurah", id);

// DOM
const surahTitle = document.getElementById("surahTitle");
const surahContent = document.getElementById("surahContent");
const audioPlayer = document.getElementById("audioPlayer");
const languageSelect = document.getElementById("languageSelect");

const bookmarkBtn =
document.getElementById("bookmarkBtn");

const completeBtn =
document.getElementById("completeBtn");

const prevBtn =
document.getElementById("prevSurah");

const nextBtn =
document.getElementById("nextSurah");

// AUDIO
const ayahAudio = new Audio();

// CACHE
let arabicData = null;
let translationData = null;
let audioData = null;

// PAGE TITLE
document.title = `Surah ${id} | Raza Education Hub`;

// ======================================
// APPLY USER SETTINGS
// ======================================

if (theme === "dark") {
  document.body.classList.add("dark-mode");
}

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

// ======================================
// LOAD SURAH
// ======================================

async function loadSurah() {

  try {

    surahContent.innerHTML = `
      <div class="card">
        <h2 style="text-align:center;">
          ⏳ Loading Surah...
        </h2>
      </div>
    `;

    const response = await fetch(

      `https://api.alquran.cloud/v1/surah/${id}/editions/quran-uthmani,${language},ar.alafasy`

    );

    if (!response.ok) {

      throw new Error("Failed to load.");

    }

    const result = await response.json();

    arabicData = result.data[0];
    translationData = result.data[1];
    audioData = result.data[2];

    surahTitle.innerHTML =
      `${arabicData.englishName} (${arabicData.name})`;

    audioPlayer.src =
      `https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${id}.mp3`;

    audioPlayer.load();

    createReadingTools();

    renderAyahs();

  } catch (err) {

    console.error(err);

    surahContent.innerHTML = `

      <div class="card">

        <h2 style="color:red;text-align:center;">
          ❌ Failed to Load Surah
        </h2>

      </div>

    `;

  }

}

// ======================================
// RENDER AYAHS
// ======================================

function renderAyahs() {

  let html = "";

  arabicData.ayahs.forEach((ayah, index) => {

    html += `

      <div class="card">

        <h2
          class="ayahArabic"
          style="
            direction:rtl;
            text-align:right;
            line-height:2;
            font-size:${fontSize}px;
          ">

          ${ayah.text}

        </h2>

        <hr style="margin:15px 0;">

        <p style="font-size:17px;line-height:1.8;">

          ${translationData.ayahs[index].text}

        </p>

        <p style="margin-top:12px;font-weight:bold;">

          Ayah ${ayah.numberInSurah}

        </p>

        <div
          style="
            display:flex;
            gap:10px;
            flex-wrap:wrap;
            margin-top:15px;
          ">

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

  document.querySelectorAll(".playAyah").forEach((btn) => {

    btn.addEventListener("click", () => {

      ayahAudio.pause();

      ayahAudio.src = btn.dataset.audio;

      ayahAudio.play().catch(() => {

        alert("❌ Audio unavailable.");

      });

    });

  });

  document.querySelectorAll(".copyAyah").forEach((btn) => {

    btn.addEventListener("click", async () => {

      try {

        await navigator.clipboard.writeText(btn.dataset.text);

        alert("📋 Ayah copied successfully.");

      } catch {

        alert("❌ Copy failed.");

      }

    });

  });

  document.querySelectorAll(".shareAyah").forEach((btn) => {

    btn.addEventListener("click", async () => {

      if (navigator.share) {

        try {

          await navigator.share({

            title: "Holy Quran",

            text: btn.dataset.text

          });

        } catch {}

      } else {

        try {

          await navigator.clipboard.writeText(btn.dataset.text);

          alert("📋 Ayah copied. Share manually.");

        } catch {

          alert("❌ Share unavailable.");

        }

      }

    });

  });

}

// ======================================
// READING TOOLS
// ======================================

function createReadingTools() {

  // Progress Bar
  const progressBar = document.createElement("progress");

  progressBar.max = 114;
  progressBar.value = id;

  progressBar.style.width = "100%";
  progressBar.style.height = "12px";
  progressBar.style.margin = "20px 0";

  surahTitle.insertAdjacentElement(
    "afterend",
    progressBar
  );

  // Reading Info
  const info = document.createElement("p");

  info.style.textAlign = "center";
  info.style.margin = "15px 0";

  info.innerHTML =
    `📖 Surah ${id} of 114`;

  progressBar.insertAdjacentElement(
    "afterend",
    info
  );

  // Font Controls
  const controls =
    document.createElement("div");

  controls.style.display = "flex";
  controls.style.justifyContent = "center";
  controls.style.gap = "10px";
  controls.style.margin = "20px 0";

  const minus =
    document.createElement("button");

  minus.className = "hero-btn";
  minus.textContent = "A-";

  const plus =
    document.createElement("button");

  plus.className = "hero-btn";
  plus.textContent = "A+";

  controls.append(minus, plus);

  info.insertAdjacentElement(
    "afterend",
    controls
  );

  minus.onclick = () => {

    changeFontSize(-2);

  };

  plus.onclick = () => {

    changeFontSize(2);

  };

}

// ======================================
// FONT SIZE
// ======================================

function changeFontSize(change) {

  let size =
    Number(localStorage.getItem("fontSize")) || 32;

  size += change;

  if (size < 20) size = 20;
  if (size > 60) size = 60;

  localStorage.setItem("fontSize", size);

  document
    .querySelectorAll(".ayahArabic")
    .forEach((ayah) => {

      ayah.style.fontSize = size + "px";

    });

}

// ======================================
// DARK MODE
// ======================================

const darkBtn =
document.createElement("button");

darkBtn.className = "hero-btn";
darkBtn.style.margin = "15px";

darkBtn.innerHTML =
document.body.classList.contains("dark-mode")
? "☀️ Light Mode"
: "🌙 Dark Mode";

surahTitle.insertAdjacentElement(
  "afterend",
  darkBtn
);

darkBtn.onclick = () => {

  document.body.classList.toggle("dark-mode");

  const dark =
  document.body.classList.contains("dark-mode");

  localStorage.setItem(
    "theme",
    dark ? "dark" : "light"
  );

  darkBtn.innerHTML =
  dark
  ? "☀️ Light Mode"
  : "🌙 Dark Mode";

  // ======================================
// BOOKMARK + PROGRESS + NAVIGATION
// ======================================

// Bookmark

bookmarkBtn?.addEventListener("click", () => {

  let bookmarks =
    JSON.parse(localStorage.getItem("bookmarks")) || [];

  if (!bookmarks.includes(id)) {

    bookmarks.push(id);

    localStorage.setItem(
      "bookmarks",
      JSON.stringify(bookmarks)
    );

    alert("⭐ Surah bookmarked successfully.");

  } else {

    alert("✅ Already bookmarked.");

  }

});

// Firebase Progress

completeBtn?.addEventListener("click", () => {

  onAuthStateChanged(auth, async (user) => {

    if (!user) {

      alert("Please login first.");
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

      alert("✅ Progress updated successfully.");

    } catch (err) {

      console.error(err);

      alert("❌ Progress update failed.");

    }

  });

});

// Previous

prevBtn?.addEventListener("click", () => {

  if (id > 1) {

    location.href =
      `surah.html?id=${id - 1}`;

  }

});

// Next

nextBtn?.addEventListener("click", () => {

  if (id < 114) {

    location.href =
      `surah.html?id=${id + 1}`;

  }

});

// Auto Next after Full Audio

audioPlayer.onended = () => {

  if (id < 114) {

    location.href =
      `surah.html?id=${id + 1}`;

  }

};

};

// ======================================
// FINAL INITIALIZATION
// ======================================

// Reading History

let history =
JSON.parse(localStorage.getItem("readingHistory")) || [];

history.unshift({

  surah: id,

  name: arabicData?.englishName || "",

  date: new Date().toLocaleString()

});

// Keep only last 20

history = history.slice(0, 20);

localStorage.setItem(
  "readingHistory",
  JSON.stringify(history)
);

// Last Visit

localStorage.setItem(
  "lastVisit",
  new Date().toLocaleString()
);

// Keyboard Shortcuts

document.addEventListener("keydown", (e) => {

  if (e.key === "ArrowRight" && id < 114) {

    location.href =
      `surah.html?id=${id + 1}`;

  }

  if (e.key === "ArrowLeft" && id > 1) {

    location.href =
      `surah.html?id=${id - 1}`;

  }

});

// Scroll Top

window.addEventListener("load", () => {

  window.scrollTo({

    top: 0,

    behavior: "smooth"

  });

});

// Final Surah Message

if (id === 114) {

  const card =
    document.createElement("div");

  card.className = "card";

  card.innerHTML = `

    <h2 style="text-align:center;color:green;">

      🎉 Congratulations!

    </h2>

    <p style="text-align:center;">

      You have completed reading the Holy Quran.

      <br><br>

      May Allah accept your efforts.

      <br>

      Ameen 🤲

    </p>

  `;

  surahContent.appendChild(card);

}

// Start App

loadSurah();

console.log("✅ surah.js v2 Loaded Successfully"); 
