'use strict';

const swiper = new Swiper('.swiper-slider', {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: 'fade',
  autoplay: 2000,
  autoplayDisableOnInteraction: false,
  slidesPerView: 1
});

const designersBtn = document.querySelectorAll('.designers-aside__item');

designersBtn.forEach(item => {
  item.addEventListener('click', function (e) {
    designersBtn.forEach(el => {
      el.classList.remove("designers-aside__item--active");
    });
    this.classList.add("designers-aside__item--active");
  });
});