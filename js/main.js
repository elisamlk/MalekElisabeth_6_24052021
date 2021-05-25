const photographerDisplay = document.querySelector(".photographer-display");

fetch("data/FishEyeData.json")
  .then((response) => response.json())
  .then((data) => {
    let photographers = data.photographers;
    console.log(photographers);
    for (let i = 0; i < photographers.length; i++) {
      let section = document.createElement("section");
      section.className = "photographer-card";
      photographerDisplay.appendChild(section);
      let link = document.createElement("a");
      link.href ="html/photographer.html?id=" + photographers[i].id;
      section.appendChild(link);
      let image = document.createElement("img");
      let imageID = photographers[i].portrait;
      image.src = "img/photographers/" + imageID;
      link.appendChild(image);
      let photographerName = document.createElement("h2");
      photographerName.textContent = photographers[i].name;
      link.appendChild(photographerName);
      let location = document.createElement("div");
      location.className = "location";
      section.appendChild(location);
      let city = document.createElement("p");
      city.className = "city";
      city.textContent = photographers[i].city + ", ";
      location.appendChild(city);
      let country = document.createElement("p");
      country.className = "country";
      country.textContent = photographers[i].country;
      location.appendChild(country);
      let tagLine = document.createElement("p");
      tagLine.className = "tagline";
      tagLine.textContent = photographers[i].tagline;
      section.appendChild(tagLine);
      let price = document.createElement("p");
      price.className = "price";
      price.textContent = photographers[i].price + "€/jour ";
      section.appendChild(price);
      let ul = document.createElement("ul");
      section.appendChild(ul);
      for (let t = 0; t < photographers[i].tags.length; t++) {
        let li = document.createElement("li");
        li.textContent = photographers[i].tags[t];
        ul.appendChild(li);
      }
    }
  });

console.log(photographerDisplay);
