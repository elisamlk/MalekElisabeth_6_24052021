export function displayLightbox() {
  let lightbox = document.querySelector(".lightbox");
  let lightboxMedias = document.querySelectorAll(".links");
  let lightboxClose = document.querySelector(".lightbox-close");
  let lightboxNext = document.querySelector(".fa-chevron-right");
  let lightboxPrev = document.querySelector(".fa-chevron-left");
  let lightboxArray = Array.from(lightboxMedias);
  let lastImageIndex = lightboxArray.length - 1;
  let mediaType = document.querySelector(".media-type");

  function closeLightbox() {
    lightbox.classList.remove("show");
    mediaType.innerHTML = "";
  }

  function slideRight() {
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
  }

  function slideLeft() {
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
  }

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
        slideRight();
      });

      //On fait défiler les photos vers la gauche
      lightboxPrev.addEventListener("click", function () {
        slideLeft();
      });

      // On retire la classe qui permet d'afficher la lightbox
      lightboxClose.addEventListener("click", function () {
        closeLightbox();
      });

      // Fermeture et défilement des photos avec les touches du clavier
      document.addEventListener("keydown", (event) => {
        let keyName = event.key;
        if (keyName === "Escape") {
          closeLightbox();
        } else if (keyName === "ArrowLeft") {
          slideLeft();
        } else if (keyName === "ArrowRight") {
          slideRight();
        }
      });
    });
  }
}
