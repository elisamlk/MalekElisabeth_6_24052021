import { getData } from "./modules/getData.js";
import { Photographer } from "./class/Photographer.js";
import { tagFilter } from "./modules/tagFilter.js";

function displayPhotographers() {
  getData().then((data) => {
    let photographers = data.photographers;
    for (let i in photographers) {
      new Photographer(photographers[i]).createCard();
    }
    tagFilter();
  });
}

displayPhotographers();
