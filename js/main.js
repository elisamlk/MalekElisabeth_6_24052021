import { Photographer } from "./class/Photographer.js";
import { tagFilter } from "./modules/tagFilter.js";
import { scrollButton} from "./modules/scroll.js";

function displayPhotographers() {
  fetch("data/FishEyeData.json")
    .then((response) => response.json())
    .then((data) => {
      let photographers = data.photographers;
      for (let i in photographers) {
        new Photographer(photographers[i]).createCard();
      }
      tagFilter();
      scrollButton();
    });
}

displayPhotographers();
