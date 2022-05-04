var cardToFlip = document.querySelectorAll(".card_inner");

    for (var card of cardToFlip){
    card.addEventListener("click", toggleToFlip);
    }

function toggleToFlip() {
    this.classList.toggle("is-flipped");
}

