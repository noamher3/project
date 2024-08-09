function onInit(page) {
  switch (page) {
    case "saved-memes":
      renderGallery();
      renderMemeGallery();
      break;
    case "gallery":
      renderGallery();
      break;
    case "memes-editor":
      renderGallery();
      renderMeme();
      renderMemeGallery();
      break;
    default:
      break;
  }
}
