let galleryPreview = new Swiper('.gallery__preview', {
  slidesPerView: 1,
  loop: true,
  loopedSlides: 10,
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
});

let galleryThumbs = new Swiper('.gallery__thumbs', {
  autoHeight: true,
  slidesPerView: 4,
  slideToClickedSlide: true,
  spaceBetween: 30,
  loopedSlides: 30,
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
});

galleryPreview.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryPreview;

if (document.querySelector('.gallery__thumbs')) {
  galleryThumbs.update();
  console.log(document.querySelector('.gallery__thumbs'));
}

