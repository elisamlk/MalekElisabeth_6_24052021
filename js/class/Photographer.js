export class Photographer {
  constructor(photographer) {
    this.id = photographer.id;
    this.portrait = photographer.portrait;
    this.name = photographer.name;
    this.city = photographer.city;
    this.country = photographer.country;
    this.tagline = photographer.tagline;
    this.price = photographer.price;
    this.tags = photographer.tags;
  }

  createCard() {
    let photographerDisplay = document.querySelector(".photographer-display");
    photographerDisplay.innerHTML += `<section class="photographer-card ${this.tags
      .map((tag) => `${tag}`)
      .join(" ")}" aria-label = "photographers">
        <a class="link" href="./html/photographer.html?id=${this.id}">
          <img src="./img/photographers/${this.portrait}" alt="${this.name} portrait">
          <h2>${this.name}</h2>
        </a>
        <div class="location">
          <h3 class="city">${this.city},</h3>
          <h3 class="country">${this.country}</h3> 
        </div>
        <p class="tagline">${this.tagline}</p>
        <p class="price">${this.price}€/jour</p>
        <ul class="tags">${this.tags
          .map(
            (tag) => `<li class="tags-list" data-filter="${tag}">#${tag}</li>`
          )
          .join(" ")}
          </ul> 
        </section>`;
  }

  createPhotographerProfil() {
    let photographerInfo = document.querySelector(".photographer-info");
    photographerInfo.innerHTML += `<div class="info" aria-label="photographer profil">
    <h2>${this.name}</h2>
      <div class="location">
        <h3 class="city">${this.city},</h3>
        <h3 class="country">${this.country}</h3>
      </div>
      <p class="tagline">${this.tagline}</p>
      <ul class="tags">${this.tags
        .map((tag) => `<li class="tags-list"${tag}">#${tag}</li>`)
        .join(" ")}
      </div>
      <button class="contact-btn">Contactez-moi</button>
      <img class="id-photo" src="../img/photographers/${
        this.portrait
      }" alt="${this.name}">`;
  }

  addPhotographerPrice() {
    let prices = document.getElementById("price-bottom");
    prices.textContent = this.price + "€/jour";
  }

  addNameInForm() {
    let photographerName = document.getElementById("form-name");
    photographerName.textContent = this.name;
  }
}
