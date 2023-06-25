import { galleryItems } from './gallery-items.js';
import * as basicLightbox from 'basiclightbox';

const gallery = document.querySelector('.gallery');
let currentInstance = null;

const createGalleryItem = ({ preview, original, description }) => {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `;
};

const galleryMarkup = galleryItems
  .map(createGalleryItem)
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

gallery.addEventListener('click', (event) => {
  event.preventDefault();

  const target = event.target;

  if (target.classList.contains('gallery__image')) {
    const { source, alt } = target.dataset;

    currentInstance = basicLightbox.create(`
      <img src="${source}" alt="${alt}" />
    `);

    currentInstance.show();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && currentInstance) {
    currentInstance.close();
    currentInstance = null;
  }
});
