let galleryPreviewConfig = {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  preloadImages: false,
  lazy: true,
  loop: true,
};

let galleryThumbsConfig = {
  autoHeight: true,
  slidesPerView: 4,
  slideToClickedSlide: true,
  spaceBetween: 30,
  loop: true,
  direction: 'vertical',
  preloadImages: false,
  lazy: true,
  loop: true,
  preloadImages: false,
  lazyLoading: true,
  lazy: {
    loadPrevNext: true,
  }
}
