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
      section.appendChild(link);
      let image = document.createElement("img");
      let imageID = photographers[i].portrait;
      image.src = "img/photographers/" + imageID;
      link.appendChild(image);
      let photographerName = document.createElement("h2");
      photographerName.textContent = photographers[i].name;
      section.appendChild(photographerName);
      //let location = document.createElement("div");
      //let city = document.createElement("p");
      //let country = document.createElement("p");
      //let tagLine = document.createElement("p");
      //let price = document.createElement("p");
    }
  });

console.log(photographerDisplay);
