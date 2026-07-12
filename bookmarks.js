const bookmark = localStorage.getItem("bookmarkSurah");

const list = document.getElementById("bookmarkList");

if (bookmark) {

list.innerHTML = `

<div class="card">

<h3>📖 Surah ${bookmark}</h3>

<a href="surah.html?id=${bookmark}" class="hero-btn">

Open Surah

</a>

<br><br>

<button id="removeBtn" class="hero-btn">

❌ Remove Bookmark

</button>

</div>

`;

document.getElementById("removeBtn").addEventListener("click", () => {

localStorage.removeItem("bookmarkSurah");

location.reload();

});

} else {

list.innerHTML = `

<div class="card">

<h3>No Bookmark Found</h3>

<p>You have not bookmarked any Surah yet.</p>

</div>

`;

}
