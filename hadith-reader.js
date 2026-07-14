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

// ======================================
// RAZA EDUCATION HUB
// HADITH READER SYSTEM
// PART 4
// ======================================


// ALL HADITH LIST

let hadithArray =
JSON.parse(
localStorage.getItem("hadithList")
) || [];

let currentIndex = 0;


// CURRENT HADITH FIND

if(hadith && hadithArray.length){

currentIndex =
hadithArray.findIndex(
(item)=>
JSON.stringify(item)
===
JSON.stringify(hadith)
);

}


// NEXT BUTTON

document
.getElementById("nextBtn")
?.addEventListener(
"click",
()=>{


if(currentIndex < hadithArray.length-1){

currentIndex++;

openNextHadith();

}

else{

alert("Last Hadith");

}


});




// PREVIOUS BUTTON

document
.getElementById("prevBtn")
?.addEventListener(
"click",
()=>{


if(currentIndex > 0){

currentIndex--;

openNextHadith();

}

else{

alert("First Hadith");

}


});




// OPEN HADITH

function openNextHadith(){


let newHadith =
hadithArray[currentIndex];


localStorage.setItem(
"selectedHadith",
JSON.stringify(newHadith)
);


location.reload();


}




// READING COUNT

let readCount =
Number(
localStorage.getItem("readCount")
)||0;


if(hadith){

readCount++;


localStorage.setItem(
"readCount",
readCount
);

}



// SHOW STATS

let totalRead =
document.getElementById("totalRead");


if(totalRead){

totalRead.innerHTML =
"Total Read : "
+
readCount;

}



// BOOKMARK COUNT

let bookmarks =
JSON.parse(
localStorage.getItem("bookmarks")
)||[];


let bookmarkCount =
document.getElementById("bookmarkCount");


if(bookmarkCount){

bookmarkCount.innerHTML =
"Bookmarks : "
+
bookmarks.length;

}




// FAV COUNT

let favourites =
JSON.parse(
localStorage.getItem("favourites")
)
||[];


let favCount =
document.getElementById("favCount");


if(favCount){

favCount.innerHTML =
"Favourites : "
+
favourites.length;

}



// PROGRESS BAR

let progress =
document.getElementById("progressBar");


let info =
document.getElementById("readingInfo");



if(progress && hadithArray.length){


progress.max =
hadithArray.length;


progress.value =
currentIndex+1;


info.innerHTML =
`
Hadith 
${currentIndex+1}
of
${hadithArray.length}
`;

}


console.log(
"✅ Hadith Reader Part 4 Loaded"
);
