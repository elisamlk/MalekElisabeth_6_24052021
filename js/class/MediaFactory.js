export class MediaFactory {
  constructor(media) {
    this.media = media;
  }
  // Ajout du portfolio des photographes 
  addPhotographerPortfolio() {
    let portfolio = document.querySelector(".portfolio");
    portfolio.innerHTML += `<div class="image-card" data-date="${
      this.media.date
    }" data-likes="${this.media.likes}" data-title="${this.media.title}">
    ${this.createMedia()}
    <div class="info-card">
      <p class ="image-name">${this.media.title}</p>
      <div class="info-container" aria-label="photographer likes">
        <p class="image-likes">${this.media.likes}</p> 
        <i class="far fa-heart like-button"></i>
      </div>
    </div>
    </div>`;
  }

  createMedia() {
    // eslint-disable-next-line no-prototype-builtins
    if (this.media.hasOwnProperty("image")) {
      return this.createImage();
    // eslint-disable-next-line no-prototype-builtins
    } else if (this.media.hasOwnProperty("video")) {
      return this.createVideo();
    } else {
      return "";
    }
  }
  createImage() {
    return `<a href="#" class= "links">
    <img class="image-media" role="button" src="${
      "../img/" + this.media.photographerId + "/" + this.media.image
    }" alt="${this.media.title}">
    </a>`;
  }
  createVideo() {
    return `<a href="#" class="links links-video">
      <video class="image-media" role="button" controls src="${
        "../img/" + this.media.photographerId + "/" + this.media.video
      }" alt="${this.media.title}"></video>
      </a>`;
  }
}
