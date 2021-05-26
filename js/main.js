const photographerDisplay = document.querySelector(".photographer-display");

fetch("data/FishEyeData.json")
  .then((response) => response.json())
  .then((data) => {
    let photographers = data.photographers;
    console.log(photographers);
    for (let i = 0; i < photographers.length; i++) {
      photographerDisplay.innerHTML += `<section class="photographer-card">
        <a class="link" href="html/photographer.html?id=${photographers[i].id}">
          <img src="img/photographers/${photographers[i].portrait}" alt="">
          <h2>${photographers[i].name}</h2>
        </a>
        <div class="location">
          <p class="city">${photographers[i].city}</p>
          <p class="country">${photographers[i].country}</p> 
        </div>
        <p class="tagline">${photographers[i].tagline}</p>
        <p class="price">${photographers[i].price} €/jour</p>
        <ul>
        <li>${photographers[i].tags[0]}</li>
        </ul>
    </section>`;
    }
  });
console.log(photographerDisplay);

/*for(let t=0; t< photographers[i].tags.length; t++){
  `<li>${photographers[i].tags[t]}</li>`
}}
*/
