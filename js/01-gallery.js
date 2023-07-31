import { galleryItems } from './gallery-items.js';
// Change code below this line
const boxPicturesEl = document.querySelector('.gallery');

const galleryPicturesEls = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item"><a class="gallery__link" href="${original}">
<img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></li>`);

boxPicturesEl.insertAdjacentHTML('beforeend', galleryPicturesEls.join(''));

boxPicturesEl.addEventListener('click', handleOpenOriginal);

function handleOpenOriginal(e) {
    e.preventDefault();
    const originalEl = basicLightbox.create(`<img src="${e.target.dataset.source}" alt="${e.target.description}"/>`);
    originalEl.show();
    
    boxPicturesEl.addEventListener('keydown', handleCloseOriginal);
    function handleCloseOriginal(e) {
    if (e.code === 'Escape') {
        originalEl.close();
                boxPicturesEl.removeEventListener('keydown', handleCloseOriginal);
   
    };
    };
};


