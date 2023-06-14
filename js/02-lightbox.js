import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', handlerLightbox);
function handlerLightbox() {
    console.log(lightbox)
};
