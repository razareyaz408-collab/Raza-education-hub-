// ======================================
// RAZA EDUCATION HUB
// HADITH READER
// PART 3
// ======================================

// URL PARAM
const params = new URLSearchParams(location.search);
let id = Number(params.get("id")) || 1;

// DEMO HADITH DATA
const hadiths = [

{
id:1,
title:"Actions are by Intentions",
arabic:"إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ",
english:"Actions are judged by intentions.",
urdu:"اعمال کا دارومدار نیتوں پر ہے۔"
},

{
id:2,
title:"Speak Good",
arabic:"مَنْ كَانَ يُؤْمِنُ بِاللَّهِ",
english:"Speak good or remain silent.",
urdu:"اچھی بات کہو یا خاموش رہو۔"
},

{
id:3,
title:"Prayer",
arabic:"الصَّلَاةُ عِمَادُ الدِّينِ",
english:"Prayer is the pillar of Islam.",
urdu:"نماز دین کا ستون ہے۔"
},

{
id:4,
title:"Mercy",
arabic:"الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمٰنُ",
english:"Show mercy to others.",
urdu:"لوگوں پر رحم کرو۔"
},

{
id:5,
title:"Cleanliness",
arabic:"الطُّهُورُ شَطْرُ الإِيمَانِ",
english:"Cleanliness is half of faith.",
urdu:"صفائی نصف ایمان ہے۔"
}

];

// DOM
const title = document.getElementById("hadithTitle");
const arabic = document.getElementById("hadithArabic");
const english = document.getElementById("hadithEnglish");
const urdu = document.getElementById("hadithUrdu");

// LOAD HADITH
function loadHadith(){

const item = hadiths.find(h=>h.id===id);

if(!item){

title.innerHTML="Hadith Not Found";
return;

}

title.innerHTML="📖 "+item.title;
arabic.innerHTML=item.arabic;
english.innerHTML=item.english;
urdu.innerHTML=item.urdu;

document.title=item.title;

}

loadHadith();

console.log("✅ Hadith Reader Part 3 Loaded");

// ======================================
// PART 4
// PREVIOUS + NEXT + COPY + SHARE
// ======================================

// Previous Button
document.getElementById("prevBtn").onclick = () => {

  if (id > 1) {

    location.href = `hadith-reader.html?id=${id - 1}`;

  } else {

    alert("This is the first Hadith.");

  }

};

// Next Button
document.getElementById("nextBtn").onclick = () => {

  if (id < hadiths.length) {

    location.href = `hadith-reader.html?id=${id + 1}`;

  } else {

    alert("This is the last Hadith.");

  }

};

// Copy Hadith
document.getElementById("copyBtn").onclick = async () => {

  const text =
`${title.innerText}

${arabic.innerText}

${english.innerText}

${urdu.innerText}`;

  try {

    await navigator.clipboard.writeText(text);

    alert("✅ Hadith copied.");

  } catch {

    alert("❌ Copy failed.");

  }

};

// Share Hadith
document.getElementById("shareBtn").onclick = async () => {

  const text =
`${title.innerText}

${english.innerText}

${urdu.innerText}`;

  if (navigator.share) {

    try {

      await navigator.share({

        title: title.innerText,

        text: text

      });

    } catch {}

  } else {

    await navigator.clipboard.writeText(text);

    alert("📋 Hadith copied. Share manually.");

  }

};

console.log("✅ Hadith Reader Part 4 Loaded");

// ======================================
// PART 5
// BOOKMARK + FAVOURITE + FONT SIZE
// ======================================

// Bookmark
document.getElementById("bookmarkBtn").onclick = () => {

  let bookmarks =
    JSON.parse(localStorage.getItem("hadithBookmarks")) || [];

  if (!bookmarks.includes(id)) {

    bookmarks.push(id);

    localStorage.setItem(
      "hadithBookmarks",
      JSON.stringify(bookmarks)
    );

    alert("⭐ Hadith Bookmarked");

  } else {

    alert("Already Bookmarked");

  }

};

// Favourite
document.getElementById("favBtn").onclick = () => {

  let favourites =
    JSON.parse(localStorage.getItem("hadithFavourites")) || [];

  if (!favourites.includes(id)) {

    favourites.push(id);

    localStorage.setItem(
      "hadithFavourites",
      JSON.stringify(favourites)
    );

    alert("❤️ Added to Favourite");

  } else {

    favourites = favourites.filter(x => x != id);

    localStorage.setItem(
      "hadithFavourites",
      JSON.stringify(favourites)
    );

    alert("Removed from Favourite");

  }

};

// Font Size
let size =
Number(localStorage.getItem("hadithFont")) || 30;

function applyFont(){

  arabic.style.fontSize = size + "px";

}

applyFont();

document.getElementById("fontPlus").onclick = () => {

  size += 2;

  localStorage.setItem("hadithFont", size);

  applyFont();

};

document.getElementById("fontMinus").onclick = () => {

  if(size > 20){

    size -= 2;

    localStorage.setItem("hadithFont", size);

    applyFont();

  }

};

console.log("✅ Hadith Reader Part 5 Loaded");

// ======================================
// PART 6
// DARK MODE + READING HISTORY + PROGRESS
// ======================================

