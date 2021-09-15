"use strict";

var body = document.querySelector('body'),
    sidebar = document.querySelector('.sidebar'),
    burger = document.querySelector('.burger'),
    popUp = document.querySelector('.popup'),
    menuMobile = document.querySelector('.header__menu'),
    designersLetter = document.querySelectorAll('.designers-page__btn'),
    designersList = document.querySelectorAll('.designers-page__link'),
    rangeSlider = document.querySelector('.filter-price__slider'),
    filtersBtn = document.querySelector('.filters__btn'),
    filtersClose = document.querySelector('.sidebar__close'),
    itemLink = document.querySelectorAll('.privacy-policy__tab'),
    designersSec = document.querySelector('.designers'),
    popupClose = document.querySelector('.popup'),
    searchForm = document.querySelector('.search'),
    searchLine = document.querySelector('.search__field'),
    menuHeaderSearch = document.querySelector('.header__nav'),
    searchIcon = document.querySelector('.search__icon--search'),
    elementChoice = document.querySelectorAll('.js-choice'),
    sidebarItem = document.querySelectorAll('.accordion__item'),
    tabs = document.querySelector('.tabs'),
    tabsBtn = document.querySelectorAll('.tabs__btn'),
    tabsContent = document.querySelectorAll('.tabs-content__item'),
    paginationBtn = document.querySelectorAll('.pagination__item'); // CART PAGE

var cartPlus = document.querySelectorAll('.plus'),
    cartMinus = document.querySelectorAll('.minus'),
    cartValue = document.querySelectorAll('.cart-product__number'),
    itemPrice = document.querySelectorAll('.cart-product__price'),
    priceTotal = document.querySelector('.price-total'),
    priceSummaryItems = document.querySelector('.cart__summary-summ'),
    numberItem = document.querySelectorAll('.cart-product__number'); // SlLIDERS

document.addEventListener("DOMContentLoaded", function () {
  var swiperHero = new Swiper('.swiper-slider', heroSliderConfig),
      swiperCatalog = new Swiper('.catalog__swiper', catalogSliderConfig),
      galleryPreview = new Swiper('.gallery__preview', galleryPreviewConfig),
      galleryThumbs = new Swiper('.gallery__thumbs', galleryThumbsConfig),
      galleryThumbsImg = document.querySelector('.gallery__thumbs');
  galleryPreview.controller.control = galleryThumbs;
  galleryThumbs.controller.control = galleryPreview;

  if (galleryThumbsImg) {
    galleryThumbs.update();
  }
});
"use strict";

burger.addEventListener('click', function (e) {
  e.currentTarget[_classList][_toggleClass]('burger--open');

  menuMobile[_classList][_toggleClass]('header__menu--open');

  dropdownMenu[_classList][_toggleClass]('header__dropdown--show');
});
"use strict";

var cartPlusArr = Array.from(cartPlus),
    cartMinusArr = Array.from(cartMinus),
    itemPriceArr = Array.from(itemPrice),
    cartValueArr = Array.from(cartValue);

if (cartPlusArr && cartMinusArr && cartValueArr) {
  cartPlusArr.forEach(function (el) {
    el.addEventListener('click', function () {
      el.previousElementSibling.value++;
      console.log(itemPriceArr);
      var totalPrice = priceTotal.innerHTML.trim(),
          totalPriceItems = priceSummaryItems.innerHTML.trim();
      console.log(+totalPrice + 1);
    });
  });
  cartMinusArr.forEach(function (el) {
    el.addEventListener('click', function () {
      el.nextElementSibling.value--;

      if (el.nextElementSibling.value <= 0) {
        el.nextElementSibling.value = 0;
      }
    });
  });
}
"use strict";

var catalogSliderConfig = {
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
};
"use strict";

var designersLetters = Array.from(designersLetter),
    designersLists = Array.from(designersList);

