const list = document.getElementById("surahList");

async function loadSurahs() {

    list.innerHTML = "<h3>Loading Surahs...</h3>";

    try {

        const response = await fetch("https://api.alquran.cloud/v1/surah");

        const data = await response.json();

        list.innerHTML = "";

        data.data.forEach((surah) => {

            list.innerHTML += `

            <div class="card">

                <h3>${surah.number}. ${surah.englishName}</h3>

                <h2>${surah.name}</h2>

                <p>${surah.englishNameTranslation}</p>

                <p>${surah.revelationType}</p>

                <p>${surah.numberOfAyahs} Ayahs</p>

                <a href="surah.html?id=${surah.number}" class="hero-btn">
                    Read Surah
                </a>

            </div>

            `;

        });

    }

    catch (error) {

        list.innerHTML = "<h3>Failed to load Surahs.</h3>";

        console.error(error);

    }

}

loadSurahs();

const searchBox = document.getElementById("searchSurah");

searchBox.addEventListener("keyup", () => {

  const value = searchBox.value.toLowerCase();

  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {

    if (card.innerText.toLowerCase().includes(value)) {

      card.style.display = "block";

    } else {

      card.style.display = "none";

    }

  });

});

// Dark Mode

const darkBtn = document.getElementById("darkModeBtn");

// Load saved mode
if (localStorage.getItem("darkMode") === "on") {
  document.body.classList.add("dark-mode");
  darkBtn.innerHTML = "☀️ Light Mode";
}

darkBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {

    localStorage.setItem("darkMode", "on");
    darkBtn.innerHTML = "☀️ Light Mode";

  } else {

    localStorage.setItem("darkMode", "off");
    darkBtn.innerHTML = "🌙 Dark Mode";

  }

});
