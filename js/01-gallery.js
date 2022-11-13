import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const galleryCard = creatGalleryItemCard(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryCard);

function creatGalleryItemCard(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
    </div>`;
    })
    .join(" ");
}

const instance = basicLightbox.create(`
    <div class="modal">
    <img class="modal-img"
      src=" "
    />
    </div>
`);
const modalImg = instance.element().querySelector(".modal-img");

galleryContainer.addEventListener("click", onClickImage);
function onClickImage(evt) {
  evt.preventDefault();
  const originalImgUrl = evt.target.dataset.source;
  modalImg.src = originalImgUrl;
  instance.show();
}

modalImg.addEventListener("click", closeModal);
function closeModal(evt) {
  evt.preventDefault();
  instance.close();
}

document.addEventListener("keydown", closeModalKeyboard);
function closeModalKeyboard(evt) {
  evt.preventDefault();
  if (evt.code === "Escape") {
    instance.close();
  }
  return;
}

console.log(galleryItems);
