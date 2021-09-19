import { Photographer } from "./class/Photographer.js";
import { MediaFactory } from "./class/MediaFactory.js";
import { sortElements } from "./modules/filter.js";
import { manageLikes } from "./modules/likes.js";
import { displayLightbox } from "./modules/lightbox.js";
import { manageForm } from "./modules/form.js";

function displayPhotographerWork() {
  fetch("../data/FishEyeData.json")
    .then((response) => response.json())
    .then((data) => {
      let photographers = data.photographers;
      let medias = data.media;
      let params = new URLSearchParams(document.location.search);
      let id = params.get("id");
      for (let i in photographers) {
        let photographerId = photographers[i].id;
        if (photographerId == id) {
          new Photographer(photographers[i]).createPhotographerProfil();
          new Photographer(photographers[i]).addPhotographerPrice();
          new Photographer(photographers[i]).addNameInForm();
        }
      }
      for (let i in medias) {
        let mediaId = medias[i].photographerId;
        if (mediaId == id) {
          new MediaFactory(medias[i]).addPhotographerPortfolio();
        }
      }
      sortElements();
      manageLikes();
      displayLightbox();
      manageForm();
    });
}

displayPhotographerWork();
