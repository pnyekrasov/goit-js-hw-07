import { galleryItems } from './gallery-items.js';
// Change code below this line
const boxPicturesEl = document.querySelector('.gallery');

const galleryPicturesEls = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item"><a class="gallery__link" href="original">
<img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></li>`);

boxPicturesEl.insertAdjacentHTML('beforeEnd', galleryPicturesEls.join(''));

boxPicturesEl.addEventListener('click', handlerOpenOriginal);

function handlerOpenOriginal(e) {e.preventDefault();
    const instance = basicLightbox.create(e.target.dataset.source);
instance.show();
}

