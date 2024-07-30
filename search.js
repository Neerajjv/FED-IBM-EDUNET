function highlightCards() {
    // Get all the game cards
    const cards = document.querySelectorAll('.card-recomen-games');

    // Loop through the cards and add a highlight class
    cards.forEach(card => {
        card.classList.toggle('highlight');
    });
}
