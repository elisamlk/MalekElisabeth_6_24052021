fetch("data/FishEyeData.json")
  .then((response) => response.json())
  .then((data) => {
    let photographers = data.photographers;
    console.log(photographers);
    for (let i = 0; i < photographers.length; i++) {
      addPhotographersCard(i, photographers);
    }
  });

function addPhotographersCard(i, photographers) {
  let photographerDisplay = document.querySelector(".photographer-display");
  photographerDisplay.innerHTML += `<section class="photographer-card">
      <a class="link" href="html/photographer.html?id=${photographers[i].id}">
        <img src="img/photographers/${photographers[i].portrait}" alt="">
        <h2>${photographers[i].name}</h2>
      </a>
      <div class="location">
        <p class="city">${photographers[i].city},</p>
        <p class="country">${photographers[i].country}</p> 
      </div>
      <p class="tagline">${photographers[i].tagline}</p>
      <p class="price">${photographers[i].price}€/jour</p>
      <ul class="tags">${photographers[i].tags
        .map((tag) => `<li class="tags-list"${tag}">#${tag}</li>`)
        .join(" ")}
        </ul> 
      </section>`;
}










