var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grid: {
    rows: 1,
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is <= 767px (mobile devices)
    767: {
      slidesPerView: 3,
    },
  },
});