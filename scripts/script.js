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

// /*Слайдер*/
setSlider(document.querySelector(".partners__slider_item:nth-child(2)"),
    document.querySelectorAll(".partners__slider_item"),
    document.querySelector(".partners__slider_items"),
    document.querySelector(".partners__slider_button_left"),
    document.querySelector(".partners__slider_button_right"),
    document.querySelectorAll(".partners__handler"));

setSlider(document.querySelector(".projects__slider_item:nth-child(2)"),
    document.querySelectorAll(".projects__slider_item"),
    document.querySelector(".projects__slider_items"),
    document.querySelector(".projects__slider_button_left"),
    document.querySelector(".projects__slider_button_right"),
    document.querySelectorAll(".projects__handler"));

// Бургер меню
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


{
    const sliders = document.querySelectorAll(".intro__slider");
    // interval between switching images
    // can't be less than your animation duration in css!
    const interval = 5000;
    // if you don't want to first animation last longer than other animations  
    // set animDuration (in miliseconds) to your value of animation duration in css
    const animDuration = 1000;
  
    for (let i = 0; i < sliders.length; ++i) {
      const slider = sliders[i];
      const dots = slider.querySelector(".intro__slider_dots");
      const sliderImgs = slider.querySelectorAll(".intro__slider_img");
  
      let currImg = 0;
      let prevImg = sliderImgs.length - 1;
      let intrvl;
      let timeout;
  
      // Creates dots and add listeners to them
      for (let i = 0; i < sliderImgs.length; ++i) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dots.appendChild(dot);
        dot.addEventListener("click", dotClick.bind(null, i), false);
    }

    const allDots = dots.querySelectorAll(".dot");
    allDots[0].classList.add("active-dot");

    sliderImgs[0].style.left = "0";
    timeout = setTimeout(() => {
        animateSlider();
        sliderImgs[0].style.left = "";
        intrvl = setInterval(animateSlider, interval);
    }, interval - animDuration);

    /**
     * Animates images
     * @param {number} [nextImg] - index of next image to show
     * @param {boolean} [right = false] - animate to right
     */
    function animateSlider(nextImg, right) {
        if (!nextImg)
            nextImg = currImg + 1 < sliderImgs.length ? currImg + 2 : 1;

        --nextImg;
        sliderImgs[prevImg].style.animationName = "";

        if (!right) {
            sliderImgs[nextImg].style.animationName = "leftNext";
            sliderImgs[currImg].style.animationName = "leftCurr";
        } else {
            sliderImgs[nextImg].style.animationName = "rightNext";
            sliderImgs[currImg].style.animationName = "rightCurr";
        }

        prevImg = currImg;
        currImg = nextImg;

        currDot = allDots[currImg];
        currDot.classList.add("active-dot");
        prevDot = allDots[prevImg];
        prevDot.classList.remove("active-dot");
    }

    /**
     * Decides if animate to left or right and highlights clicked dot
     * @param {number} num - index of clicked dot
     */
    function dotClick(num) {
        if (num == currImg)
            return false;

        clearTimeout(timeout);
        clearInterval(intrvl);

        if (num > currImg)
            animateSlider(num + 1);
        else
            animateSlider(num + 1, true);

        intrvl = setInterval(animateSlider, interval);
    }
}
}