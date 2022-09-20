
/// Use latest swiper library for breakpoints feature
var swiper = new Swiper('.swiper-container2', {
  pagination: '.swiper-pagination',
  paginationClickable: true,
  // direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 50,
  autoplay: {
    delay: 3000, //3초
    disableOnInteraction: false,
},

  breakpoints: {
    1024: {
      slidesPerView: 1,
      spaceBetween: 40
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    }
  }
});