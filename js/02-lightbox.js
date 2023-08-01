import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

function renderGallery() {
  const createEl = galleryItems
    .map(
      (item) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>
       </li>
    `,
    )
    .join('');

  gallery.innerHTML = createEl;
}

renderGallery();

function initLightbox() {
  new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });
}

document.addEventListener('DOMContentLoaded', initLightbox);


