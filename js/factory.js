function factoryMedia(media, type) {
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