/*function factoryMedia(media, type) {
    if (media.hasOwnProperty("image")) {
      return `<img class="image-media" src="${
        "../img/" + id + "/" + media.image
      }" alt="${media.title}">`;
    } else if (media.hasOwnProperty("video")) {
      return `<video class="image-media" controls src="${
        "../img/" + id + "/" + media.video
      }" alt="${media.title}"></video>`;
    } else {
      return "";
    }
  }
  */

function factoryMedia(media, type) {
  if (media.hasOwnProperty("image")) {
    return `<div class= "links">
      <img class="image-media" src="${
        "../img/" + id + "/" + media.image
      }" alt="${media.title}">
      </div>`;
  } else if (media.hasOwnProperty("video")) {
    return `<div class="links links-video">
    <video class="image-media" controls src="${
      "../img/" + id + "/" + media.video
    }" alt="${media.title}"></video>
    </div>`;
  } else {
    return "";
  }
}
