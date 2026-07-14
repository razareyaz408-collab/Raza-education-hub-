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

          <button
class="hero-btn favAyah"
data-number="${ayah.numberInSurah}"
data-text="${ayah.text}">
⭐ Favourite
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

// ======================================
// PART 54 (1/8)
// FAVOURITE AYAH SYSTEM
// ======================================

function toggleFavouriteAyah(ayahNumber, ayahText) {

  let favourites =
    JSON.parse(localStorage.getItem("favouriteAyahs")) || [];

  const index = favourites.findIndex(

    item => item.number === ayahNumber

  );

  if (index === -1) {

    favourites.push({

      surah: id,

      number: ayahNumber,

      text: ayahText,

      savedAt: new Date().toLocaleString()

    });

    alert("⭐ Ayah added to favourites.");

  } else {

    favourites.splice(index, 1);

    alert("🗑️ Ayah removed from favourites.");

  }

  localStorage.setItem(

    "favouriteAyahs",

    JSON.stringify(favourites)

  );

}

// ======================================
// PART 54 (2/8)
// ACTIVATE FAVOURITE BUTTONS
// ======================================

document.addEventListener("click", (e) => {

  if (!e.target.classList.contains("favAyah")) return;

  const ayahNumber =
    Number(e.target.dataset.number);

  const ayahText =
    e.target.dataset.text;

  toggleFavouriteAyah(
    ayahNumber,
    ayahText
  );

});

// ======================================
// PART 54 (4/8)
// SHOW FAVOURITE COUNT
// ======================================

function updateFavouriteCount() {

  const favourites =
    JSON.parse(localStorage.getItem("favouriteAyahs")) || [];

  let badge =
    document.getElementById("favCount");

  if (!badge) {

    badge = document.createElement("div");

    badge.id = "favCount";

    badge.className = "card";

    badge.style.textAlign = "center";
    badge.style.margin = "15px 0";

    surahTitle.insertAdjacentElement(
      "afterend",
      badge
    );

  }

  badge.innerHTML =
    `⭐ Favourite Ayahs: <b>${favourites.length}</b>`;

}

updateFavouriteCount();

document.addEventListener("click", (e) => {

  if (e.target.classList.contains("favAyah")) {

    setTimeout(updateFavouriteCount, 200);

  }

});

// ======================================
// PART 54 (5/8)
// FAVOURITE PAGE SHORTCUT
// ======================================

const favButton = document.createElement("button");

favButton.className = "hero-btn";
favButton.style.margin = "10px";
favButton.innerHTML = "⭐ View Favourite Ayahs";

favButton.addEventListener("click", () => {

  location.href = "favourites.html";

});

const favCount = document.getElementById("favCount");

if (favCount) {

  favCount.insertAdjacentElement(
    "afterend",
    favButton
  );

}

// ======================================
// PART 54 (6/8)
// EXPORT FAVOURITES
// ======================================

const exportBtn = document.createElement("button");

exportBtn.className = "hero-btn";
exportBtn.style.margin = "10px";
exportBtn.innerHTML = "📤 Export Favourites";

exportBtn.addEventListener("click", () => {

  const favourites =
    JSON.parse(localStorage.getItem("favouriteAyahs")) || [];

  if (favourites.length === 0) {

    alert("No favourite Ayahs found.");
    return;

  }

  const data = JSON.stringify(favourites, null, 2);

  const blob = new Blob([data], {
    type: "application/json"
  });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");

  a.href = url;
  a.download = "Favourite-Ayahs.json";
  a.click();

  URL.revokeObjectURL(url);

});

favButton.insertAdjacentElement(
  "afterend",
  exportBtn
);

// ======================================
// PART 54 (7/8)
// IMPORT FAVOURITES
// ======================================

const importBtn = document.createElement("button");

importBtn.className = "hero-btn";
importBtn.style.margin = "10px";
importBtn.innerHTML = "📥 Import Favourites";

const importInput = document.createElement("input");
importInput.type = "file";
importInput.accept = ".json";
importInput.style.display = "none";

importBtn.addEventListener("click", () => {

  importInput.click();

});

