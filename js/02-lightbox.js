const galleryItems = [
  {
    preview: 'small-image.jpg',
    original: 'large-image.jpg',
    description: 'Image description 1',
  },
  {
    preview: 'small-image.jpg',
    original: 'large-image.jpg',
    description: 'Image description 2',
  },
  {
    preview: 'small-image.jpg',
    original: 'large-image.jpg',
    description: 'Image description 3',
  },
];

const gallery = document.querySelector('.gallery');

const createGalleryMarkup = (items) => {
  return items
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
        </li>
      `;
    })
    .join('');
};

gallery.innerHTML = createGalleryMarkup(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250,
});
