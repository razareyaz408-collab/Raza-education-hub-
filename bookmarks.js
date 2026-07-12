const list = document.getElementById("bookmarkList");

let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

if (bookmarks.length > 0) {

  list.innerHTML = "";

  bookmarks.forEach((surahId) => {

    list.innerHTML += `
      <div class="card">

        <h3>📖 Surah ${surahId}</h3>

        <a href="surah.html?id=${surahId}" class="hero-btn">
          Open Surah
        </a>

        <br><br>

        <button class="hero-btn removeBtn" data-id="${surahId}">
          ❌ Remove Bookmark
        </button>

      </div>
    `;

  });

  document.querySelectorAll(".removeBtn").forEach((button) => {

    button.addEventListener("click", () => {

      const id = button.dataset.id;

      bookmarks = bookmarks.filter(item => item !== id);

      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

      location.reload();

    });

  });

} else {

  list.innerHTML = `
    <div class="card">

      <h3>No Bookmarks Found</h3>

      <p>You have not bookmarked any Surah yet.</p>

    </div>
  `;

}