importInput.addEventListener("change", (e) => {

  const file = e.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = () => {

    try {

      const favourites = JSON.parse(reader.result);

      localStorage.setItem(
        "favouriteAyahs",
        JSON.stringify(favourites)
      );

      alert("✅ Favourites Imported Successfully!");

    } catch {

      alert("❌ Invalid JSON File");

    }

  };

  reader.readAsText(file);

});

exportBtn.insertAdjacentElement(
  "afterend",
  importBtn
);

document.body.appendChild(importInput);

// ======================
// PART 54 (8/8)
// SMART READING STATS
// ======================

// Total Reading Counter
let totalRead = Number(localStorage.getItem("totalRead")) || 0;

if (!sessionStorage.getItem("surahVisited")) {

  totalRead++;

  localStorage.setItem("totalRead", totalRead);

  sessionStorage.setItem("surahVisited", "true");

}

const statsCard = document.createElement("div");

statsCard.className = "card";

statsCard.style.marginTop = "20px";

statsCard.innerHTML = `
<h3 style="text-align:center;">
📊 Reading Statistics
</h3>

<p><b>Current Surah:</b> ${id} / 114</p>

<p><b>Total Surahs Opened:</b> ${totalRead}</p>

<p><b>Translation:</b> ${language}</p>

<p><b>Last Visit:</b> ${
localStorage.getItem("lastVisit") || "First Time"
}</p>
`;

surahContent.appendChild(statsCard);

console.log("✅ Part 54 Completed Successfully");

// ========================================
// PART 55 (1/8)
// ADVANCED READING STATS
// ========================================

const readingStats = JSON.parse(
  localStorage.getItem("readingStats")
) || {
  totalRead: 0,
  completed: [],
  streak: 0,
  lastDate: ""
};

const today = new Date().toDateString();

if (readingStats.lastDate !== today) {

  readingStats.streak++;

  readingStats.lastDate = today;

}

if (!readingStats.completed.includes(id)) {

  readingStats.completed.push(id);

  readingStats.totalRead++;

}

localStorage.setItem(
  "readingStats",
  JSON.stringify(readingStats)
);

// Create Stats Card

const statsCard = document.createElement("div");

statsCard.className = "card";

statsCard.style.marginTop = "20px";

statsCard.innerHTML = `
<h3 style="text-align:center;">
📊 Reading Statistics
</h3>

<p>📖 Surahs Read: <b>${readingStats.totalRead}</b></p>

<p>🔥 Daily Streak:
<b>${readingStats.streak}</b> day(s)</p>

<p>✅ Completed:
<b>${readingStats.completed.length}/114</b></p>
`;

surahContent.appendChild(statsCard);

// ======================
// PART 55 (2/8)
// SEARCH AYAH
// ======================

const searchBox = document.createElement("input");

searchBox.type = "search";
searchBox.placeholder = "🔍 Search Translation...";
searchBox.className = "search-box";

searchBox.style.width = "100%";
searchBox.style.padding = "12px";
searchBox.style.margin = "20px 0";
searchBox.style.borderRadius = "10px";
searchBox.style.border = "1px solid #ccc";
searchBox.style.fontSize = "16px";

surahTitle.insertAdjacentElement("afterend", searchBox);

searchBox.addEventListener("input", () => {

  const keyword = searchBox.value.toLowerCase();

  document.querySelectorAll("#surahContent .card")
    .forEach(card => {

      const text = card.innerText.toLowerCase();

      card.style.display =
        text.includes(keyword)
          ? "block"
          : "none";

    });

});

// ======================
// PART 55 (3/8)
// AYAH BOOKMARK FEATURE
// ======================

document.querySelectorAll("#surahContent .card")
.forEach((card,index)=>{

  const btn = document.createElement("button");

  btn.innerHTML = "⭐ Save Ayah";
  btn.style.marginTop = "10px";
  btn.style.padding = "8px 12px";
  btn.style.border = "none";
  btn.style.borderRadius = "8px";
  btn.style.cursor = "pointer";

  card.appendChild(btn);


  btn.addEventListener("click",()=>{

    let saved = JSON.parse(
      localStorage.getItem("savedAyah") || "[]"
    );

    saved.push({
      ayah:index+1,
      text:card.innerText
    });

    localStorage.setItem(
      "savedAyah",
      JSON.stringify(saved)
    );

    btn.innerHTML="✅ Saved";

  });

});

