const params = new URLSearchParams(window.location.search);

const id = params.get("id");

async function loadSurah() {

try {

const response = await fetch(

`https://api.alquran.cloud/v1/surah/${id}`

);

const result = await response.json();

document.getElementById("surahTitle").innerHTML =
result.data.englishName;

let html = "";

result.data.ayahs.forEach((ayah) => {

html += `

<div class="card">

<h2 style="text-align:right;font-size:32px;">

${ayah.text}

</h2>

<p>

Ayah ${ayah.numberInSurah}

</p>

</div>

`;

});

document.getElementById("surahContent").innerHTML = html;

}

catch(error){

document.getElementById("surahContent").innerHTML =
"Failed to load Surah.";

}

}

loadSurah();
