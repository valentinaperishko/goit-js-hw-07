import { galleryItems } from "./gallery-items.js";
console.log(galleryItems);

const list = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ original, preview, description }) => `<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`
  )
  .join("");

list.insertAdjacentHTML("beforeend", markup);
list.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const cardUrl = evt.target.dataset.source;
  const instance = basicLightbox.create(`
  <img src="${cardUrl}">
`);
  instance.show();

  if (instance.show()) {
    evt.currentTarget.addEventListener("keydown", (evt) =>
      evt.key === "Escape" ? instance.close() : false
    );
  }
}
