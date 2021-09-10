"use strict";
"use strict";

var burger = document.querySelector('.burger'),
    menuMobile = document.querySelector('.header__menu');
burger.addEventListener('click', function (e) {
  e.currentTarget.classList.toggle('burger--open');
  menuMobile.classList.toggle('header__menu--open');
  dropdownMenu.classList.remove('header__dropdown--show');
});
"use strict";

var cartPlus = document.querySelectorAll('.plus'),
    cartMinus = document.querySelectorAll('.minus'),
    cartValue = document.querySelectorAll('.cart-product__number');

if (cartPlus && cartMinus && cartValue) {
  cartPlus.forEach(function (e) {
    e.addEventListener('click', function () {
      e.previousElementSibling.value = +e.previousElementSibling.value + 1;
    });
  });
  cartMinus.forEach(function (e) {
    e.addEventListener('click', function () {
      e.nextElementSibling.value = +e.nextElementSibling.value - 1;

      if (e.nextElementSibling.value <= 0) {
        e.nextElementSibling.value = 0;
      }
    });
  });
}

cartValue.forEach(function (el) {
  el.addEventListener('input', function () {
    if (el.value === "" || el.value === String || el.value === 'e') {
      el.value = '';
    }

    el.value = parseInt(el.value, 10);
  });
  el.addEventListener('change', function () {
    if (el.value === "" || el.value === String || el.value === 'e') {
      el.value = 0;
    }
  });
});
"use strict";

var priceTotal = document.querySelector('.price-total span'),
    priceSummaryItem = document.querySelectorAll('.cart__summary-price span'),
    numberItem = document.querySelectorAll('.cart-product__number');
"use strict";

var swiperCatalog = new Swiper('.catalog__swiper', {
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
    425: {
      slidesPerView: 2,
      spaceBetween: 22,
      slidesPerGroup: 2
    },
    576: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 22
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 22,
      slidesPerGroup: 4
    },
    980: {
      slidesPerView: 4,
      spaceBetween: 22,
      slidesPerGroup: 4
    },
    1080: {
      slidesPerView: 5,
      spaceBetween: 22,
      slidesPerGroup: 5
    }
  }
});
"use strict";

var designersLetter = document.querySelectorAll('.designers-page__btn'),
    designersList = document.querySelectorAll('.designers-page__link');
designersLetter.forEach(function (item) {
  item.addEventListener('click', function () {
    var letter = item.textContent.trim().toLowerCase();
    designersList.forEach(function (el) {
      if (!el.innerText.toLowerCase().includes(letter)) {
        el.parentElement.style.display = 'none';
      } else {
        el.parentElement.style.display = 'block';
      }
    });
    designersList.forEach(function (el) {
      if (!parseInt(letter)) {
        var elNumber = parseInt(el.textContent.match(/\d+/));
        console.log(elNumber); // elNumber.parentElement.style.display = 'none'
      } else {
        el.parentElement.style.display = 'block';
      }
    });
  });
});
"use strict";

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
"use strict";

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
"use strict";

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
"use strict";

var itemLink = document.querySelectorAll('.privacy-policy__tab');
document.querySelectorAll('.privacy-policy__link[href^="#"').forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    itemLink.forEach(function (item) {
      item.classList.remove("privacy-policy__tab--active");
    });
    this.parentElement.classList.add("privacy-policy__tab--active");
    var href = this.getAttribute('href').substring(1);
    var scrollTarget = document.getElementById(href);
    var topOffset = document.querySelector('.privacy-policy__quick').offsetHeight; // const topOffset = 0; 

    var elementPosition = scrollTarget.getBoundingClientRect().top;
    var offsetPosition = elementPosition - topOffset;
    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});
"use strict";

var paginationBtn = document.querySelectorAll('.pagination__item');
paginationBtn.forEach(function (item) {
  item.addEventListener('click', function (e) {
    paginationBtn.forEach(function (el) {
      el.classList.remove('active');
    });
    item.classList.add('active');
  });
});
"use strict";

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
"use strict";

