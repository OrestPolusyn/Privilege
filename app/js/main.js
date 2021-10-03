"use strict";

var _classList = 'classList',
    _addClass = 'add',
    _removeClass = 'remove',
    _toggleClass = 'toggle';
"use strict";

var burger = document.querySelector('.burger'),
    menuMobile = document.querySelector('.header__menu');
burger.addEventListener('click', function (e) {
  burgerClick(e);
});

var burgerClick = function burgerClick(e) {
  e.currentTarget[_classList][_toggleClass]('burger--open');

  menuMobile[_classList][_toggleClass]('header__menu--open');

  console.log();

  if (!e.currentTarget[_classList].contains('burger--open')) {
    dropdownMenu[_classList][_removeClass]('header__dropdown--show');
  }
};
"use strict";

var cartPlus = Array.from(document.querySelectorAll('.plus')),
    cartMinus = Array.from(document.querySelectorAll('.minus')),
    priceTotal = document.querySelector('.price-total'),
    priceShipping = document.querySelector('.price-shipping'),
    subtotalItems = document.querySelector('.price-subtotal');
var deleteCardItemButton = Array.from(document.querySelectorAll('.btn-delete')),
    cartItems = Array.from(document.querySelectorAll('.cart-product'));

function calculateCartPrice() {
  var sumItems = cartItems.reduce(function (acc, cartItem) {
    var quantity = +cartItem.querySelector('.cart-product__number').value,
        price = cartItem.dataset.productPrice;
    var sumItems = acc + quantity * price;
    return sumItems;
  }, 0);
  subtotalItems.textContent = sumItems.toFixed(2);
  priceTotal.textContent = (sumItems + +priceShipping.textContent).toFixed(2);
} /// Axios


deleteCardItemButton.forEach(function (btn) {
  btn.addEventListener('click', function async(e) {
    var itemId = this.dataset.productId;

    try {
      /// AJAX query here ...
      cartItems.forEach(function (item) {
        var cartItemId = item.dataset.productId;

        if (itemId === cartItemId) {// Here we will delete cart item from DOM  ...
        }
      });
    } catch (e) {// Something went wrong try again
    }
  });
});

