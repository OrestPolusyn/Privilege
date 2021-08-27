'use strict';

const swiperHero = new Swiper('.swiper-slider', {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: 'fade',
  autoplay: 2000,
  autoplayDisableOnInteraction: false
});

const swiperCatalog = new Swiper('.catalog-swiper', {
  slidesPerView: 5,
  spaceBetween: 30,
  slidesPerGroup: 5,
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
});

let tab, // заголовок вкладки
  tabContent; // блок содержащий контент вкладки

window.onload = function () {
  tabContent = document.getElementsByClassName('designers__tab');
  tab = document.getElementsByClassName('designers-aside__item');
  hideTabsContent(1);
}

const designersTab = document.querySelector('.designers-aside__list');

if (designersTab != null) {
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

const searchBtn = document.querySelector('.search__field'),
  itemSearch = document.querySelector('.header__nav')

window.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('search__field')) {
    itemSearch.classList.add('open')
  } else {
    itemSearch.classList.remove('open')
  }
});


const filtersBtn = document.querySelector('.filters-btn');

if (filtersBtn !== null) {
  filtersBtn.addEventListener('click', function () {
    document.querySelector('.catalog-filters').classList.toggle('filters-active');
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


const designersSec = document.querySelector('.designers'),
  popupClose = document.querySelector('.popup')

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