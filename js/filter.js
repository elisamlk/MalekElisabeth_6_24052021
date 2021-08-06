let orderPortfolio = document.querySelector(".portfolio");
console.log(orderPortfolio);

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

function sortByPopularity() {
  let imageLikes = document.querySelectorAll("[data-likes");
  let arrayOfLikes = [];
  for (let i in imageLikes) {
    let dataLikes = parseInt(imageLikes[i].dataset.likes);
    console.log(dataLikes);
    arrayOfLikes.push(dataLikes);
    arrayOfLikes.sort(function (a, b) {
      return b - a;
    });
    console.log(arrayOfLikes);
  }
}

/*function sortByTitle() {
  let imageTitles = document.querySelectorAll("[data-title]");
  console.log(imageTitles);
  let arrayOfTitle = [];
  for (let imageTitle of imageTitles.values()) {
    console.log(imageTitle);
    let dataTitle = imageTitle.dataset.title;

   
    //arrayOfTitle.push(dataTitle);
    arrayOfTitle.sort(function (a, b) {
      return a.localeCompare(b);
    });
    console.log(arrayOfTitle);

  }
}
*/

function sortByDate() {
  let imageDate = document.querySelectorAll("[data-date]");
  let arrayOfDate = [];
  for (let i in imageDate) {
    let dataDate = imageDate[i].dataset.date;
    console.log(dataDate);
  }
}

function sortByTitle() {
  let imageTitles = document.querySelectorAll("[data-title]");
  console.log(imageTitles);
  let arrayOfTitle = [];
  for (let imageTitle of imageTitles.values()) {
    console.log(imageTitle);
    let dataTitle = imageTitle.dataset.title;
    console.log(dataTitle);
    arrayOfTitle.push(dataTitle);
    console.log(arrayOfTitle);
    arrayOfTitle.sort(function (a, b) {
      return a.localeCompare(b);
      
    });
  }
}
