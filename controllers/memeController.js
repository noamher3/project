"use strict";

var gImgs = [
  { id: 1, url: "imgs/1.jpg", keywords: ["funny", "cat"] },
  {
    id: 2,
    url: "imgs/2.jpg",
    keywords: ["funny", "cat"],
  },
];

var gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 };

function onSetLineTxt(txt) {
  setLineTxt(txt);
  renderMeme();
}

function renderMeme() {
  const elCanvas = document.querySelector(".meme-canvas");
  const ctx = elCanvas.getContext("2d");
  const meme = getMeme();

  const elImg = new Image();
  elImg.src = gImgs.find((img) => img.id === meme.selectedImgId).url;
  elImg.onload = () => {
    ctx.drawImage(elImg, 0, 0, elCanvas.width, elCanvas.height);
    ctx.textAlign = "center";
    for (let i = 0; i < meme.lines.length; i++) {
      const txtObject = meme.lines[i];
      ctx.font = `${txtObject.size}px serif`;
      ctx.fillStyle = txtObject.color;
      ctx.fillText(
        txtObject.txt,
        elCanvas.width * 0.5,
        txtObject.size * (i + 1)
      );
    }
  };
}

function downloadImg(elLink) {
  const elCanvas = document.querySelector(".meme-canvas");
  const imgContent = elCanvas.toDataURL("image/jpeg");
  elLink.href = imgContent;
  elLink.download = "amazingFile.jpeg";
  link.click();
}
