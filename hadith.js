// ======================================
// RAZA EDUCATION HUB
// HADITH COURSE
// VERSION 3.0
// ======================================


// DOM

const hadithList = document.getElementById("hadithList");
const searchInput = document.getElementById("searchInput");




// Render Hadith Cards

function renderHadith(list){

if(!hadithList) return;


hadithList.innerHTML = "";


list.forEach(item=>{


hadithList.innerHTML += `

<div class="card">


<h2>
📖 ${item.title}
</h2>


<p style="font-size:30px;text-align:right;line-height:2;">
${item.arabic}
</p>


<p>
<b>English:</b> ${item.english}
</p>


<p>
<b>Urdu:</b> ${item.urdu}
</p>


<p>
🏷️ Category: ${item.category || "General"}
</p>



<button 
class="hero-btn openHadith"
data-id="${item.id}">
📖 Read Full Hadith
</button>


</div>

`;


});


}




// Load Data

if(typeof hadiths !== "undefined"){

renderHadith(hadiths);

}
else{

console.log("❌ hadith-data.js not loaded");

}




// Open Reader Page

document.addEventListener("click",(e)=>{


if(e.target.classList.contains("openHadith")){


let id = e.target.dataset.id;


location.href =
`hadith-reader.html?id=${id}`;


}


});





// Search Hadith

if(searchInput){


searchInput.addEventListener("input",()=>{


let value =
searchInput.value.toLowerCase();



let result =
hadiths.filter(h=>

h.title.toLowerCase().includes(value) ||

h.english.toLowerCase().includes(value) ||

h.urdu.toLowerCase().includes(value) ||

(h.category && h.category.toLowerCase().includes(value))


);



renderHadith(result);



});


}




console.log("✅ Hadith Course Loaded");
