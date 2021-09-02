function displayLightbox() {
  let lightbox = document.querySelector(".lightbox");
  let lightboxMedias = document.querySelectorAll(".links");
  let lightboxClose = document.querySelector(".lightbox-close");
  let lightboxNext = document.querySelector(".fa-chevron-right");
  let lightboxPrev = document.querySelector(".fa-chevron-left");

  let lightboxArray = Array.from(lightboxMedias);
  console.log(lightboxArray);
  let lastImageIndex = lightboxArray.length - 1;
  console.log(lastImageIndex);

  for (let lightboxMedia of lightboxMedias) {
    lightboxMedia.addEventListener("click", function () {
      let typeOfMedia = lightboxMedia.childNodes[1];

      // On ajoute le média cliqué dans la modale
      let mediaType = document.querySelector(".media-type");
      let cloneUn = typeOfMedia.cloneNode(true);
      mediaType.appendChild(cloneUn);
      let activeMedia = lightboxArray.indexOf(lightboxMedia);
      mediaType.setAttribute("currentIndex", activeMedia);

      // On affiche la lightbox
      lightbox.classList.add("show");

      //On fait défiler les photos vers la droite
      lightboxNext.addEventListener("click", function () {
        mediaType.innerHTML = "";
        let currentIndex = parseInt(mediaType.getAttribute("currentIndex"));
        console.log(currentIndex);
        if (currentIndex != lastImageIndex) {
          let clone = lightboxArray[currentIndex + 1].cloneNode(true);
          mediaType.append(clone);
          mediaType.setAttribute("currentIndex", currentIndex + 1);
        } else {
          mediaType.innerHTML = "";
          mediaType.append(lightboxArray[0].cloneNode(true));
          mediaType.setAttribute("currentIndex", currentIndex - lastImageIndex);
        }
      });

      //On fait défiler les photos vers la gauche
      lightboxPrev.addEventListener("click", function () {
        mediaType.innerHTML = "";
        let currentIndex = parseInt(mediaType.getAttribute("currentIndex"));
        if (currentIndex != 0) {
          let clone = lightboxArray[currentIndex - 1].cloneNode(true);
          mediaType.append(clone);
          mediaType.setAttribute("currentIndex", currentIndex - 1);
        } else if (currentIndex == 0) {
          mediaType.innerHTML = "";
          mediaType.append(lightboxArray[lastImageIndex].cloneNode(true));
          mediaType.setAttribute("currentIndex", currentIndex + lastImageIndex);
        }
      });

      // On retire la classe qui permet d'afficher la lightbox
      lightboxClose.addEventListener("click", function () {
        lightbox.classList.remove("show");
        mediaType.innerHTML = "";
      });
    });
  }
}
