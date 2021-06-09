fetch("data/FishEyeData.json")
  .then((response) => response.json())
  .then((data) => {
    let photographers = data.photographers;
    console.log(photographers);
    for (let i = 0; i < photographers.length; i++) {
      addPhotographerCard(photographers[i]);
    }
  });

function addPhotographerCard(photographer) {
  let photographerDisplay = document.querySelector(".photographer-display");
  photographerDisplay.innerHTML += `<section class="photographer-card">
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
        .map((tag) => `<li class="tags-list"${tag}">#${tag}</li>`)
        .join(" ")}
        </ul> 
      </section>`;
}