if (cartPlus.length > 0 && cartMinus.length > 0) {
  cartPlus.forEach(function (el) {
    el.addEventListener('click', function (e) {
      el.previousElementSibling.querySelector('input').value++; //  console.log(el.previousElementSibling.querySelector('input'));

      calculateCartPrice();
    });
  });
  cartMinus.forEach(function (el) {
    el.addEventListener('click', function () {
      el.nextElementSibling.querySelector('input').value--;

      if (el.nextElementSibling.querySelector('input').value <= 0) {
        el.nextElementSibling.querySelector('input').value = 1;
      }

      calculateCartPrice();
    });
  });
  calculateCartPrice();
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

var designersLetters = Array.from(document.querySelectorAll('.designers-page__btn')),
    designersLists = Array.from(document.querySelectorAll('.designers-page__items .designers-page__item'));

if (designersLetters.length > 0 && !!designersLists.length > 0) {
  designersLetters.forEach(function (item) {
    item.addEventListener('click', function () {
      var letter = item.textContent.trim().toLowerCase();
      designersLists.forEach(function (el) {
        if (!el.innerText.toLowerCase().trim().includes(letter)) {
          el[_classList][_addClass]('designers-page__item--hidden');
        } else {
          el[_classList][_removeClass]('designers-page__item--hidden');
        }
      });
      designersLists.forEach(function (el) {
        if (!isNaN(parseInt(item.textContent.trim()))) {
          if (parseInt(el.textContent.trim().match(/\d+/))) {
            el[_classList][_removeClass]('designers-page__item--hidden');
          } else {
            el[_classList][_addClass]('designers-page__item--hidden');
          }
        }
      });
    });
  });
}
"use strict";

var rangeSlider = document.querySelector('.filter-price__slider'),
    inputDataNumber = document.querySelector('.filter-price__inner'),
    minPrice = document.querySelector('.filter-price__slider .min'),
    maxPrice = document.querySelector('.filter-price__slider .max');

if (rangeSlider) {
  var inputDatasetFrom = inputDataNumber.dataset.priceFrom,
      inputDatasetTo = inputDataNumber.dataset.priceTo;
  minPrice.textContent = "$" + inputDatasetFrom.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1.');
  maxPrice.textContent = "$" + inputDatasetTo.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1.');
  noUiSlider.create(rangeSlider, {
    start: [inputDatasetFrom, inputDatasetTo],
    behaviour: 'tap',
    connect: true,
    step: 1,
    range: {
      'min': +inputDatasetFrom,
      'max': +inputDatasetTo
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
    sidebar = document.querySelector('.sidebar'),
    filtersClose = document.querySelector('.sidebar__close');

if (filtersBtn !== null && filtersClose) {
  filtersBtn.addEventListener('click', function () {
    sidebar[_classList][_addClass]('sidebar-active');

    body[_classList][_addClass]('overflow');
  });
  filtersClose.addEventListener('click', function () {
    sidebar[_classList][_removeClass]('sidebar-active');

    body[_classList][_removeClass]('overflow');
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

var sections = Array.from(document.querySelectorAll("section[id]"));
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  var scrollY = window.pageYOffset;
  sections.forEach(function (current) {
    var sectionHeight = current.offsetHeight;
    var sectionTop = current.offsetTop,
        sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".privacy-policy__link[href*=" + sectionId + "]").classList.add("privacy-policy__link--active");
    } else {
      document.querySelector(".privacy-policy__link[href*=" + sectionId + "]").classList.remove("privacy-policy__link--active");
    }
  });
}
"use strict";

var paginationBtns = Array.from(document.querySelectorAll('.pagination__item'));

if (paginationBtns.length > 0) {
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

var popUp = document.querySelector('.popup'),
    designersSec = document.querySelector('.designers');

if (designersSec) {
  window.addEventListener('scroll', function (e) {
    e.preventDefault();

    if (window.pageYOffset > designersSec.offsetTop - 100 && !popUp.classList.contains('popup--close')) {
      popUp[_classList][_addClass]('popup--active');
    }
  });
  popUp.addEventListener('click', function (e) {
    if (e.target.classList.contains('subscribe__close')) {
      popUp.classList.remove('popup--active');
      popUp.classList.add('popup--close');
    }
  });
}
"use strict";

var _galleryThumbsConfig;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var galleryPreviewConfig = _defineProperty({
  slidesPerView: 1,
  loop: true,
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
  loop: true,
  direction: 'vertical',
  preloadImages: false,
  lazy: true
}, _defineProperty(_galleryThumbsConfig, "loop", true), _defineProperty(_galleryThumbsConfig, "preloadImages", false), _defineProperty(_galleryThumbsConfig, "lazyLoading", true), _defineProperty(_galleryThumbsConfig, "lazy", {
  loadPrevNext: true
}), _galleryThumbsConfig);
"use strict";

var searchIcon = document.querySelector('.search__icon--search'),
    menuHeaderSearch = document.querySelector('.header__nav'),
    searchForm = document.querySelector('.search'),
    searchLine = document.querySelector('.search__field');
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

var elementChoices = Array.from(document.querySelectorAll('.js-choice'));

if (!!elementChoices.length) {
  elementChoices.forEach(function (el) {
    var choicesNum = new Choices(el, {
      searchEnabled: false,
      itemSelectText: ''
    });
  });
}
"use strict";

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

var tabs = document.querySelector('.tabs'),
    tabsBtn = Array.from(document.querySelectorAll('.tabs__btn')),
    tabsContent = Array.from(document.querySelectorAll('.tabs-content__item')),
    sidebarItem = Array.from(document.querySelectorAll('.accordion__item'));

if (tabs) {
  tabs.addEventListener('click', function (e) {
    if (e.target[_classList].contains('tabs__btn')) {
      var tabsPath = e.target.dataset.tabsPath;
      tabsBtn.forEach(function (el) {
        el[_classList][_removeClass]('tabs__btn--active');
      });

      document.querySelector("[data-tabs-path=\"".concat(tabsPath, "\"]"))[_classList][_addClass]('tabs__btn--active');

      tabsHandler(tabsPath);
    }
  });
}

var tabsHandler = function tabsHandler(path) {
  tabsContent.forEach(function (el) {
    el[_classList][_removeClass]('tabs-content__item--active');
  });

  document.querySelector("[data-tabs-target=\"".concat(path, "\"]"))[_classList][_addClass]('tabs-content__item--active');
};

sidebarItem.forEach(function (item) {
  item.addEventListener('click', function (e) {
    var self = e.currentTarget,
        controlItem = self.querySelector('.accordion__name'),
        contentItem = self.querySelector('.accordion__filter, .accordion__content');

    if (e.target[_classList].contains('accordion__name')) {
      e.target[_classList].toggle('accordion-active');
    }

    if (controlItem[_classList].contains('accordion-active')) {
      contentItem[_classList][_addClass]('accordion__filter--open');
    } else {
      contentItem[_classList][_removeClass]('accordion__filter--open');
    }
  });
});
'use strict';

var body = document.querySelector('body'),
    dropdownMenu = document.querySelector('.header__dropdown'),
    headerItems = Array.from(document.querySelectorAll('.header__menu .header__item')),
    policyLink = document.querySelector('.privacy-policy__quick');
var headerTop = document.querySelector('.header'),
    scrollPrev = 0;
window.addEventListener('scroll', function () {
  var windowScrolled = window.pageYOffset,
      headerScroll = headerTop.offsetHeight;

  if (windowScrolled > headerScroll && windowScrolled > scrollPrev && !burger[_classList].contains('burger--open')) {
    headerTop[_classList][_addClass]('out');

    headerTop[_classList][_removeClass]('header__shadow');

    if (policyLink) {
      policyLink[_classList][_removeClass]('privacy-policy__quick--down');
    }
  } else {
    headerTop[_classList][_removeClass]('out');

    headerTop[_classList][_addClass]('header__shadow');

    if (policyLink) {
      policyLink[_classList][_addClass]('privacy-policy__quick--down');
    }
  }

  scrollPrev = windowScrolled;
});
headerItems.forEach(function (item) {
  item.addEventListener('mouseover', function (e) {
    var linkId = item.dataset.menuId,
        dropdownId = dropdownMenu.dataset.dropdownId;

    if (linkId === dropdownId) {
      dropdownMenu[_classList][_addClass]('header__dropdown--show');
    }
  });
  dropdownMenu.addEventListener('mouseleave', function (e) {
    dropdownMenu[_classList][_removeClass]('header__dropdown--show');
  });
  dropdownMenu.addEventListener('touchend', function (e) {
    dropdownMenu[_classList][_removeClass]('header__dropdown--show');
  });
});
var closeHeaderAdv = document.querySelector('.header-adv__close'),
    hedaerAdv = document.querySelector('.header-adv');
closeHeaderAdv.addEventListener('click', function () {
  hedaerAdv[_classList][_addClass]('header-adv--hidden');
});
//# sourceMappingURL=main.js.map
