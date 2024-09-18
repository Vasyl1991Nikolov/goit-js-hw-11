// pixabay-api.js

const API_KEY = 'u_sgt8bzrowp'; // Замініть на ваш унікальний ключ API
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1) {
    const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.hits; // Повертаємо масив результатів
    } catch (error) {
        console.error('Error fetching images:', error);
        throw error;
    }
}
