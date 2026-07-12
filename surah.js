const params = new URLSearchParams(window.location.search);

const id = params.get("id");

async function loadSurah() {

try {

const response = await fetch(
`https://api.alquran.cloud/v1/surah/${id}/editions/quran-uthmani,en.asad`
);

const result = await response.json();

document.getElementById("surahTitle").innerHTML =
arabic.englishName + " (" + arabic.name + ")";

let html = "";

const arabic = result.data[0];
const english = result.data[1];

arabic.ayahs.forEach((ayah, index) => {

html += `

<div class="card">

<h2 style="text-align:right;font-size:32px;line-height:2;">

${ayah.text}

</h2>

<p style="margin-top:15px;color:#444;">

${english.ayahs[index].text}

</p>

<p>

Ayah ${ayah.numberInSurah}

</p>

</div>

`;

}); NJN

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
