// ======================================
// RAZA EDUCATION HUB
// HADITH READER
// VERSION 2.0
// ======================================

// URL PARAM
const params = new URLSearchParams(location.search);
let id = Number(params.get("id")) || 1;


// DOM
const title = document.getElementById("hadithTitle");
const arabic = document.getElementById("hadithArabic");
const english = document.getElementById("hadithEnglish");
const urdu = document.getElementById("hadithUrdu");


// LOAD HADITH
function loadHadith(){

const item = hadiths.find(h => h.id === id);

if(!item){

title.innerHTML = "📖 Hadith Not Found";
return;

}

title.innerHTML = "📖 " + item.title;

arabic.innerHTML = item.arabic;

english.innerHTML = item.english;

urdu.innerHTML = item.urdu;

document.title = item.title;

}

loadHadith();


console.log("✅ Hadith Data Loaded");



// ======================================
// PREVIOUS + NEXT
// ======================================

document.getElementById("prevBtn").onclick = ()=>{

if(id > 1){

location.href=`hadith-reader.html?id=${id-1}`;

}
else{

alert("First Hadith");

}

};


document.getElementById("nextBtn").onclick = ()=>{

if(id < hadiths.length){

location.href=`hadith-reader.html?id=${id+1}`;

}
else{

alert("Last Hadith");

}

};



// ======================================
// COPY + SHARE
// ======================================

document.getElementById("copyBtn").onclick = async()=>{


let text = 
`${title.innerText}

${arabic.innerText}

${english.innerText}

${urdu.innerText}`;


await navigator.clipboard.writeText(text);

alert("✅ Hadith Copied");

};



document.getElementById("shareBtn").onclick = async()=>{


let text =
`${title.innerText}

${english.innerText}

${urdu.innerText}`;


if(navigator.share){

await navigator.share({

title:title.innerText,

text:text

});

}
else{

await navigator.clipboard.writeText(text);

alert("Copied");

}

};



// ======================================
// BOOKMARK + FAVOURITE
// ======================================


document.getElementById("bookmarkBtn").onclick=()=>{


let data =
JSON.parse(localStorage.getItem("hadithBookmarks"))||[];


if(!data.includes(id)){

data.push(id);

localStorage.setItem(
"hadithBookmarks",
JSON.stringify(data)
);


alert("⭐ Bookmarked");

}

};



document.getElementById("favBtn").onclick=()=>{


let fav =
JSON.parse(localStorage.getItem("hadithFavourites"))||[];


if(!fav.includes(id)){

fav.push(id);

alert("❤️ Added");

}

else{

fav=fav.filter(x=>x!==id);

alert("Removed");

}


localStorage.setItem(
"hadithFavourites",
JSON.stringify(fav)
);


};



// ======================================
// FONT SIZE
// ======================================


let size =
Number(localStorage.getItem("hadithFont"))||30;


function applyFont(){

arabic.style.fontSize=size+"px";

}


applyFont();


document.getElementById("fontPlus").onclick=()=>{

size+=2;

localStorage.setItem("hadithFont",size);

applyFont();

};


document.getElementById("fontMinus").onclick=()=>{

if(size>20){

size-=2;

localStorage.setItem("hadithFont",size);

applyFont();

}

};



// ======================================
// DARK MODE FIX
// ======================================


const darkBtn =
document.getElementById("themeBtn");


if(localStorage.getItem("hadithTheme")=="dark"){

document.body.classList.add("dark-mode");

}


darkBtn.onclick=()=>{


document.body.classList.toggle("dark-mode");


let dark =
document.body.classList.contains("dark-mode");


localStorage.setItem(
"hadithTheme",
dark?"dark":"light"
);


darkBtn.innerHTML =
dark?"☀️ Light":"🌙 Dark";


};



// ======================================
// READING HISTORY
// ======================================


let history =
JSON.parse(localStorage.getItem("hadithHistory"))||[];


if(!history.some(h=>h.id===id)){


history.unshift({

id:id,

title:title.innerText,

date:new Date().toLocaleString()

});


history=history.slice(0,20);


localStorage.setItem(
"hadithHistory",
JSON.stringify(history)
);


}




// ======================================
// PROGRESS FIX
// ======================================


let read =
JSON.parse(localStorage.getItem("readHadiths"))||[];


if(!read.includes(id)){


read.push(id);


localStorage.setItem(
"readHadiths",
JSON.stringify(read)
);


}



let progress =
Math.round(
(read.length / hadiths.length)*100
);


localStorage.setItem(
"hadithProgress",
progress
);



localStorage.setItem(
"lastHadith",
id
);



console.log("✅ Hadith Reader Ready");
