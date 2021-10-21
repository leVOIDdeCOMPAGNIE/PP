const burgerButton = document.querySelector(".header__burger-button");
const burgerMenu = document.querySelector(".navigation-card__burger");
const closeButton = document.querySelector(".navigation-card__close-button");

burgerButton.addEventListener('click', function() {
    burgerMenu.classList.toggle('navigation-card__burger_opened');
})

closeButton.addEventListener('click', function() {
    burgerMenu.classList.toggle('navigation-card__burger_opened');
})

document.querySelectorAll('.navigation-card__link_burger').forEach(w => {
    w.addEventListener('click', function() {
        burgerMenu.classList.toggle('navigation-card__burger_opened');
    })
})