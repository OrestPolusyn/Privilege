"use strict";
"use strict";
'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

document.addEventListener('DOMContentLoaded', function () {
  var swiperHero = new Swiper('.swiper-slider', {
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    calculateHeight: true,
    speed: 500,
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    loop: true,
    autoplay: 500,
    autoplayDisableOnInteraction: true
  });
  var swiperCatalog = new Swiper('.catalog-swiper', {
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerGroup: 1
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 2
      },
      576: {
        slidesPerView: 3,
        spaceBetween: 90,
        slidesPerGroup: 3
      }
    }
  });
  var galleryPreview = new Swiper('.gallery-preview', _defineProperty({
    slidesPerView: 1,
    loop: true,
    loopedSlides: 10,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    preloadImages: false,
    lazy: true
  }, "loop", true));
  var galleryThumbs = new Swiper('.gallery-thumbs', _defineProperty({
    autoHeight: true,
    slidesPerView: 4,
    slideToClickedSlide: true,
    spaceBetween: 10,
    loopedSlides: 10,
    loop: true,
    direction: 'vertical',
    preloadImages: false,
    lazy: true
  }, "loop", true));
  galleryPreview.controller.control = galleryThumbs;
  galleryThumbs.controller.control = galleryPreview;
  var tab, tabContent;

  window.onload = function () {
    tabContent = document.getElementsByClassName('designers__tab');
    tab = document.getElementsByClassName('designers-aside__item');
    hideTabsContent(1);
  };

  var designersTab = document.querySelector('.designers-aside__list');

  if (designersTab !== null) {
    designersTab.addEventListener('click', function (event) {
      var target = event.target;

      if (target.className == 'designers-aside__item') {
        for (var i = 0; i < tab.length; i++) {
          if (target == tab[i]) {
            showTabsContent(i);
            break;
          }
        }
      }
    });
  }

  function hideTabsContent(a) {
    for (var i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('active');
      tab[i].classList.remove('designers-aside__item--active');
    }
  }

  function showTabsContent(b) {
    if (tabContent[b].className == 'designers__tab') {
      hideTabsContent(0);
      tab[b].classList.add('designers-aside__item--active');
      tabContent[b].classList.add('active');
    }
  }

  var designersSec = document.querySelector('.designers'),
      popupClose = document.querySelector('.popup');

  if (designersSec) {
    window.addEventListener('scroll', function (e) {
      e.preventDefault();

      if (window.pageYOffset > designersSec.offsetTop - 100 && !popupClose.classList.contains('popup--close')) {
        document.querySelector('.popup').classList.add('popup--active');
      }
    });
    popupClose.addEventListener('click', function (e) {
      if (e.target.classList.contains('subscribe__close')) {
        popupClose.classList.remove('popup--active');
        popupClose.classList.add('popup--close');
      }
    });
  }

  var filtersBtn = document.querySelector('.filters__btn'),
      filtersClose = document.querySelector('.sidebar__close');

  if (filtersBtn !== null && filtersClose) {
    filtersBtn.addEventListener('click', function () {
      document.querySelector('.sidebar').classList.add('sidebar-active');
      document.querySelector('body').style.height = 'auto';
    });
    filtersClose.addEventListener('click', function () {
      document.querySelector('.sidebar').classList.remove('sidebar-active');
      document.querySelector('body').style.height = '100%';
    });
  }

  var paginationBtn = document.querySelectorAll('.pagination__item');
  paginationBtn.forEach(function (item) {
    item.addEventListener('click', function (e) {
      paginationBtn.forEach(function (el) {
        el.classList.remove('active');
      });
      item.classList.add('active');
    });
  });
  var rangeSlider = document.querySelector('.filter-price__slider');

  if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
      start: [20, 5000],
      behaviour: 'tap',
      connect: true,
      step: 1,
      range: {
        'min': [0],
        'max': [10000]
      },
      format: wNumb({
        decimals: 3,
        thousand: '.',
        prefix: '$'
      })
    });
    var input0 = document.getElementById('price-from');
    var input1 = document.getElementById('price-to');
    var inputs = [input0, input1];
    rangeSlider.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = values[handle];
    });

    var setRangeSlider = function setRangeSlider(i, value) {
      var arr = [null, null];
      arr[i] = value;
      rangeSlider.noUiSlider.set(arr);
    };

    inputs.forEach(function (el, index) {
      el.addEventListener('change', function (e) {
        setRangeSlider(index, e.currentTarget.value);
      });
    });
  }

  var sidebarItem = document.querySelectorAll('.accordion__item');
  sidebarItem.forEach(function (item) {
    item.addEventListener('click', function (e) {
      var self = e.currentTarget,
          controlItem = self.querySelector('.accordion__name'),
          contentItem = self.querySelector('.accordion__filter, .accordion__content ');
      e.target.classList.toggle('accordion-active');

      if (controlItem.classList.contains('accordion-active')) {
        contentItem.style.maxHeight = contentItem.scrollHeight + 'px';
      } else {
        contentItem.style.maxHeight = null;
      }
    });
  });
  var elementChoice = document.querySelectorAll('.js-choice');
  elementChoice.forEach(function (el) {
    var choicesNum = new Choices(el, {
      searchEnabled: false,
      itemSelectText: ''
    });
  });
  var searchLine = document.querySelector('.search'),
      menuHeaderSearch = document.querySelector('.header__nav');
  window.addEventListener('click', function (e) {
    if (e.target.classList.contains('search__header')) {
      menuHeaderSearch.classList.add('header__nav--active');
    }

    if (e.target.classList.contains('search__close')) {
      menuHeaderSearch.classList.remove('header__nav--active');
    }
  });
  var burger = document.querySelector('.burger'),
      menuMobile = document.querySelector('.header__menu');
  burger.addEventListener('click', function (e) {
    e.currentTarget.classList.toggle('burger--active');
    menuMobile.classList.toggle('header__menu--active');
  });
  var headerTop = document.querySelector('.header'),
      scrollPrev = 0;
  window.addEventListener('scroll', function () {
    var windowScrolled = window.pageYOffset,
        headerScroll = headerTop.offsetHeight;

    if (windowScrolled > headerScroll && windowScrolled > scrollPrev) {
      headerTop.classList.add('out');
    } else {
      headerTop.classList.remove('out');
    }

    if (windowScrolled > headerScroll) {
      headerTop.classList.add('header__shadow');
    } else {
      headerTop.classList.remove('header__shadow');
    }

    scrollPrev = windowScrolled;
  });

  if (designersTab === null) {
    galleryThumbs.update();
  }
});
//# sourceMappingURL=main.js.map
