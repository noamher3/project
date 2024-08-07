"use strict";

const gImgs = [];
const elImages = [];

function renderGallery() {
  for (let index = 1; index <= 18; index++) {
    gImgs.push({ id: index, url: `imgs/${index}.jpg` });
    elImages.push(
      `<img onclick="onImgSelect(this.id)" id="${index}" height="75px" width="75px" src="imgs/${index}.jpg"/>`
    );
  }

  document.querySelector(".photos-gallery").innerHTML = elImages.join("");
}

function onImgSelect(id) {
  setImg(+id);
  renderMeme();
}
