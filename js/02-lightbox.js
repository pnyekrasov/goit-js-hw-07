import { galleryItems } from './gallery-items.js';
// Change code below this line

const boxPicturesEl = document.querySelector('.gallery');

const galleryPicturesEls = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"/>
  </a>
</li>`);

boxPicturesEl.insertAdjacentHTML('beforeend', galleryPicturesEls.join(''));

const lightboxGalleryEl = new SimpleLightbox('.gallery__item a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 500,
});


