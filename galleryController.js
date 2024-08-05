"use strict";

function renderGallery() {
  const images = [];
  for (let index = 1; index <= 18; index++) {
    images.push(
      `<img id="img${index}" height="75px" width="75px" src="imgs/${index}.jpg"/>`
    );
  }
  console.log(images.join(""));

  document.querySelector(".photos-gallery").innerHTML = images.join("");
  renderMeme();
}
