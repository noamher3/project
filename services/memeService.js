"use strict";

var gMeme = {
  selectedImgId: 1,
  selectedLineIdx: 0,
  lines: [
    { txt: "Text line", size: 48, color: "red" },
    { txt: "I sometimes eat Falafel", size: 48, color: "red" },
  ],
};

function getMeme() {
  return gMeme;
}

function setLineTxt(txt) {
  gMeme.lines[0].txt = txt;
}

function setImg(id) {
  gMeme.selectedImgId = id;
}
