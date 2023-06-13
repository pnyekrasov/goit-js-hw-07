import { galleryItems } from './gallery-items.js';
// Change code below this line
const boxPicturesEl = document.querySelector('.gallery');

const galleryPicturesEls = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item"><a class="gallery__link" href="${original}">
<img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></li>`);

boxPicturesEl.insertAdjacentHTML('beforeend', galleryPicturesEls.join(''));

boxPicturesEl.addEventListener('click', handlerOpenOriginal);

function handlerOpenOriginal(e) {e.preventDefault();
    const instance = basicLightbox.create(`<img class="gallery__image" src="${e.target.dataset.source}" alt="${e.target.description}"/>`);
    instance.show();
     document.addEventListener('keydown', handlerCloseOriginal);
}
     
function handlerCloseOriginal(e) {
_close()

    console.log(e);
};

// boxPicturesEl.removeEventListener('keydown', handlerCloseOriginal);
// function handlerCloseOriginal() {
//     if(instance.visible() && )
// };
// const visible = basicLightbox.visible()
// instance.close(() => console.log('lightbox not visible anymore'))
// instance.close()
