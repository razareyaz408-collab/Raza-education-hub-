// ======================================
// RAZA EDUCATION HUB
// HADITH READER SYSTEM
// PART 3
// ======================================


const title =
document.getElementById("hadithTitle");

const arabic =
document.getElementById("hadithArabic");

const english =
document.getElementById("hadithEnglish");

const urdu =
document.getElementById("hadithUrdu");


// LOAD SELECTED HADITH

let hadith =
JSON.parse(
localStorage.getItem("selectedHadith")
);


if(hadith){


title.innerHTML =
"📖 Hadith";


arabic.innerHTML =
hadith.arabic || "Arabic not available";


english.innerHTML =
hadith.text || hadith.english || "";


urdu.innerHTML =
hadith.urdu || "Urdu translation not available";


}


// COPY

document
.getElementById("copyBtn")
?.addEventListener(
"click",
()=>{


let text =
`${arabic.innerText}

${english.innerText}

${urdu.innerText}`;


navigator.clipboard.writeText(text);


alert("✅ Hadith Copied");


});




// SHARE

document
.getElementById("shareBtn")
?.addEventListener(
"click",
()=>{


let text =
english.innerText;


if(navigator.share){

navigator.share({

title:"Hadith",
text:text

});

}

});




// BOOKMARK

document
.getElementById("bookmarkBtn")
?.addEventListener(
"click",
()=>{


let save =
JSON.parse(
localStorage.getItem("bookmarks")
)||[];


save.push(hadith);


localStorage.setItem(
"bookmarks",
JSON.stringify(save)
);


alert("🔖 Bookmark Saved");


});




// FAVOURITE

document
.getElementById("favBtn")
?.addEventListener(
"click",
()=>{


let fav =
JSON.parse(
localStorage.getItem("favourites")
)||[];


fav.push(hadith);


localStorage.setItem(
"favourites",
JSON.stringify(fav)
);


alert("⭐ Added Favourite");


});




// FONT SIZE

let size = 18;


document
.getElementById("fontPlus")
?.addEventListener(
"click",
()=>{

size +=2;

english.style.fontSize =
size+"px";

urdu.style.fontSize =
size+"px";

});



document
.getElementById("fontMinus")
?.addEventListener(
"click",
()=>{

size -=2;

english.style.fontSize =
size+"px";

urdu.style.fontSize =
size+"px";

});




// DARK MODE

document
.getElementById("themeBtn")
?.addEventListener(
"click",
()=>{


document.body.classList.toggle(
"dark"
);


});



console.log(
"✅ Hadith Reader Part 3 Loaded"
);
