document.addEventListener('DOMContentLoaded', () => {
    const affirmationEl = document.getElementById('affirmation');
    const button = document.getElementById('new-quote');

    async function loadQuote() {
        try {
            const response = await fetch('quotes.json');
            const data = await response.json();
            const randomIndex = Math.floor(Math.random() * data.length);
            affirmationEl.textContent = data[randomIndex];
        } catch (err) {
            affirmationEl.textContent = 'Could not load affirmation.';
        }
    }

    button.addEventListener('click', loadQuote);
    loadQuote();
});
