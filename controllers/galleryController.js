"use strict";

const gImgs = [];
const elImages = [];

function renderGallery() {
  for (let index = 1; index <= 18; index++) {
    gImgs.push({ id: index, url: `../imgs/${index}.jpg` });
    elImages.push(
      `<img class="gallery-image" onclick="onImgSelect(this.id)" id="${index}" src="../imgs/${index}.jpg"/>`
    );
  }
  const element = document.querySelector(".photos-gallery");
  if (element) {
    element.innerHTML = elImages.join("");
  }
}

function onImgSelect(id) {
  setImg(+id);
  // renderMeme();
  console.log("here");

  window.location.href = "../meme-generator/memes-editor.html";
}
