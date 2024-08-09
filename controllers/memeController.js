"use strict";

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
    for (let i = 0; i < meme.lines.length; i++) {
      const txtObject = meme.lines[i];
      ctx.textAlign = txtObject.alignment ?? "center";
      if (txtObject.x === undefined) {
        saveLinePosition(i, 0, txtObject.size * i);
      }
      if (i === meme.selectedLineIdx) {
        ctx.strokeStyle = "white";

        ctx.strokeRect(0, txtObject.y + 8, elCanvas.width, txtObject.size);
      }
      ctx.font = `${txtObject.size}px ${txtObject.font ?? "serif"}`;
      ctx.fillStyle = txtObject.color;
      ctx.fillText(
        txtObject.txt,
        elCanvas.width * 0.5,
        txtObject.y + txtObject.size
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

function onSetColorText(value) {
  setColorText(value);
  renderMeme();
}

function onSetSizeText(value) {
  setSizeText(value);
  renderMeme();
}

function onAddLine() {
  addLine();
  renderMeme();
}

function onSwitchLine() {
  switchLine();
  renderMeme();
}

function onCanvasClick(event) {
  const elCanvas = document.querySelector(".meme-canvas");
  const meme = getMeme();
  const lineClicked = meme.lines.find(
    (line) =>
      event.offsetX >= line.x &&
      event.offsetX <= line.x + elCanvas.width &&
      event.offsetY >= line.y &&
      event.offsetY <= line.y + line.size
  );
  const textInput = document.querySelector(".text-input");
  const colorInput = document.querySelector(".color-input");
  const fontSelect = document.querySelector(".font-family-button");
  const inputFontSize = document.querySelector(".input-font-size");
  if (lineClicked) {
    setSelectedLine(lineClicked);
    textInput.value = lineClicked.txt;
    colorInput.value = lineClicked.color;
    fontSelect.value = lineClicked.font ?? "serif";
    inputFontSize.value = lineClicked.size;
  } else {
    setSelectedLine(null);
    document.querySelector(".control-panel").reset();
  }
  renderMeme();
}

function onFontSelected(value) {
  setFontSelected(value);
  renderMeme();
}

function onAlignFont(value) {
  setAlignFont(value);
  renderMeme();
}

function onInputTextSize(value) {
  inputTextSize(value);
  renderMeme();
}

function onArrowClick(value) {
  arrowClick(value);
  renderMeme();
}

function onClearTextInput() {
  clearTextInput();
  renderMeme();
}

function onSaveToStorageGallery() {
  saveToStorageGallery();
}

function renderMemeGallery() {
  const memes = getAllMemesFromStorageGallery();
  const elGallery = document.querySelector(".memes-gallery");
  const memesToShow = memes.map((meme) => {
    const elCanvas = document.createElement("canvas");
    elCanvas.onclick = () => {
      setCurrentMeme(meme);
      renderMeme();
    };
    elCanvas.height = 450;
    elCanvas.width = 450;
    const ctx = elCanvas.getContext("2d");
    const elImg = new Image();
    elImg.src = gImgs.find((img) => img.id === meme.selectedImgId).url;
    elImg.onload = () => {
      ctx.drawImage(elImg, 0, 0, elCanvas.width, elCanvas.height);
      for (let i = 0; i < meme.lines.length; i++) {
        const txtObject = meme.lines[i];
        ctx.textAlign = txtObject.alignment ?? "center";
        ctx.font = `${txtObject.size}px ${txtObject.font ?? "serif"}`;
        ctx.fillStyle = txtObject.color;
        ctx.fillText(
          txtObject.txt,
          elCanvas.width * 0.5,
          txtObject.y + txtObject.size
        );
      }
    };
    elCanvas.style.scale = (0.5, 0.5);
    elCanvas.style.margin = 0;
    elCanvas.style.padding = 0;
    elCanvas.className = "saved-meme";
    return elCanvas;
  });

  elGallery?.append(...memesToShow);
}
