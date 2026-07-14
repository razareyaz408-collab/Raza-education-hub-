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
