const burgerButtom = document.querySelector(".navigation-card__button");
const burgerMenu = document.querySelector(".navigation-card__burger");
const closeButton = document.querySelector(".navigation-card__close-button");

burgerButtom.addEventListener('click', function() {
    burgerMenu.classList.toggle('navigation-card__burger_opened');
    burgerButtom.classList.toggle('navigation-card__button_closed');
})

closeButton.addEventListener('click', function() {
    burgerButtom.classList.toggle('navigation-card__button_closed');
    burgerMenu.classList.toggle('navigation-card__burger_opened');
})