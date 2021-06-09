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

function addPhotographerProfil(photographer) {
  photographerInfo.innerHTML += `<div class="info">
        <h2>${photographer.name}</h2>
        <div class="location">
          <p class="city">${photographer.city},</p>
          <p class="country">${photographer.country}</p>
        </div>
        <p class="tagline">${photographer.tagline}</p>
        <nav ${photographer.tags
          .map((tag) => `<a class="tags-list"${tag}">#${tag}</a>`)
          .join(" ")}
        </nav>
        </div>
       <button class="contact-btn">Contactez-moi</button>
        <img class="id-photo" src="${
        "../img/photographers/" + photographer.portrait
      }" alt="">
      `;
}

function addPhotographerPortfolio(media) {
  portfolio.innerHTML += `<div class="image-card">
  <img class="image-media" src="${"../img/" + id + "/" + media.image}" alt="${
    media.title
  }">
  <div class="info-card">
      <p class ="image-name">${media.title}</p>
      <div class="info-container">
          <p class="likes">${media.likes}</p> 
          <i class="far fa-heart"></i>
      </div>
  </div>
</div>`;
}

/*fetch("../data/FishEyeData.json")
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

  */

console.log(photographerInfo);
console.log(portfolio);

function factoryImage(image, type) {
  if (image.hasOwnProperty("image")) {
    type.innerHTML +=
      '<img class="image-media" src=${"../img/" + id + "/" + medias[i].image alt="${medias[i].title}">';
  }
}

function factoryVideo(videos, type) {
  if (videos.hasOwnProperty("video")) {
    type.innerHTML += `<video class="image-media" controls src=" "../img/" + id + "/" + media[i].video}" alt="${media[i].title}"></video>`;
  }
}
