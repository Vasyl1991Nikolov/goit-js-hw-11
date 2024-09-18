import { fetchImages } from './js/pixabay-api.js';
import { renderImages, clearGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'loaders.css/loaders.min.css';

const searchForm = document.querySelector('#search-form');
const galleryContainer = document.querySelector('#gallery');
const loadMoreBtn = document.querySelector('#load-more');

let currentPage = 1;
let currentQuery = '';

const lightbox = new SimpleLightbox('.gallery a'); // Ініціалізація lightbox

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = event.target.elements.query.value.trim();

    if (!query) {
        iziToast.error({
            title: 'Error',
            message: 'Search field cannot be empty!',
        });
        return;
    }

    currentQuery = query;
    currentPage = 1;
    clearGallery(galleryContainer);

    try {
        const images = await fetchImages(query, currentPage);
        
        if (images.length === 0) {
            iziToast.warning({
                title: 'No results',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
            return;
        }

        renderImages(images, galleryContainer);
        lightbox.refresh(); // Оновлюємо lightbox після додавання нових зображень
        loadMoreBtn.style.display = 'block';
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: 'Something went wrong while fetching images.',
        });
        console.error('Error:', error);
    }
});

loadMoreBtn.addEventListener('click', async () => {
    currentPage += 1;

    try {
        const images = await fetchImages(currentQuery, currentPage);
        renderImages(images, galleryContainer);
        lightbox.refresh(); // Оновлюємо lightbox після додавання нових зображень
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: 'Failed to load more images.',
        });
        console.error('Error:', error);
    }
});
