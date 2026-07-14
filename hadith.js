// ======================================
// RAZA EDUCATION HUB
// HADITH COURSE VERSION 2
// PART 1
// ======================================

// DOM
const hadithList = document.getElementById("hadithList");
const searchInput = document.getElementById("searchInput");

// Local Storage
const bookmarkKey = "hadithBookmarks";
const favouriteKey = "hadithFavourites";

// Demo Hadith Data
const hadiths = [

{
id:1,
title:"Actions are by Intentions",
arabic:"إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ",
english:"Actions are judged by intentions.",
urdu:"اعمال کا دارومدار نیتوں پر ہے۔",
category:"Iman"
},

{
id:2,
title:"Speak Good",
arabic:"مَنْ كَانَ يُؤْمِنُ بِاللَّهِ",
english:"Speak good or remain silent.",
urdu:"اچھی بات کہو یا خاموش رہو۔",
category:"Character"
},

{
id:3,
title:"Prayer",
arabic:"الصَّلَاةُ عِمَادُ الدِّينِ",
english:"Prayer is the pillar of Islam.",
urdu:"نماز دین کا ستون ہے۔",
category:"Salah"
},

{
id:4,
title:"Mercy",
arabic:"الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمٰنُ",
english:"Show mercy to others.",
urdu:"لوگوں پر رحم کرو۔",
category:"Character"
},

{
id:5,
title:"Cleanliness",
arabic:"الطُّهُورُ شَطْرُ الإِيمَانِ",
english:"Cleanliness is half of faith.",
urdu:"صفائی نصف ایمان ہے۔",
category:"Iman"
}

];

// Render Hadith Cards

function renderHadith(list){

if(!hadithList) return;

hadithList.innerHTML="";

list.forEach(item=>{

hadithList.innerHTML += `

<div class="card">

<h2>📖 ${item.title}</h2>

<p style="font-size:30px;text-align:right;">
${item.arabic}
</p>

<p>${item.english}</p>

<p>${item.urdu}</p>

<button
class="hero-btn openHadith"
data-id="${item.id}">
Read
</button>

</div>

`;

});

}

renderHadith(hadiths);

document.addEventListener("click",(e)=>{

if(e.target.classList.contains("openHadith")){

const id=e.target.dataset.id;

location.href=`hadith-reader.html?id=${id}`;

}

});

console.log("✅ Hadith Part 1 Loaded");