if (!!designersLetters && !!designersLists) {
  designersLetters.forEach(function (item) {
    item.addEventListener('click', function () {
      var letter = item.textContent.trim().toLowerCase();
      designersLists.forEach(function (el) {
        if (!el.innerText.toLowerCase().includes(letter)) {
          el.parentElement.style.display = 'none';
        } else {
          el.parentElement.style.display = 'block';
        }
      });
      designersLists.forEach(function (el) {
        if (!parseInt(letter)) {
          var elNumber = parseInt(el.textContent.match(/\d+/));
        } else {
          el.parentElement.style.display = 'block';
        }
      });
    });
  });
}
"use strict";

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

if (filtersBtn !== null && filtersClose) {
  filtersBtn.addEventListener('click', function () {
    sidebar[_classList][_addClass]('sidebar-active');

    body.style.height = 'auto';
  });
  filtersClose.addEventListener('click', function () {
    sidebar[_classList][_removeClass]('sidebar-active');

    body.style.height = '100%';
  });
}
"use strict";

var heroSliderConfig = {
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
};
"use strict";

var itemLink = document.querySelectorAll('.privacy-policy__tab');
document.querySelectorAll('.privacy-policy__link[href^="#"]').forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    itemLink.forEach(function (item) {
      item.classList.remove("privacy-policy__tab--active");
    });
    this.parentElement.classList.add("privacy-policy__tab--active");
    var href = this.getAttribute('href').substring(1);
    var scrollTarget = document.getElementById(href),
        topOffset = document.querySelector('.privacy-policy__quick').offsetHeight,
        elementPosition = scrollTarget.getBoundingClientRect().top,
        offsetPosition = elementPosition - topOffset;
    console.log(topOffset, elementPosition, offsetPosition); // windowScroll = window.scroll({
    //   if (offsetPosition = < window) {
    //     this.parentElement.classList.add("privacy-policy__tab--active");
    //   }
    // })

    windowScrollClick = window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});
"use strict";

var paginationBtns = Array.from(paginationBtn);

if (!!paginationBtns) {
  paginationBtns.forEach(function (item) {
    item.addEventListener('click', function (e) {
      paginationBtn.forEach(function (el) {
        el[_classList][_removeClass]('active');
      });

      item[_classList][_addClass]('active');
    });
  });
}
"use strict";

if (designersSec) {
  window.addEventListener('scroll', function (e) {
    e.preventDefault();

    if (window.pageYOffset > designersSec.offsetTop - 100 && !popupClose.classList.contains('popup--close')) {
      popUp[_classList][_addClass]('popup--active');
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

var _galleryThumbsConfig;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var galleryPreviewConfig = _defineProperty({
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
}, "loop", true);

var galleryThumbsConfig = (_galleryThumbsConfig = {
  autoHeight: true,
  slidesPerView: 4,
  slideToClickedSlide: true,
  spaceBetween: 30,
  loopedSlides: 30,
  loop: true,
  direction: 'vertical',
  preloadImages: false,
  lazy: true
}, _defineProperty(_galleryThumbsConfig, "loop", true), _defineProperty(_galleryThumbsConfig, "preloadImages", false), _defineProperty(_galleryThumbsConfig, "lazyLoading", true), _defineProperty(_galleryThumbsConfig, "lazy", {
  loadPrevNext: true
}), _galleryThumbsConfig);
"use strict";

window.addEventListener('click', function (e) {
  if (e.target[_classList].contains('search__header')) {
    menuHeaderSearch[_classList][_addClass]('header__nav--active');

    searchForm[_classList][_addClass]('search--open');
  }

  if (e.target[_classList].contains('search__close')) {
    menuHeaderSearch[_classList][_removeClass]('header__nav--active');

    searchForm[_classList][_removeClass]('search--open');

    searchLine.value = '';
  }

  if (e.target[_classList].contains('search__icon--search')) {
    menuHeaderSearch[_classList][_addClass]('header__nav--active');

    searchForm[_classList][_addClass]('search--open');

    searchLine.value = '';
  }
});
"use strict";

var elementChoices = Array.from(elementChoice);

if (!!elementChoices.length) {
  elementChoices.forEach(function (el) {
    var choicesNum = new Choices(el, {
      searchEnabled: false,
      itemSelectText: ''
    });
  });
}
"use strict";

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