// ======================
// PART 55 (4/8)
// LOAD SAVED AYAH
// ======================

function showSavedAyah(){

  const saved = JSON.parse(
    localStorage.getItem("savedAyah") || "[]"
  );

  if(saved.length === 0){
    alert("No saved Ayah found");
    return;
  }


  let box = document.createElement("div");

  box.className="saved-box";

  box.innerHTML = `
  <h3>⭐ Saved Ayah</h3>
  ${
    saved.map((item,index)=>`
      <div class="saved-card">
        <b>Ayah ${item.ayah}</b>
        <p>${item.text}</p>
      </div>
    `).join("")
  }
  `;


  document.body.appendChild(box);

}


// Create Saved Button

const savedBtn = document.createElement("button");

savedBtn.innerHTML="⭐ My Saved Ayah";

savedBtn.style.padding="12px";
savedBtn.style.margin="10px";
savedBtn.style.borderRadius="10px";
savedBtn.style.cursor="pointer";

surahTitle.insertAdjacentElement(
"afterend",
savedBtn
);


savedBtn.onclick = showSavedAyah;

// ======================
// PART 55 (5/8)
// SHARE AYAH FEATURE
// ======================

document.querySelectorAll("#surahContent .card")
.forEach((card)=>{

  const shareBtn = document.createElement("button");

  shareBtn.innerHTML = "📤 Share Ayah";

  shareBtn.style.marginLeft = "8px";
  shareBtn.style.padding = "8px 12px";
  shareBtn.style.border = "none";
  shareBtn.style.borderRadius = "8px";
  shareBtn.style.cursor = "pointer";


  card.appendChild(shareBtn);


  shareBtn.onclick = ()=>{

    const text = card.innerText;


    if(navigator.share){

      navigator.share({
        title:"Quran Ayah",
        text:text
      });

    }else{

      navigator.clipboard.writeText(text);

      alert("Ayah copied!");

    }

  };

});

// ======================
// PART 55 (6/8)
// AYAH FONT SIZE CONTROL
// ======================

const fontBox = document.createElement("div");

fontBox.innerHTML = `
<button id="increaseFont">A+</button>
<button id="decreaseFont">A-</button>
`;

fontBox.style.margin="15px 0";


surahTitle.insertAdjacentElement(
"afterend",
fontBox
);


let ayahSize = 18;


document.getElementById("increaseFont")
.onclick = ()=>{

  ayahSize += 2;

  document.querySelectorAll("#surahContent .card")
  .forEach(card=>{
    card.style.fontSize = ayahSize+"px";
  });

};



document.getElementById("decreaseFont")
.onclick = ()=>{

  if(ayahSize > 12){
    ayahSize -= 2;
  }

  document.querySelectorAll("#surahContent .card")
  .forEach(card=>{
    card.style.fontSize = ayahSize+"px";
  });

};

// ======================
// PART 55 (7/8)
// DARK MODE FEATURE
// ======================

const darkBtn = document.createElement("button");

darkBtn.innerHTML = "🌙 Dark Mode";

darkBtn.style.padding="12px";
darkBtn.style.margin="10px";
darkBtn.style.borderRadius="10px";
darkBtn.style.cursor="pointer";


surahTitle.insertAdjacentElement(
"afterend",
darkBtn
);


darkBtn.onclick = ()=>{

  document.body.classList.toggle("dark-mode");


  if(document.body.classList.contains("dark-mode")){

    darkBtn.innerHTML="☀️ Light Mode";

  }else{

    darkBtn.innerHTML="🌙 Dark Mode";

  }

}; 

/* ======================
PART 55 (8/8)
DARK MODE DESIGN
====================== */

.dark-mode{
    background:#121212;
    color:#ffffff;
}


.dark-mode #surahContent .card{

    background:#1e1e1e;
    color:#ffffff;
    border:1px solid #333;

}


.dark-mode input{

    background:#222;
    color:#fff;
    border-color:#555;

}


.dark-mode button{

    background:#0b6b43;
    color:white;

}
