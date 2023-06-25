import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';

const gallery = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

const createGalleryItem = ({ preview, original, description }) => {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
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
