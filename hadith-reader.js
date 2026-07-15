// ======================================
// RAZA EDUCATION HUB
// HADITH READER
// ======================================

const readerCard = document.getElementById("readerCard");

// Get Selected Hadith
const hadith = JSON.parse(localStorage.getItem("selectedHadith"));

// If no Hadith selected
if (!hadith) {

    readerCard.innerHTML = `
        <h2>⚠️ No Hadith Found</h2>
        <p>Please go back and select a Hadith.</p>

        <br>

        <a href="hadith.html" class="hero-btn">
            ← Back to Hadith
        </a>
    `;

} else {

    readerCard.innerHTML = `

        <h2>📖 Hadith ${hadith.id}</h2>

        <p style="
            font-size:32px;
            direction:rtl;
            text-align:right;
            line-height:2;
            margin:20px 0;
        ">
            ${hadith.arabic}
        </p>

        <hr>

        <h3>🇬🇧 English</h3>
        <p>${hadith.english}</p>

        <hr>

        <h3>🇵🇰 Urdu</h3>
        <p style="direction:rtl;text-align:right;">
            ${hadith.urdu}
        </p>

        <hr>

        <p>
            <strong>Category:</strong> ${hadith.category}
        </p>

        <br>

        <a href="hadith.html" class="hero-btn">
            ← Back to Hadith
        </a>

    `;

}

console.log("✅ Hadith Reader Loaded");
