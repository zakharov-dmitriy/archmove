$(function () {
   $('.works-slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      centerPadding: '40px',
      prevArrow: '<div class="works-arrow works-arrow__left"><img class="slider-arrows slider-arrows__left" src="images/works-arrow-left.svg" alt=""></div>',
      nextArrow: '<div class="works-arrow works-arrow__right"><img class="slider-arrows slider-arrows__left" src="images/works-arrow-left.svg" alt=""></div>',
      responsive: [
         {
            breakpoint: 480,
            settings: {
               arrows: false,
            }
         },
      ]
   });
   $('.reviews-content').slick({
      infinite: true,
      prevArrow: '<img class="reviews-arrows reviews-arrows__left" src="images/works-arrow-left.svg" alt="">',
      nextArrow: '<img class="reviews-arrows reviews-arrows__right" src="images/works-arrow-left.svg" alt="">',
   });
});
document.querySelector('.burger__btn').addEventListener('click', function () {
   document.querySelector('.menu__list').classList.toggle('menu__list--active');
   document.querySelector('.btn-line').classList.toggle('btn-line--active');
   document.querySelector('body').classList.toggle('lock');
});