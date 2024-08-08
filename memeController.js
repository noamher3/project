// "use strict";

// var gImgs = [
//   { id: 1, url: "img/1.jpg", keywords: ["funny", "cat"] },
//   {
//     id: 2,
//     url: "img/1.jpg",
//     keywords: ["funny", "cat"],
//   },
// ];

// var gMeme = {
//   selectedImgId: 5,
//   selectedLineIdx: 0,
//   lines: [{ txt: "I sometimes eat Falafel", size: 20, color: "red" }],
// };

// var gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 };

// function renderMeme() {
//   const elCanvas = document.querySelector(".meme-canvas");
//   const ctx = elCanvas.getContext("2d");

//   const elImg = new Image();
//   elImg.src = "imgs/1.jpg";
//   elImg.onload = () => {
//     ctx.drawImage(elImg, 0, 0, elCanvas.width, elCanvas.height);
//   };
// }
