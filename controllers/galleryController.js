"use strict";

function renderGallery() {
  const images = [];
  for (let index = 1; index <= 18; index++) {
    images.push(
      `<img onclick="onImgSelect(this.id)" id="${index}" height="75px" width="75px" src="imgs/${index}.jpg"/>`
    );
  }

  document.querySelector(".photos-gallery").innerHTML = images.join("");
}

function onImgSelect(id) {
  setImg(+id);
  renderMeme();
}
