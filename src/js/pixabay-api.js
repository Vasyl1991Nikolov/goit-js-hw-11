const API_KEY = '46051041-cf19ab3ef74349fd60d832ede';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1, perPage = 12) {
    const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch images');
        }
        const data = await response.json();
        return data.hits;
    } catch (error) {
        console.error('Error fetching images:', error);
        throw error;
    }
}
