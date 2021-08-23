function displayLightbox() {
  let lightbox = document.querySelector(".lightbox");
  let lightboxClose = document.querySelector(".lightbox-close");
  let lightboxNext = document.querySelector(".fa-chevron-right");
  let lightboxPrev = document.querySelector(".fa-chevron-left");
  let lightboxMedias = document.querySelectorAll(".links");
  let lightboxArray = Array.from(lightboxMedias);
  console.log(lightboxArray)
  let lastImage = lightboxArray.length - 1;

  for (let lightboxMedia of lightboxMedias) {
    lightboxMedia.addEventListener("click", function () {
      let typeOfMedia = lightboxMedia.childNodes[1];
     
      // On ajoute le média cliqué dans la modale
      let mediaType = document.querySelector(".media-type");
      mediaType.appendChild(typeOfMedia);
      let activeMedia = lightboxArray.indexOf(lightboxMedia);
      console.log(activeMedia);
      mediaType.setAttribute("currentIndex", activeMedia);
      console.log(mediaType);

      // On affiche la lightbox
      lightbox.classList.add("show");

      //On fait défiler les photos vers la droite
      lightboxNext.addEventListener("click", function () {
        mediaType.innerHTML = "";
        let currentIndex = parseInt(mediaType.getAttribute("currentIndex"));
        mediaType.append(lightboxArray[currentIndex + 1]);
        mediaType.setAttribute("currentIndex", currentIndex + 1);
      });

      //On fait défiler les photos vers la gauche
      lightboxPrev.addEventListener("click", function () {
        mediaType.innerHTML = "";
        let currentIndex = parseInt(mediaType.getAttribute("currentIndex"));
        console.log(currentIndex - 1);
        mediaType.append(lightboxArray[currentIndex - 1]);
        mediaType.setAttribute("currentIndex", currentIndex - 1);
      });

      // On retire la classe qui permet d'afficher la lightbox
      lightboxClose.addEventListener("click", function () {
        //lightbox.classList.remove("show");
        //lightboxMedia.append(typeOfMedia);
        //mediaType.removeChild(typeOfMedia);
        lightbox.classList.remove("show");
        
        
        console.log(portfolio);



      });
    });
  }
}
