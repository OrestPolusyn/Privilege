const body = document.querySelector('body'),
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
  paginationBtn = document.querySelectorAll('.pagination__item');

// CART PAGE

let cartPlus = document.querySelectorAll('.plus'),
  cartMinus = document.querySelectorAll('.minus'),
  cartValue = document.querySelectorAll('.cart-product__number'),
  itemPrice = document.querySelectorAll('.cart-product__price'),
  priceTotal = document.querySelector('.price-total'),
  priceSummaryItems = document.querySelector('.cart__summary-summ'),
  numberItem = document.querySelectorAll('.cart-product__number');



// SlLIDERS

document.addEventListener("DOMContentLoaded", () => {
  const swiperHero = new Swiper('.swiper-slider', heroSliderConfig),
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

