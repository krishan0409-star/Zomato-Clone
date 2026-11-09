document.addEventListener('DOMContentLoaded', () => {
    // 1. Interactive Search Input (Triggers search on Enter key press)
    const searchInput = document.querySelector('main section input');

    if (searchInput) {
        searchInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                const query = searchInput.value.trim();
                if (query) {
                    alert(`Searching for: ${query}`);
                    // Add your redirection or API fetch logic here:
                    // window.location.href = `/search?q=${encodeURIComponent(query)}`;
                } else {
                    alert('Please enter a restaurant, cuisine, or dish name.');
                }
            }
        });
    }

    // 2. Dynamic Header Background toggle on Scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = '#e23744';
            header.style.position = 'fixed';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
        } else {
            header.style.background = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent)';
            header.style.position = 'absolute';
            header.style.boxShadow = 'none';
        }
    });
});