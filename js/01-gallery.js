import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
  gallery: document.querySelector(".gallery"),
};

const galleryItemMarkup = makeGalleryItemMarkup(galleryItems).join("");

function makeGalleryItemMarkup(galleryItems = {}) {
  return galleryItems.map(({ description, original, preview }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
    loading="lazy"
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  });
}

refs.gallery.innerHTML = galleryItemMarkup;

refs.gallery.addEventListener("click", onOpenModal);

function onOpenModal(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }

  event.preventDefault();
  window.addEventListener("keydown", escPress);
  const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" width="800" height="600">
  `);

  instance.show();

  function escPress(event) {
    console.log(event.code);
    if (event.code === "Escape") {
      instance.close(window.removeEventListener("keydown", escPress));
    }
    if (!basicLightbox.visible()) {
      window.removeEventListener("keydown", escPress);
    }
  }
}
