const list = document.getElementById("surahList");

// ==========================
// Load All Surahs
// ==========================
async function loadSurahs() {

    if (!list) return;

    list.innerHTML = "<h2>📖 Loading Surahs...</h2>";

    try {

        const response = await fetch("https://api.alquran.cloud/v1/surah");
        const result = await response.json();

        list.innerHTML = "";

        result.data.forEach((surah) => {

            list.innerHTML += `
            <div class="card">

                <h3>${surah.number}. ${surah.englishName}</h3>

                <h2>${surah.name}</h2>

                <p>${surah.englishNameTranslation}</p>

                <p>${surah.revelationType}</p>

                <p>${surah.numberOfAyahs} Ayahs</p>

                <br>

                <a class="hero-btn" href="surah.html?id=${surah.number}">
                    📖 Read Surah
                </a>

            </div>
            `;

        });

    } catch (err) {

        console.error(err);

        list.innerHTML =
        "<h2>❌ Failed to load Surahs.</h2>";

    }

}

loadSurahs();


// ==========================
// Search Surah
// ==========================

const searchBox = document.getElementById("searchSurah");

if (searchBox) {

    searchBox.addEventListener("input", () => {

        const value = searchBox.value.toLowerCase();

        document.querySelectorAll(".card").forEach((card) => {

            card.style.display =
                card.innerText.toLowerCase().includes(value)
                ? "block"
                : "none";

        });

    });

}


// ==========================
// Continue Reading
// ==========================

const continueBtn =
document.getElementById("continueReading");

if (continueBtn) {

    const lastSurah =
    localStorage.getItem("lastSurah") || "1";

    continueBtn.href =
    `surah.html?id=${lastSurah}`;

}


// ==========================
// Dark Mode
// ==========================

const darkBtn =
document.getElementById("darkModeBtn");

function enableDarkMode() {

    document.body.classList.add("dark-mode");

    if (darkBtn)
        darkBtn.innerHTML = "☀️ Light Mode";

    localStorage.setItem("darkMode", "on");

}

function disableDarkMode() {

    document.body.classList.remove("dark-mode");

    if (darkBtn)
        darkBtn.innerHTML = "🌙 Dark Mode";

    localStorage.setItem("darkMode", "off");

}

// Load Saved Theme

if (localStorage.getItem("darkMode") === "on") {

    enableDarkMode();

}

if (darkBtn) {

    darkBtn.addEventListener("click", () => {

        if (document.body.classList.contains("dark-mode")) {

            disableDarkMode();

        } else {

            enableDarkMode();

        }

    });

}
