const photographerInfo = document.querySelector(".photographer-info");
const portfolio = document.querySelector(".portfolio");
let params = new URLSearchParams(document.location.search);
//console.log(params);
let id = params.get("id");
//console.log(id);

//console.log(photographerInfo);
//console.log(portfolio);
let modalForm = document.querySelector("aside");
let filter = document.querySelectorAll("option");
console.log(filter);

fetch("../data/FishEyeData.json")
  .then((response) => response.json())
  .then((data) => {
    let photographers = data.photographers;
    let medias = data.media;
    console.log(photographers);
    console.log(medias);
    for (let i in photographers) {
      let photographerId = photographers[i].id;
      if (photographerId == id) {
        addPhotographerProfil(photographers[i]);
        addNameInForm(photographers[i]);
        addPhotographerPrice(photographers[i]);
      }
    }

    for (let i in medias) {
      let mediaId = medias[i].photographerId;
      //console.log(mediaId);
      if (mediaId == id) {
        addPhotographerPortfolio(medias[i]);
        //sortByDate(medias[i]);
      }
    }

    manageLikes();
    //addLike();
    //addPhotographerTotalLikes();

    let contactBtn = document.querySelector(".contact-btn");
    console.log(contactBtn);
    contactBtn.addEventListener("click", function () {
      modalForm.style.display = "block";
    });
    let closeBtn = document.querySelector(".fas");
    console.log(closeBtn);
    closeBtn.addEventListener("click", function () {
      modalForm.style.display = "none";
    });
  });

/*function sortByDate(media) {
  let date =[ media.date];
  console.log(date)
  date.sort(function(a, b) {
    return a - b;
   

  });
  console.log(date); 
}
*/

function addNameInForm(photographer) {
  let photographerName = document.getElementById("test");
  photographerName.textContent = photographer.name;
  console.log(photographerName);
}

function addPhotographerPortfolio(media) {
  portfolio.innerHTML += `<div class="image-card">
  ${factoryMedia(media, portfolio)}
  <div class="info-card">
    <p class ="image-name">${media.title}</p>
    <div class="info-container">
      <p class="image-likes">${media.likes}</p> 
      <i class="far fa-heart like-button"></i>
    </div>
  </div>
  </div>`;
}

function addPhotographerProfil(photographer) {
  photographerInfo.innerHTML += `<div class="info">
    <h2>${photographer.name}</h2>
      <div class="location">
        <p class="city">${photographer.city},</p>
        <p class="country">${photographer.country}</p>
      </div>
      <p class="tagline">${photographer.tagline}</p>
      <ul class="tags">${photographer.tags
        .map((tag) => `<li class="tags-list"${tag}">#${tag}</li>`)
        .join(" ")}
      </div>
      <button class="contact-btn">Contactez-moi</button>
      <img class="id-photo" src="../img/photographers/${
        photographer.portrait
      }" alt="">`;
}

function addPhotographerPrice(photographer) {
  let prices = document.getElementById("price-bottom");
  prices.textContent = photographer.price + "€/jour";
  console.log(prices);
}

/*function addLike() {
  let likeButton = document.querySelectorAll(".like-button");
  let imageLikes = document.querySelectorAll(".image-likes");
  console.log(likeButton);
  console.log(imageLikes);
  for (let i in likeButton) {
    likeButton[i].addEventListener("click", function () {
      let imageNumber = parseInt(imageLikes[i].innerText) + 1;
      imageLikes[i].innerText = imageNumber;
      console.log(imageNumber);
    });
  }
}

function addPhotographerTotalLikes() {
  let totalLikes = document.getElementById("total-likes");
  let arrayOfLikes = [];
  let imageLikes = document.querySelectorAll(".image-likes");
  console.log(imageLikes.length);
  for (let i in imageLikes) {
    let imageNumber = parseInt(imageLikes[i].innerText);
    if (isNaN(imageNumber)) {
      return 0;
    } else {
      arrayOfLikes.push(imageNumber);
      console.log(arrayOfLikes);
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      let sumTotalLikes = arrayOfLikes.reduce(reducer);
      console.log(sumTotalLikes);
      totalLikes.innerHTML = sumTotalLikes;
    }
  }
}
*/

function manageLikes() {
  let totalLikes = document.getElementById("total-likes");
  let likeButton = document.querySelectorAll(".like-button");
  let imageLikes = document.querySelectorAll(".image-likes");
  let arrayOfLikes = [];
  for (let i in likeButton) {
    likeButton[i].addEventListener("click", function () {
      let isLiked = likeButton[i].classList.toggle("is-liked");
      if ((likeButton[i] = isLiked)) {
        let imageNumber = parseInt(imageLikes[i].innerText) + 1;
        imageLikes[i].innerText = imageNumber;
        console.log(imageNumber);
      } else {
        let imageNumber = parseInt(imageLikes[i].innerText) - 1;
        imageLikes[i].innerText = imageNumber;
        console.log(imageNumber);
      }
    });
    for (let i in imageLikes) {
      let imageNumber = parseInt(imageLikes[i].innerText);
      if (isNaN(imageNumber)) {
        return 0;
      } else {
        arrayOfLikes.push(imageNumber);
        console.log(arrayOfLikes);
        const reducer = (accumulator, currentValue) =>
          accumulator + currentValue;
        let sumTotalLikes = arrayOfLikes.reduce(reducer);
        console.log(sumTotalLikes);
        totalLikes.innerHTML = sumTotalLikes;
      }
    }
  }
}