var _Swiper2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var galleryPreview = new Swiper('.gallery__preview', _defineProperty({
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
var galleryThumbs = new Swiper('.gallery__thumbs', (_Swiper2 = {
  autoHeight: true,
  slidesPerView: 4,
  slideToClickedSlide: true,
  spaceBetween: 30,
  loopedSlides: 30,
  loop: true,
  direction: 'vertical',
  preloadImages: false,
  lazy: true
}, _defineProperty(_Swiper2, "loop", true), _defineProperty(_Swiper2, "preloadImages", false), _defineProperty(_Swiper2, "lazyLoading", true), _defineProperty(_Swiper2, "lazy", {
  loadPrevNext: true
}), _Swiper2));
galleryPreview.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryPreview;

if (document.querySelector('.gallery__thumbs')) {
  galleryThumbs.update();
  console.log(document.querySelector('.gallery__thumbs'));
}
"use strict";

var searchForm = document.querySelector('.search'),
    searchLine = document.querySelector('.search__field'),
    menuHeaderSearch = document.querySelector('.header__nav'),
    searchIcon = document.querySelector('.search__icon--search');
window.addEventListener('click', function (e) {
  if (e.target.classList.contains('search__header')) {
    menuHeaderSearch.classList.add('header__nav--active');
    searchForm.classList.add('search--open');
  }

  if (e.target.classList.contains('search__close')) {
    menuHeaderSearch.classList.remove('header__nav--active');
    searchForm.classList.remove('search--open');
    searchLine.value = '';
  }

  if (e.target.classList.contains('search__icon--search')) {
    menuHeaderSearch.classList.add('header__nav--active');
    searchForm.classList.add('search--open');
    searchLine.value = '';
  }
});
"use strict";

var elementChoice = document.querySelectorAll('.js-choice');
elementChoice.forEach(function (el) {
  var choicesNum = new Choices(el, {
    searchEnabled: false,
    itemSelectText: ''
  });
});
"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var tabs = document.querySelector('.tabs');
  var tabsBtn = document.querySelectorAll('.tabs__btn');
  var tabsContent = document.querySelectorAll('.tabs-content__item');

  if (tabs) {
    tabs.addEventListener('click', function (e) {
      if (e.target.classList.contains('tabs__btn')) {
        var tabsPath = e.target.dataset.tabsPath;
        tabsBtn.forEach(function (el) {
          el.classList.remove('tabs__btn--active');
        });
        document.querySelector("[data-tabs-path=\"".concat(tabsPath, "\"]")).classList.add('tabs__btn--active');
        tabsHandler(tabsPath);
      }
    });
  }

  var tabsHandler = function tabsHandler(path) {
    tabsContent.forEach(function (el) {
      el.classList.remove('tabs-content__item--active');
    });
    document.querySelector("[data-tabs-target=\"".concat(path, "\"]")).classList.add('tabs-content__item--active');
  };
});
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
'use strict';

var headerTop = document.querySelector('.header'),
    scrollPrev = 0;
window.addEventListener('scroll', function () {
  var windowScrolled = window.pageYOffset,
      headerScroll = headerTop.offsetHeight;

  if (windowScrolled > headerScroll && windowScrolled > scrollPrev) {
    headerTop.classList.add('out');
    headerTop.classList.remove('header__shadow');
  } else {
    headerTop.classList.remove('out');
    headerTop.classList.add('header__shadow');
  }

  scrollPrev = windowScrolled;
});
var dropdownMenu = document.querySelector('.header__dropdown');
document.querySelectorAll('.header__menu .header__item').forEach(function (item) {
  item.addEventListener('mouseover', function (e) {
    dropdownMenu.classList.add('header__dropdown--show');
  });
  dropdownMenu.addEventListener('mouseleave', function (e) {
    dropdownMenu.classList.remove('header__dropdown--show');
  });
});
//# sourceMappingURL=main.js.map
