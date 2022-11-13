import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const galleryCard = creatGalleryItemCard(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryCard);

function creatGalleryItemCard(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`;
    })
    .join(" ");
}

const gallery = new SimpleLightbox(".gallery a");
gallery.on("show.simplelightbox", function () {
  sourceAttr: "href";
  captionType: "attr";
  captionsData: "alt";
  captionPosition: "bottom";
  captionDelay: 250;
});

// console.log(galleryItems);
