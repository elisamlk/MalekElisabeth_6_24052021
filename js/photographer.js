const photographerInfo = document.querySelector(".photographer-info");
const portfolio = document.querySelector(".portfolio");
let params = new URLSearchParams(document.location.search);
console.log(params);

let id = params.get("id");
console.log(id);

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
          "../img/" + id + "/" + media[i].video}" alt="${media[i].title}"></video>
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

/*if (photographerId == id && media[i].hasOwnProperty("image")) {
        let divMedia = document.createElement("div");
        divMedia.className = "div-media";
        portfolio.appendChild(divMedia);
        let imageMedia = document.createElement("img");
        imageMedia.className = "image-media";
        let imageContent = "../img/" + id + "/" + media[i].image;
        console.log(imageContent);
        imageMedia.src = imageContent;
        divMedia.appendChild(imageMedia);
        let imageInfoContent = document.createElement("div");
        divMedia.appendChild(imageInfoContent);
        let imageName = document.createElement("p");
        imageName.className = "image-name";
        imageName.textContent = media[i].title;
        imageInfoContent.appendChild(imageName);
        imageInfoContent.className = "image-info-content";
        let likes = document.createElement("p");
        likes.textContent = media[i].likes;
        imageInfoContent.appendChild(likes);
        let heart = document.createElement("i");
        heart.className = "far fa-heart";
        imageInfoContent.appendChild(heart);
      }
      */
