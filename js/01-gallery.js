import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

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

gallery.innerHTML = galleryMarkup;

gallery.addEventListener('click', (event) => {
  event.preventDefault();

  const target = event.target;

  if (target.nodeName !== 'IMG') {
    return
  }

const { source, alt } = target.dataset;

const instance = basicLightbox.create(`
      <img src="${source}" alt="${alt}" />
    `);

const escapeKayPushHendler = (event) => {
    if (event.code === 'Escape') {
        instance.close()
        document.removeEventListener('keydown', escapeKayPushHendler);
    }
}


document.addEventListener('keydown', escapeKayPushHendler);
instance.show();
  
});



