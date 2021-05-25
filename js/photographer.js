const photographerInfo = document.querySelector(".photographer-info");
const portfolio = document.querySelector(".portfolio");
let params = new URLSearchParams(document.location.search);
console.log(params);

let id = params.get("id");
console.log(id);

fetch("/data/FishEyeData.json")
  .then((response) => response.json())
  .then((data) => {
    let media = data.media;
    console.log(media);
    for (let i = 0; i < media.length; i++) {
      let photographerId = media[i].photographerId;
      if (photographerId == id && media[i].hasOwnProperty("image")) {
        let divMedia = document.createElement("div");
        divMedia.className = "div-media";
        portfolio.appendChild(divMedia);
        let imageMedia = document.createElement("img");
        imageMedia.className = "image-media";
        let imageContent = "/img/" + id + "/" + media[i].image;
        console.log(imageContent);
        imageMedia.src = imageContent;
        divMedia.appendChild(imageMedia);
      }
    }
  });

console.log(photographerInfo);
console.log(portfolio);
