import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const galleryItemsEl = galleryItems
  .map(
    item =>
      `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
				loading="lazy"
        class="gallery__image lazyload"
        data-src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>`
  )

  .join("");

galleryEl.innerHTML = galleryItemsEl;

// const galleryLink = document.querySelectorAll(".gallery__link");

// galleryLink.forEach(link => link.addEventListener("click", onClickPreventDefault));

// function onClickPreventDefault(event) {
//   event.preventDefault();
// }

galleryEl.addEventListener("click", onGalleryElementClick);
function onGalleryElementClick(event) {
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  event.preventDefault();
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
`);

  instance.show();
}

if ("loading" in HTMLImageElement.prototype) {
  const lazyImages = document.querySelectorAll("img[loading='lazy']");
  lazyImages.forEach(image => (image.src = image.dataset.src));
} else {
  const lazyLoadScript = document.createElement("script");
  lazyLoadScript.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
  lazyLoadScript.integrity =
    "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==";
  lazyLoadScript.crossorigin = "anonymous";
  lazyLoadScript.referrerpolicy = "no-referrer";

  document.body.append(lazyLoadScript);
}

// !Всем картинкам нужно задавать width и height в html что бы не было прыжков и работала ленивая загрузка
