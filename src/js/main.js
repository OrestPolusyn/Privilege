'use strict';

document.addEventListener('DOMContentLoaded', () => {

  const swiperHero = new Swiper('.swiper-slider', {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    calculateHeight: true,
    speed: 500,
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    autoplay: 500,
    autoplayDisableOnInteraction: true
  });


  const swiperCatalog = new Swiper('.catalog-swiper', {
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
    },
  });

  let galleryPreview = new Swiper('.gallery-preview', {
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

  let galleryThumbs = new Swiper('.gallery-thumbs', {
    autoHeight: true,
    slidesPerView: 4,
    slideToClickedSlide: true,
    spaceBetween: 10,
    loopedSlides: 10,
    loop: true,
    direction: 'vertical',
    preloadImages: false,
    lazy: true,
    loop: true,

  });



  galleryPreview.controller.control = galleryThumbs;
  galleryThumbs.controller.control = galleryPreview;

  let tab, tabContent;

  window.onload = function () {
    tabContent = document.getElementsByClassName('designers__tab');
    tab = document.getElementsByClassName('designers-aside__item');
    hideTabsContent(1);
  }

  const designersTab = document.querySelector('.designers-aside__list');

  if (designersTab !== null) {
    designersTab.addEventListener('click', function (event) {
      let target = event.target;
      if (target.className == 'designers-aside__item') {
        for (let i = 0; i < tab.length; i++) {
          if (target == tab[i]) {
            showTabsContent(i);
            break;
          }
        }
      }
    });
  }

  function hideTabsContent(a) {
    for (let i = a; i < tabContent.length; i++) {
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

  const designersSec = document.querySelector('.designers'),
    popupClose = document.querySelector('.popup')

  if (designersSec) {
    window.addEventListener('scroll', function (e) {
      e.preventDefault();
      if (window.pageYOffset > designersSec.offsetTop - 100 && !popupClose.classList.contains('popup--close')) {
        document.querySelector('.popup').classList.add('popup--active');
      }
    })

    popupClose.addEventListener('click', function (e) {
      if (e.target.classList.contains('subscribe__close')) {
        popupClose.classList.remove('popup--active');
        popupClose.classList.add('popup--close');
      }
    })
  }


  const filtersBtn = document.querySelector('.filters__btn'),
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


  let paginationBtn = document.querySelectorAll('.pagination__item');

  paginationBtn.forEach(item => {
    item.addEventListener('click', (e) => {
      paginationBtn.forEach(el => {
        el.classList.remove('active');
      });
      item.classList.add('active')
    })
  });

  const rangeSlider = document.querySelector('.filter-price__slider');

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

    const input0 = document.getElementById('price-from');
    const input1 = document.getElementById('price-to');
    const inputs = [input0, input1];

    rangeSlider.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = values[handle];
    });

    const setRangeSlider = (i, value) => {
      let arr = [null, null];
      arr[i] = value;
      rangeSlider.noUiSlider.set(arr);
    };

    inputs.forEach((el, index) => {
      el.addEventListener('change', (e) => {
        setRangeSlider(index, e.currentTarget.value);
      });
    });
  }

  const sidebarItem = document.querySelectorAll('.accordion__item');


  sidebarItem.forEach(item => {
    item.addEventListener('click', function (e) {
      const self = e.currentTarget,
        controlItem = self.querySelector('.accordion__name'),
        contentItem = self.querySelector('.accordion__filter, .accordion__content ');

      e.target.classList.toggle('accordion-active');

      if (controlItem.classList.contains('accordion-active') ) {
        contentItem.style.maxHeight = contentItem.scrollHeight + 'px';
      } else {
        contentItem.style.maxHeight = null;
      }

    })
  });


  const elementChoice = document.querySelectorAll('.js-choice');

  elementChoice.forEach(el => {
    const choicesNum = new Choices(el, {
      searchEnabled: false,
      itemSelectText: ''
    });
  });

  const searchLine = document.querySelector('.search'),
    menuHeaderSearch = document.querySelector('.header__nav');

  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('search__header')) {
      menuHeaderSearch.classList.add('header__nav--active');
    }

    if (e.target.classList.contains('search__close')) {
      menuHeaderSearch.classList.remove('header__nav--active');
    }
  });

  const burger = document.querySelector('.burger'),
    menuMobile = document.querySelector('.header__menu');

  burger.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('burger--active');
    menuMobile.classList.toggle('header__menu--active');
  });


  let headerTop = document.querySelector('.header'),
    scrollPrev = 0;

  window.addEventListener('scroll', function () {
    let windowScrolled = window.pageYOffset,
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