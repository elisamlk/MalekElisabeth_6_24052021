const photographerInfo = document.querySelector(".photographer-info");
const portfolio = document.querySelector(".portfolio");
let params = new URLSearchParams(document.location.search);
console.log(params);
let id = params.get("id");
console.log(id);

console.log(photographerInfo);
console.log(portfolio);

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
      }
    }
    for (let i in medias) {
      let mediaId = medias[i].photographerId;
      console.log(mediaId);
      if (mediaId == id) {
        addPhotographerPortfolio(medias[i]);
      }
    }
  });

function factoryMedia(media, type) {
  if (media.hasOwnProperty("image")) {
    return `<img class="image-media" src="${
      "../img/" + id + "/" + media.image
    }" alt="${media.title}">`;
  } else if (media.hasOwnProperty("video")) {
    return `<video class="image-media" controls src="${
      "../img/" + id + "/" + media.video
    }" alt="${media.title}"></video>`;
  } else {
    return "";
  }
}

function addPhotographerPortfolio(media) {
  portfolio.innerHTML += `<div class="image-card">
  ${factoryMedia(media, portfolio)}
  <div class="info-card">
    <p class ="image-name">${media.title}</p>
    <div class="info-container">
      <p class="likes">${media.likes}</p> 
      <i class="far fa-heart"></i>
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
