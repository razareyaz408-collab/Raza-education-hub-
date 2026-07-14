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

const language =
localStorage.getItem("translation") || "en.asad";

// Save last reading
localStorage.setItem("lastSurah", id);

// DOM

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

async function loadSurah() {

  try {

    surahContent.innerHTML =
      "<h3 style='text-align:center'>Loading Surah...</h3>";

    const response = await fetch(
      `https://api.alquran.cloud/v1/surah/${id}/editions/quran-uthmani,${language},ar.alafasy`
    );

    const result = await response.json();

    const arabic = result.data[0];
    const translation = result.data[1];
    const audio = result.data[2];

    surahTitle.innerHTML =
      `${arabic.englishName} (${arabic.name})`;

    // Full Surah Audio

    audioPlayer.src =
      `https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${id}.mp3`;

    audioPlayer.load();

    audioPlayer.onended = () => {

      if (id < 114) {

        location.href = `surah.html?id=${id + 1}`;

      }

    };

    let html = "";

    arabic.ayahs.forEach((ayah, index) => {

      html += `

      <div class="card">

        <h2 style="text-align:right

        async function loadSurah() {

  try {

    surahContent.innerHTML =
      "<h3 style='text-align:center'>Loading Surah...</h3>";

    const response = await fetch(
      `https://api.alquran.cloud/v1/surah/${id}/editions/quran-uthmani,${language},ar.alafasy`
    );

    const result = await response.json();

    const arabic = result.data[0];
    const translation = result.data[1];
    const audio = result.data[2];

    surahTitle.innerHTML =
      `${arabic.englishName} (${arabic.name})`;

    // Full Surah Audio

    audioPlayer.src =
      `https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${id}.mp3`;

    audioPlayer.load();

    audioPlayer.onended = () => {

      if (id < 114) {

        location.href = `surah.html?id=${id + 1}`;

      }

    };

    let html = "";

    arabic.ayahs.forEach((ayah, index) => {

      html += `

      <div class="card">

        <h2 style="text-align:right;font-size:32px;line-height:2;">
          ${ayah.text}
        </h2>

        <p style="margin:15px 0;">
          ${translation.ayahs[index].text}
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

    surahContent.innerHTML = html;

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

    surahContent.innerHTML =
      "<h3>❌ Failed to load Surah.</h3>";

  }

}

loadSurah();

async function loadSurah() {

  try {

    surahContent.innerHTML =
      "<h3 style='text-align:center'>Loading Surah...</h3>";

    const response = await fetch(
      `https://api.alquran.cloud/v1/surah/${id}/editions/quran-uthmani,${language},ar.alafasy`
    );

    const result = await response.json();

    const arabic = result.data[0];
    const translation = result.data[1];
    const audio = result.data[2];

    surahTitle.innerHTML =
      `${arabic.englishName} (${arabic.name})`;

    // Full Surah Audio

    audioPlayer.src =
      `https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${id}.mp3`;

    audioPlayer.load();

    audioPlayer.onended = () => {

      if (id < 114) {

        location.href = `surah.html?id=${id + 1}`;

      }

    };

    let html = "";

    arabic.ayahs.forEach((ayah, index) => {

      html += `

      <div class="card">

        <h2 style="text-align:right;font-size:32px;line-height:2;">
          ${ayah.text}
        </h2>

        <p style="margin:15px 0;">
          ${translation.ayahs[index].text}
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

    surahContent.innerHTML = html;

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

    surahContent.innerHTML =
      "<h3>❌ Failed to load Surah.</h3>";

  }

}

loadSurah();
