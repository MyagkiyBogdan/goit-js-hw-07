import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const galleryItemsEl = galleryItems
  .map(
    item =>
      `
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
      />
    </a>`
  )

  .join("");

galleryEl.innerHTML = galleryItemsEl;

let gallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionDelay: 250,
});
