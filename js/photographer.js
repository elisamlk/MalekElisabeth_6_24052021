const photographerInfo = document.querySelector(".photographer-info");
const portfolio = document.querySelector(".portfolio");

let params = new URLSearchParams(document.location.search);
console.log(params);
let id = params.get("id");
console.log(id);

fetch("../data/FishEyeData.json")
  .then((response) => response.json())
  .then((data) => {
    let photographers = data.photographers;
    console.log(photographers);
    for (let i = 0; i < photographers.length; i++) {
      let photographerId = photographers[i].id;
      if (photographerId == id) {
        photographerInfo.innerHTML += `<div class="info">
        <h2>${photographers[i].name}</h2>
        <div class="location">
          <p class="city">${photographers[i].city},</p>
          <p class="country">${photographers[i].country}</p>
        </div>
        <p class="tagline">${photographers[i].tagline}</p>
        <nav>
        <a>${photographers[i].tags[0]}</a>
      </nav>
      </div>
      <button class="contact-btn">Contactez-moi</button>
      <img class="id-photo" src="${
        "../img/photographers/" + photographers[i].portrait
      }" alt="">
      `;
      }
    }
  });

fetch("../data/FishEyeData.json")
  .then((response) => response.json())
  .then((data) => {
    let media = data.media;
    console.log(media);
    for (let i = 0; i < media.length; i++) {
      let photographerId = media[i].photographerId;
      if (photographerId == id && media[i].hasOwnProperty("image")) {
        portfolio.innerHTML += `<div class="image-card">
        <img class="image-media" src="${
          "../img/" + id + "/" + media[i].image
        }" alt="${media[i].title}">
        <div class="info-card">
            <p class ="image-name">${media[i].title}</p>
            <div class="info-container">
                <p class="likes">${media[i].likes}</p> 
                <i class="far fa-heart"></i>
            </div>
        </div>
    </div>`;
      } else if (photographerId == id && media[i].hasOwnProperty("video")) {
        portfolio.innerHTML += `<div class="image-card">
        <video class="image-media" controls src="${
          "../img/" + id + "/" + media[i].video
        }" alt="${media[i].title}"></video>
        <div class="info-card">
            <p class ="image-name">${media[i].title}</p>
            <div class="info-container">
                <p class="likes">${media[i].likes}</p>
                <i class="far fa-heart"></i>
            </div>
        </div>
    </div>`;
      }
    }
  });

console.log(photographerInfo);
console.log(portfolio);
