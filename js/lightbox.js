function displayLightbox() {
  let lightbox = document.querySelector(".lightbox");
  let lightboxClose = document.querySelector(".lightbox-close");
  let lightboxNext = document.querySelector(".fa-chevron-right");
  let lightboxPrev = document.querySelector(".fa-chevron-left");
  let lightboxMedias = document.querySelectorAll(".links");
  let lightboxArray = Array.from(lightboxMedias);
  console.log(lightboxArray);
  //let lastImage = lightboxArray.length -1;

  for (let lightboxMedia of lightboxMedias) {
    lightboxMedia.addEventListener("click", function () {
      let typeOfMedia = lightboxMedia.childNodes[1];
      console.log(lightbox);
      // On ajoute le média cliqué dans la modale
      let mediaType = document.querySelector(".media-type");
      mediaType.appendChild(typeOfMedia);

      // On affiche la lightbox
      lightbox.classList.add("show");

      //On fait défiler les photos
      lightboxNext.addEventListener("click", function () {
        let activeMedia = lightboxArray.indexOf(lightboxMedia);
        console.log(activeMedia);
        mediaType.append(lightboxArray[activeMedia +1]);
        mediaType.removeChild(typeOfMedia);
      });

      // On retire la classe qui permet d'afficher la lightbox
      lightboxClose.addEventListener("click", function () {
        lightbox.classList.remove("show");
        mediaType.removeChild(typeOfMedia);
        lightboxMedia.append(typeOfMedia);
      });
    });
  }
}
