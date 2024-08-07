"use strict";

var gMeme = {
  selectedImgId: 1,
  selectedLineIdx: -1,
  lines: [
    { txt: "Text line", size: 48, color: "#ff0000" },
    { txt: "I sometimes eat Falafel", size: 48, color: "#ff0000" },
  ],
};

function getMeme() {
  return gMeme;
}

function setLineTxt(txt) {
  gMeme.lines[gMeme.selectedLineIdx].txt = txt;
}

function setImg(id) {
  gMeme.selectedImgId = id;
}

function setColorText(value) {
  gMeme.lines[gMeme.selectedLineIdx].color = value;
}

function setSizeText(value) {
  value === "+"
    ? (gMeme.lines[gMeme.selectedLineIdx].size += 2)
    : (gMeme.lines[gMeme.selectedLineIdx].size -= 2);
}

function addLine() {
  gMeme.lines.push({ txt: "Text line", size: 48, color: "green" });
}

function switchLine() {
  gMeme.selectedLineIdx = (gMeme.selectedLineIdx + 1) % gMeme.lines.length;
}

function saveLinePosition(i, x, y) {
  gMeme.lines[i].x = x;
  gMeme.lines[i].y = y;
}

function setSelectedLine(line) {
  gMeme.selectedLineIdx = gMeme.lines.findIndex((l) => l === line);
}

function setFontSelected(value) {
  if (gMeme.selectedLineIdx === -1) return;
  gMeme.lines[gMeme.selectedLineIdx].font = value;
}

function setAlignFont(value) {
  gMeme.lines[gMeme.selectedLineIdx].alignment = value;
}

function inputTextSize(value) {
  gMeme.lines[gMeme.selectedLineIdx].size = value;
}

function arrowClick(value) {
  value === "+"
    ? (gMeme.lines[gMeme.selectedLineIdx].y += 5)
    : (gMeme.lines[gMeme.selectedLineIdx].y -= 5);
}
