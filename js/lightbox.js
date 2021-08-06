function displayLightbox() {
  let lightbox = document.querySelector(".lightbox");
  let lightboxClose = document.querySelector(".lightbox-close");
  console.log(lightboxClose);
  //console.log(lightbox);
  let lightboxMedias = document.querySelectorAll(".links");
  // On écoute l'évenement sur les medias
  for (let lightboxMedia of lightboxMedias) {
    //console.log(lightboxMedia)
    lightboxMedia.addEventListener("click", function () {
      console.log(lightboxMedia)
      
      //let mediaType = document.querySelector(".media-type");

      // On ajoute le média cliqué dans la modale

      // On affiche la lightbox
      lightbox.classList.add("show");
      // On retire la classe qui permet d'afficher la lightbox
      lightboxClose.addEventListener("click", function () {
        lightbox.classList.remove("show");
      });
    });
  }
}