// Dark Mode
const darkBtn = document.createElement("button");

darkBtn.className = "hero-btn";
darkBtn.innerHTML =
localStorage.getItem("hadithTheme") === "dark"
? "☀️ Light"
: "🌙 Dark";

document.getElementById("favBtn")
.insertAdjacentElement("afterend", darkBtn);

if(localStorage.getItem("hadithTheme")==="dark"){
    document.body.classList.add("dark-mode");
}

darkBtn.onclick = ()=>{

    document.body.classList.toggle("dark-mode");

    const dark =
    document.body.classList.contains("dark-mode");

    localStorage.setItem(
        "hadithTheme",
        dark ? "dark" : "light"
    );

    darkBtn.innerHTML =
    dark ? "☀️ Light" : "🌙 Dark";

};

// Reading History
let history =
JSON.parse(localStorage.getItem("hadithHistory")) || [];

history.unshift({
    id:id,
    title:title.innerText,
    date:new Date().toLocaleString()
});

history = history.slice(0,20);

localStorage.setItem(
    "hadithHistory",
    JSON.stringify(history)
);

// Reading Progress
let progress =
Number(localStorage.getItem("hadithProgress")) || 0;

if(progress < hadiths.length){

    progress++;

    localStorage.setItem(
        "hadithProgress",
        progress
    );

}

// Last Read Hadith
localStorage.setItem(
    "lastHadith",
    id
);

console.log("✅ Hadith Reader Part 6 Loaded");

// ======================================
// PART 7
// STATS + FAVOURITE COUNT + COMPLETION
// ======================================

// Favourite Count
const favCount = JSON.parse(
localStorage.getItem("hadithFavourites")
) || [];

const statsCard = document.createElement("div");

statsCard.className = "card";
statsCard.style.marginTop = "25px";

statsCard.innerHTML = `
<h3>📊 Reading Statistics</h3>

<p>📖 Current Hadith: <b>${id}/${hadiths.length}</b></p>

<p>⭐ Favourite: <b>${favCount.length}</b></p>

<p>🔖 Bookmarks:
<b>${
(JSON.parse(localStorage.getItem("hadithBookmarks"))||[]).length
}</b></p>

<p>📚 History:
<b>${
(JSON.parse(localStorage.getItem("hadithHistory"))||[]).length
}</b></p>
`;

document.querySelector(".features")
.appendChild(statsCard);

// Daily Streak
let streak =
JSON.parse(localStorage.getItem("hadithStreak")) || {
days:0,
last:""
};

const today = new Date().toDateString();

if(streak.last !== today){

streak.days++;
streak.last = today;

localStorage.setItem(
"hadithStreak",
JSON.stringify(streak)
);

}

const streakCard = document.createElement("div");

streakCard.className="card";

streakCard.innerHTML=`
<h3>🔥 Daily Streak</h3>

<p>You have read Hadith for
<b>${streak.days}</b> day(s).</p>
`;

document.querySelector(".features")
.appendChild(streakCard);

// Completion Message
if(id===hadiths.length){

const complete=document.createElement("div");

complete.className="card";

complete.innerHTML=`
<h2 style="color:green;text-align:center;">
🎉 Congratulations!
</h2>

<p style="text-align:center;">
You have completed all available Hadith.
<br><br>
May Allah reward you.
<br>🤲 Ameen
</p>
`;

document.querySelector(".features")
.appendChild(complete);

}

console.log("✅ Hadith Reader Part 7 Loaded");

// ======================================
// PART 8
// SEARCH + PRINT + EXPORT + LAST READ
// ======================================

// Search in Current Hadith
const searchBox = document.createElement("input");

searchBox.type = "search";
searchBox.placeholder = "🔍 Search in Hadith...";
searchBox.className = "search-box";
searchBox.style.width = "100%";
searchBox.style.margin = "20px 0";
searchBox.style.padding = "12px";

document.querySelector(".features")
.prepend(searchBox);

searchBox.addEventListener("input", () => {

  const value = searchBox.value.toLowerCase();

  [arabic, english, urdu].forEach(el => {

    if (el.innerText.toLowerCase().includes(value)) {

      el.style.background = "#fff3a0";

    } else {

      el.style.background = "transparent";

    }

  });

});

// Print Button
const printBtn = document.createElement("button");

printBtn.className = "hero-btn";
printBtn.innerHTML = "🖨️ Print";

printBtn.onclick = () => window.print();

// Export Button
const exportBtn = document.createElement("button");

exportBtn.className = "hero-btn";
exportBtn.innerHTML = "📄 Export";

exportBtn.onclick = () => {

  const text = `${title.innerText}

${arabic.innerText}

${english.innerText}

${urdu.innerText}`;

  const blob = new Blob([text], {
    type: "text/plain"
  });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");

  a.href = url;
  a.download = `Hadith-${id}.txt`;

  a.click();

  URL.revokeObjectURL(url);

};

// Add Buttons
document.getElementById("nextBtn")
.insertAdjacentElement("afterend", printBtn);

printBtn.insertAdjacentElement(
"afterend",
exportBtn
);

// Save Last Read
localStorage.setItem("lastReadHadith", id);

console.log("✅ Hadith Reader Part 8 Loaded");
