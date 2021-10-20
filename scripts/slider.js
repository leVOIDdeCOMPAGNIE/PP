/*Слайдер*/
function setSlider (sectionSlide, sectionSlides, sectionContainer, sectionArrowLeft, sectionArrowRight, sectionDots) {

  let currentPositionOfScroll = 0;
  let newPositionOfScroll = 0;
  const slide = sectionSlide;
  const slides = sectionSlides;
  const sliderContainer = sectionContainer;
  const sliderArrowLeft = sectionArrowLeft;
  const sliderArrowRight = sectionArrowRight;
  const dots = sectionDots;
  
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

  const getVisibleNumberOfSlides = () => {
    const containerWidth = sliderContainer.clientWidth;
    const slideWithMargin = getWidthSlideWithMargin();
  
    const visibleNumberOfSlides = Math.ceil(containerWidth / slideWithMargin);
    return visibleNumberOfSlides;
  }
    
  for (let i = 0; i < getVisibleNumberOfSlides(); i++) {
    dots[i].classList.add('slider__handler_last-visible');   
  }

  const changeDotsColor = (newPositionOfScroll) => {
    newPositionOfScroll = getNewPositionOfScrollRight();
    slideWithMarginWidth = getWidthSlideWithMargin();
    const slidesWasShown = Math.ceil(currentPositionOfScroll/slideWithMarginWidth);
    if (currentPositionOfScroll === 0 && (currentPositionOfScroll + slideWithMarginWidth) === newPositionOfScroll) {
      for (let i = getVisibleNumberOfSlides(); i < dots.length; i++) {
        dots[i].classList.remove('slider__handler_last-visible');
      } 
    } else {
      for (let i = 0; i < getVisibleNumberOfSlides() + slidesWasShown; i++) {
        dots[i].classList.add('slider__handler_last-visible');
      }
      for (let i = getVisibleNumberOfSlides() + slidesWasShown; i < dots.length; i++) {
        dots[i].classList.remove('slider__handler_last-visible');
      }
    }
    
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

    changeDotsColor(newPositionOfScroll);
  
  }
  
  const scrollLeft = () => {
    newPositionOfScroll = getNewPositionOfScrollLeft();
  
    scrollSlider(newPositionOfScroll);
    
    console.log(newPositionOfScroll);

    changeDotsColor(newPositionOfScroll);
  }
  
  sliderArrowLeft.addEventListener("click", scrollLeft);
  sliderArrowRight.addEventListener("click", scrollRight); 

  } 