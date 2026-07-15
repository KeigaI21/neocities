const imageCards = document.getElementsByClassName("image-card");
var currentCard = 0;
function nextImage() {
    /* Ensures cards loop back to start */
    var nextCard = (currentCard + 1) % imageCards.length;
    imageCards[currentCard].style.display = "none";
    imageCards[nextCard].style.display = "flex";
    currentCard = nextCard;
    // shownImage = next in array or loop back
    // previewPrevious = current
    // previewNext = 2 ahead or loop back
}
function previousImage() {
    var previousCard = (currentCard - 1);
    if(previousCard == -1) {
        previousCard = imageCards.length - 1;
    }
    imageCards[currentCard].style.display = "none";
    imageCards[previousCard].style.display = "flex";
    currentCard = previousCard;
}