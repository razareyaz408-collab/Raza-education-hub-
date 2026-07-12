const surahs = [

"Al-Fatihah",

"Al-Baqarah",

"Aal-Imran",

"An-Nisa",

"Al-Ma'idah",

"Al-An'am",

"Al-A'raf",

"Al-Anfal",

"At-Tawbah",

"Yunus"

];

const list = document.getElementById("surahList");

function showSurahs(data){

list.innerHTML="";

data.forEach((surah,index)=>{

list.innerHTML += `

<div class="card">

<h3>${index+1}. ${surah}</h3>

<a href="surah.html?id=${index+1}" class="hero-btn">

Open

</a>

</div>

`;

});

}

showSurahs(surahs);

document.getElementById("searchSurah").addEventListener("input",(e)=>{

const value=e.target.value.toLowerCase();

const filtered=surahs.filter(s=>

s.toLowerCase().includes(value)

);

showSurahs(filtered);

});
