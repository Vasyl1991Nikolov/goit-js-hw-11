// main.js

import { fetchImages } from './pixabay-api.js';
import { renderImage, clearGallery } from './render-functions.js';
import iziToast from 'izitoast/dist/js/iziToast.min.js';  // Імпорт iziToast JS
import 'izitoast/dist/css/iziToast.min.css';  // Імпорт iziToast CSS

const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const query = searchInput.value.trim();
    
    if (query === '') {
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search term!',
            position: 'topRight'
        });
        return;
    }
    
    clearGallery();
    
    try {
        const images = await fetchImages(query);
        
        if (images.length === 0) {
            iziToast.warning({
                title: 'No Results',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight'
            });
        } else {
            images.forEach(renderImage);
        }
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: 'An error occurred while fetching images.',
            position: 'topRight'
        });
    }
});
