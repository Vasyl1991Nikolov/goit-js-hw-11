export function renderImages(images, container) {
    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <div class="gallery-item">
            <a href="${largeImageURL}" class="gallery-link">
                <img src="${webformatURL}" alt="${tags}" loading="lazy" />
            </a>
            <div class="info">
                <p><strong>Likes:</strong> ${likes}</p>
                <p><strong>Views:</strong> ${views}</p>
                <p><strong>Comments:</strong> ${comments}</p>
                <p><strong>Downloads:</strong> ${downloads}</p>
            </div>
        </div>
    `).join('');

    container.innerHTML += markup;
}

export function clearGallery(container) {
    container.innerHTML = '';
}

export function showLoader() {
    document.getElementById('loader').style.display = 'flex'; // Показуємо індикатор завантаження
}

export function hideLoader() {
    document.getElementById('loader').style.display = 'none'; // Приховуємо індикатор завантаження
}
