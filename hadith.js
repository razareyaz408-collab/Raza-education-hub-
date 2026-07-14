// ======================================
// RAZA EDUCATION HUB
// HADITH SYSTEM
// PART 2
// ======================================

const hadithList = document.getElementById("hadithList");
const searchInput = document.getElementById("searchInput");

let allHadiths = [];


// LOAD HADITH DATA

async function loadHadith(){

try{

const response = await fetch(
"https://raw.githubusercontent.com/ahmedeltaher/hadith-json/master/hadith.json"
);


const data = await response.json();


allHadiths = data;


displayHadith(allHadiths);


console.log("✅ Hadith Loaded:",allHadiths.length);


}

catch(error){

console.log(
"Hadith Loading Error",
error
);


hadithList.innerHTML =
`
<div class="card">
<h3>⚠️ Hadith Load Failed</h3>
<p>Internet connection check karein.</p>
</div>
`;

}

}



// DISPLAY

function displayHadith(list){


if(!hadithList) return;


hadithList.innerHTML="";


list.slice(0,100).forEach((item,index)=>{


hadithList.innerHTML +=

`

<div class="card">


<h2>
📖 Hadith ${index+1}
</h2>


<p style="
font-size:28px;
text-align:right;
direction:rtl;
">
${item.arabic || ""}
</p>


<p>
${item.text || ""}
</p>


<button 
class="hero-btn"
onclick="openHadith(${index})">

Read

</button>


</div>

`;


});


}




// SEARCH

if(searchInput){


searchInput.addEventListener(
"input",
function(){


let text =
this.value.toLowerCase();


let result =
allHadiths.filter(h=>

JSON.stringify(h)
.toLowerCase()
.includes(text)

);


displayHadith(result);


});


}




// OPEN READER

function openHadith(id){

localStorage.setItem(
"selectedHadith",
JSON.stringify(allHadiths[id])
);


location.href =
"hadith-reader.html";


}



loadHadith();

// ======================================
// RAZA EDUCATION HUB
// HADITH SYSTEM
// PART 5
// ======================================


// SAVE ALL HADITH FOR READER

localStorage.setItem(
"hadithList",
JSON.stringify(allHadiths)
);



// CATEGORY FILTER

const categories =
document.querySelectorAll(".categoryBtn");


categories.forEach(btn=>{


btn.addEventListener(
"click",
()=>{


let cat =
btn.dataset.category;



let result =
allHadiths.filter(
(h)=>h.category===cat
);



displayHadith(result);



});


});




// SHOW ALL BUTTON

function showAllHadith(){


displayHadith(
allHadiths
);


}



// SMART SEARCH

if(searchInput){


searchInput.addEventListener(
"keyup",
()=>{


let value =
searchInput.value
.toLowerCase();



let result =
allHadiths.filter(
(h)=>{


return JSON.stringify(h)
.toLowerCase()
.includes(value);



});



displayHadith(result);



});


}



console.log(
"✅ Hadith Part 5 Loaded"
);
