
const buttonPageUp = document.querySelector('.footer__column_content_up');

buttonPageUp.onmouseover = function (event) {
  event.target.style.fill = '#B5B5B5';
};
buttonPageUp.onmouseout = function (event) {
  event.target.style.fill = '#FEFEFE';
};

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

