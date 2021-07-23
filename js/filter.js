function sortElements() {
  let filters = document.getElementById("media-select");
  console.log(filters);
  filters.addEventListener("change", function () {
    let optionSelected = filters.value;
    if (optionSelected == "Popularité") {
      sortByPopularity();
    } else if (optionSelected == "Date") {
      sortByDate();
    }else if(optionSelected == "Titre") {
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

function sortByDate(){
  console.log("hello");
}

function sortByTitle(){
  console.log("hello");
}
