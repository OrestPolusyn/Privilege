"use strict";
"use strict";
'use strict';

var swiper = new Swiper('.swiper-slider', {
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  effect: 'fade',
  autoplay: 2000,
  autoplayDisableOnInteraction: false,
  slidesPerView: 1
});
var designersBtn = document.querySelectorAll('.designers-aside__item');
designersBtn.forEach(function (item) {
  item.addEventListener('click', function (e) {
    designersBtn.forEach(function (el) {
      el.classList.remove("designers-aside__item--active");
    });
    this.classList.add("designers-aside__item--active");
  });
});
//# sourceMappingURL=main.js.map
