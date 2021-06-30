let navLinks = document.querySelectorAll(".nav-link");

fetch("data/FishEyeData.json")
  .then((response) => response.json())
  .then((data) => {
    let photographers = data.photographers;
    console.log(photographers);
    for (let i = 0; i < photographers.length; i++) {
      addPhotographerCard(photographers[i]);
    }
    for (let n in navLinks) {
      navLinks[n].addEventListener("click", function () {
        let selectedTag = navLinks[n].getAttribute("data-filter");
        console.log(selectedTag);
        let cardsToDisplay = document.querySelectorAll(
          `.photographer-card.${selectedTag}`
        );
        console.log(cardsToDisplay);
        let cardsToHide = document.querySelectorAll(
          `.photographer-card:not(.${selectedTag})`
        );
        console.log(cardsToHide);
        cardsToDisplay.forEach((cardToDisplay) => {
          cardToDisplay.classList.add("display");
          cardToDisplay.classList.remove("hide");
        });
        cardsToHide.forEach((cardToHide) => {
          cardToHide.classList.add("hide");
          cardToHide.classList.remove("display");
        });
      });
    }
  });

function addPhotographerCard(photographer) {
  let photographerDisplay = document.querySelector(".photographer-display");
  photographerDisplay.innerHTML += `<section class="photographer-card ${photographer.tags
    .map((tag) => `${tag}`)
    .join(" ")}">
      <a class="link" href="html/photographer.html?id=${photographer.id}">
        <img src="img/photographers/${photographer.portrait}" alt="">
        <h2>${photographer.name}</h2>
      </a>
      <div class="location">
        <p class="city">${photographer.city},</p>
        <p class="country">${photographer.country}</p> 
      </div>
      <p class="tagline">${photographer.tagline}</p>
      <p class="price">${photographer.price}€/jour</p>
      <ul class="tags">${photographer.tags
      .map((tag) => `<li class="tags-list" data-filter="${tag}">#${tag}</li>`)
      .join(" ")}
        </ul> 
      </section>`;
}
