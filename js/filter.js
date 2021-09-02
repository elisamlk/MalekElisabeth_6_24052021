function sortElements() {
  let filters = document.getElementById("media-select");
  console.log(filters);
  filters.addEventListener("change", function () {
    let optionSelected = filters.value;
    if (optionSelected == "Popularité") {
      sortByPopularity();
    } else if (optionSelected == "Date") {
      sortByDate();
    } else if (optionSelected == "Titre") {
      sortByTitle();
    }
  });
}

function sortByTitle() {
  let imageTitle = document.querySelectorAll("[data-title]");
  Array.from(imageTitle)
    .sort((a, b) =>
      a.innerText.toLowerCase().localeCompare(b.innerText.toLowerCase())
    )
    .forEach((el) =>
      el.closest(".portfolio").appendChild(el.closest(".image-card"))
    );
}

function sortByPopularity() {
  let imageLikes = document.querySelectorAll("[data-likes");
  Array.from(imageLikes)
    .sort((a, b) => b.dataset.likes - a.dataset.likes)
    .forEach((el) =>
      el.closest(".portfolio").appendChild(el.closest(".image-card"))
    );
}

function sortByDate() {
  let imageDate = document.querySelectorAll("[data-date]");
  Array.from(imageDate)
    .sort((a, b) => {
      let dateA = new Date(a.dataset.date);
      //console.log(dateA)
      let dateB = new Date(b.dataset.date);
      return dateB - dateA;
    })
    .forEach((el) =>
      el.closest(".portfolio").appendChild(el.closest(".image-card"))
    );
}
