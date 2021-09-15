const catalogSliderConfig = {
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    425: {
      slidesPerView: 2,
      spaceBetween: 22,
      slidesPerGroup: 2,
    },
    576: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 22,

    },
    768: {
      slidesPerView: 4,
      spaceBetween: 22,
      slidesPerGroup: 4,
    },
    980: {
      slidesPerView: 4,
      spaceBetween: 22,
      slidesPerGroup: 4,
    },
    1080: {
      slidesPerView: 5,
      spaceBetween: 22,
      slidesPerGroup: 5,
    }
  }
}