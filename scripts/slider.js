/*Слайдер*/
function setSlider (sectionSlide, sectionSlides, sectionContainer, sectionArrowLeft, sectionArrowRight) {

  let currentPositionOfScroll = 0;
  let newPositionOfScroll = 0;
  const slide = sectionSlide;
  const slides = sectionSlides;
  const sliderContainer = sectionContainer;
  const sliderContainerChild = sectionContainer.children;
  const sliderArrowLeft = sectionArrowLeft;
  const sliderArrowRight = sectionArrowRight;
  
  const getMarginRightOfElement = () => {
    const slideMargin = window.getComputedStyle(slide).marginLeft;
    const slideMarginWidth = parseInt(slideMargin.slice(0, -2))-1;
  
    return slideMarginWidth;
  } 
  
  const getWidthSlideWithMargin = () => {  
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
    const slideWithMarginWidth = getWidthSlideWithMargin();
    const positionOfScrollBeforeLastSlide = endPositionOfScroll - slideWithMarginWidth;
  
  
    if (currentPositionOfScroll <= positionOfScrollBeforeLastSlide) {
      newPositionOfScroll = currentPositionOfScroll + slideWithMarginWidth;
    }
    else if (currentPositionOfScroll === endPositionOfScroll) {
      newPositionOfScroll = 0;
    }
    else {
      newPositionOfScroll = endPositionOfScroll;
    }
  
    return newPositionOfScroll;
  }
  
  const getNewPositionOfScrollLeft = () => {
    const endPositionOfScroll = getEndPositionOfScroll();
    const slideWithMarginWidth = getWidthSlideWithMargin();
  
    if (currentPositionOfScroll > slideWithMarginWidth) {
      newPositionOfScroll = currentPositionOfScroll - slideWithMarginWidth;
    }
    else if (currentPositionOfScroll === 0) {
      newPositionOfScroll = endPositionOfScroll;
    }
    else {
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

  const getVisibleNumberOfSlides = () => {
    const containerWidth = sliderContainer.clientWidth;
    const slideWithMargin = getWidthSlideWithMargin();
  
    const visibleNumberOfSlides = Math.ceil(containerWidth / slideWithMargin);
    return visibleNumberOfSlides;
  }
  
  console.log(getVisibleNumberOfSlides());
  
  }
  
  setSlider (document.querySelector(".partners__slider_item:nth-child(2)"),
  document.querySelectorAll(".partners__slider_item"),
  document.querySelector(".partners__slider_items"),
  document.querySelector(".partners__slider_button_left"),
  document.querySelector(".partners__slider_button_right"));
  
  setSlider (document.querySelector(".projects__slider_item:nth-child(2)"),
  document.querySelectorAll(".projects__slider_item"),
  document.querySelector(".projects__slider_items"),
  document.querySelector(".projects__slider_button_left"),
  document.querySelector(".projects__slider_button_right"));