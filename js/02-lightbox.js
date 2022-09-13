import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
  gallery: document.querySelector(".gallery"),
};

const galleryItemMarkup = makeGalleryItemMarkup(galleryItems).join("");

function makeGalleryItemMarkup(galleryItems = {}) {
  return galleryItems.map(({ description, original, preview }) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" loading="lazy" src="${preview}" alt="${description}" />
</a>`;
  });
}

refs.gallery.innerHTML = galleryItemMarkup;

// refs.gallery.addEventListener("click", onOpenModal);

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
