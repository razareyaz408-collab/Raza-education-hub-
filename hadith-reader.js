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
