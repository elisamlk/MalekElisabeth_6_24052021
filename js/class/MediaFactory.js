export class MediaFactory {
  constructor(media) {
    this.media = media;
  }
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
    if (this.media.hasOwnProperty("image")) {
      return this.createImage();
    } else if (this.media.hasOwnProperty("video")) {
      return this.createVideo();
    } else {
      return "";
    }
  }
  createImage() {
    return `<div class= "links">
    <img class="image-media" role="button" src="${
      "../img/" + this.media.photographerId + "/" + this.media.image
    }" alt="${this.media.title}">
    </div>`;
  }
  createVideo() {
    return `<div class="links links-video">
      <video class="image-media" role="button" controls src="${
        "../img/" + this.media.photographerId + "/" + this.media.video
      }" alt="${this.media.title}"></video>
      </div>`;
  }
}
