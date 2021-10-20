const buttonPageUp = document.querySelector('.img-up');

buttonPageUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const region = document.querySelector('.map__region');
const pinOne = document.getElementById('pin-1');
const pinTwo = document.getElementById('pin-2');

const adressPopup = document.querySelector('.map__popup');

/*функция открыттия/закрытия попапа*/
function openPopup(popup) {
    popup.classList.toggle('map__popup_opened');
    window.addEventListener('resize', () => {
        if (document.documentElement.clientWidth < 640) {
            popup.classList.remove('map__popup_opened');
        }
    });
}


/*открытие попапа с адресом*/
pinOne.addEventListener('click', () => {
    openPopup(adressPopup);
});
pinTwo.addEventListener('click', () => {
    openPopup(adressPopup);
});



/*изменение контента блока map для тачей*/


/*смена цвета региона*/
// region.onmouseover = function (event) {
//   let target = event.target;
//   target.setAttribute('fill', '#6D097A');
// };

// region.onmouseout = function (event) {
//   let target = event.target;
//   target.setAttribute('fill', '#9A34A8');
// };

// pin.onmouseover = function (event) {
//   let target = event.target;
//   target.setAttribute('fill', '#6D097A');
// };

// pin.onmouseout = function () {
//   region.setAttribute('fill', '#9A34A8');
// };

/*Анимация паззлов при скролле, появление на странице*/
const animatedItems = document.querySelectorAll('.animated');
if (animatedItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll() {
        for (let index = 0; index < animatedItems.length; index++) {
            const animatedItem = animatedItems[index];
            const animatedItemHeight = animatedItem.offsetHeight;
            const animatedItemOffset = offset(animatedItem).top;
            const animStart = 2;

            let animItemPoint = window.innerHeight - animatedItemHeight / animStart;
            if (animatedItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animatedItemOffset - animItemPoint) && pageYOffset < (animatedItemOffset + animatedItemHeight)) {
                animatedItem.classList.add('animated');
            } else {
                animatedItem.classList.remove('animated');
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    animOnScroll();
}

/*Слайдер*/
function setSlider(sectionSlide, sectionSlides, sectionContainer, sectionArrowLeft, sectionArrowRight) {

    let currentPositionOfScroll = 0;
    let newPositionOfScroll = 0;
    const slide = sectionSlide;
    const slides = sectionSlides;
    const sliderContainer = sectionContainer;
    const sliderArrowLeft = sectionArrowLeft;
    const sliderArrowRight = sectionArrowRight;

    const getMarginRightOfElement = () => {
        const slideMargin = window.getComputedStyle(slide).marginRight;
        const slideMarginWidth = parseInt(slideMargin.slice(0, -2));

        return slideMarginWidth;
    }

    const getWidthSlideWithMatgin = () => {
        const slideWidth = slide.clientWidth;
        const slideMargin = getMarginRightOfElement(slide);

        const slideWithMarginWidth = slideWidth + slideMargin;

        return slideWithMarginWidth;
    }

    const getSliderContentWidth = () => {
        const slideWidth = slide.clientWidth;
        const countOfSlides = slides.length;
        const slideMarginWidth = getMarginRightOfElement(slide);

        const sliderContentWidth = (slideWidth + slideMarginWidth) * countOfSlides - slideMarginWidth;

        return sliderContentWidth;
    }

    const getEndPositionOfScroll = () => {
        const sliderContentWidth = getSliderContentWidth();

        const endPositionOfScroll = sliderContentWidth - sliderContainer.clientWidth;

        return endPositionOfScroll;
    }

    const getNewPositionOfScrollRight = () => {
        const endPositionOfScroll = getEndPositionOfScroll();
        const slideWithMarginWidth = getWidthSlideWithMatgin();
        const positionOfScrollBeforeLastSlide = endPositionOfScroll - slideWithMarginWidth;


        if (currentPositionOfScroll <= positionOfScrollBeforeLastSlide) {
            newPositionOfScroll = currentPositionOfScroll + slideWithMarginWidth;
        } else if (currentPositionOfScroll === endPositionOfScroll) {
            newPositionOfScroll = 0;
        } else {
            newPositionOfScroll = endPositionOfScroll;
        }

        return newPositionOfScroll;
    }

    const getNewPositionOfScrollLeft = () => {
        const endPositionOfScroll = getEndPositionOfScroll();
        const slideWithMarginWidth = getWidthSlideWithMatgin();

        if (currentPositionOfScroll > slideWithMarginWidth) {
            newPositionOfScroll = currentPositionOfScroll - slideWithMarginWidth;
        } else if (currentPositionOfScroll === 0) {
            newPositionOfScroll = endPositionOfScroll;
        } else {
            newPositionOfScroll = 0;
        }

        return newPositionOfScroll;
    }

    function scrollSlider(positionOfScroll) {
        sliderContainer.scroll({
            left: positionOfScroll,
            behavior: 'smooth'
        });

        currentPositionOfScroll = newPositionOfScroll;
    };

    const scrollRight = () => {
        newPositionOfScroll = getNewPositionOfScrollRight();

        scrollSlider(newPositionOfScroll);
    }

    const scrollLeft = () => {
        newPositionOfScroll = getNewPositionOfScrollLeft();

        scrollSlider(newPositionOfScroll);
    }

    sliderArrowLeft.addEventListener("click", scrollLeft);
    sliderArrowRight.addEventListener("click", scrollRight);

}

setSlider(document.querySelector(".partners__slider_item"),
    document.querySelectorAll(".partners__slider_item"),
    document.querySelector(".partners__slider_items"),
    document.querySelector(".partners__slider_button_left"),
    document.querySelector(".partners__slider_button_right"));

setSlider(document.querySelector(".projects__slider_item"),
    document.querySelectorAll(".projects__slider_item"),
    document.querySelector(".projects__slider_items"),
    document.querySelector(".projects__slider_button_left"),
    document.querySelector(".projects__slider_button_right"));


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