// ======================================
// RAZA EDUCATION HUB
// HADITH SYSTEM
// PART 1
// ======================================

// HTML Elements
const hadithList = document.getElementById("hadithList");
const searchInput = document.getElementById("searchInput");

// Get Data from hadith-data.js
let allHadiths = hadiths;

// ======================================
// DISPLAY HADITH
// ======================================

function displayHadith(list){

    hadithList.innerHTML = "";

    if(list.length === 0){

        hadithList.innerHTML = `
        <div class="card">
            <h2>⚠️ No Hadith Found</h2>
            <p>Try another search.</p>
        </div>
        `;

        return;
    }

    list.forEach((item)=>{

        hadithList.innerHTML += `

        <div class="card">

            <h2>📖 Hadith ${item.id}</h2>

            <p style="
                font-size:28px;
                direction:rtl;
                text-align:right;
                line-height:2;
            ">
                ${item.arabic}
            </p>

            <p><b>English:</b><br>${item.english}</p>

            <p><b>Urdu:</b><br>${item.urdu}</p>

            <p>
                <b>Category:</b>
                ${item.category}
            </p>

            <button
                class="hero-btn"
                onclick="openHadith(${item.id})">
                📖 Read Full
            </button>

        </div>

        `;
    });

}

// ======================================
// PART 2
// SEARCH + OPEN + CATEGORY
// ======================================

// Open Hadith Reader
function openHadith(id){

    const hadith = allHadiths.find(h => h.id == id);

    localStorage.setItem(
        "selectedHadith",
        JSON.stringify(hadith)
    );

    location.href = "hadith-reader.html";
}


// Search Hadith
if(searchInput){

    searchInput.addEventListener("input",function(){

        const text = this.value.toLowerCase();

        const result = allHadiths.filter(h=>{

            return (
                h.title.toLowerCase().includes(text) ||
                h.english.toLowerCase().includes(text) ||
                h.urdu.toLowerCase().includes(text) ||
                h.category.toLowerCase().includes(text)
            );

        });

        displayHadith(result);

    });

}


// Category Filter
const categoryBtns =
document.querySelectorAll(".categoryBtn");

categoryBtns.forEach(btn=>{

    btn.addEventListener("click",()=>{

        const cat = btn.dataset.category;

        const result = allHadiths.filter(h=>h.category===cat);

        displayHadith(result);

    });

});

// ======================================
// PART 3 (FINAL)
// AUTO LOAD + SHOW ALL
// ======================================

// Show All Hadith
function showAllHadith() {
    displayHadith(allHadiths);
}

// Load Page
window.addEventListener("DOMContentLoaded", () => {

    if (!Array.isArray(allHadiths) || allHadiths.length === 0) {

        hadithList.innerHTML = `
        <div class="card">
            <h2>⚠️ No Hadith Available</h2>
            <p>Please check hadith-data.js</p>
        </div>
        `;

        return;
    }

    displayHadith(allHadiths);

});

// Console Message
console.log("✅ Raza Education Hub - Hadith System Loaded");
