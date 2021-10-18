
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

/*функция открыттия попапа*/
function openPopup(popup) {
  popup.classList.toggle('map__popup_opened');
}

/*открытие попапа с адресом*/
pinOne.addEventListener('click', () => {
  openPopup(adressPopup);
});
pinTwo.addEventListener('click', () => {
  openPopup(adressPopup);
});

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
      if(animatedItemHeight > window.innerHeight) {
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
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }
  animOnScroll();
}


