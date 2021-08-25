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

let tab, // заголовок вкладки
  tabContent; // блок содержащий контент вкладки


window.onload = function () {
  tabContent = document.getElementsByClassName('designers__tab');
  tab = document.getElementsByClassName('designers-aside__item');
  hideTabsContent(1);
}

document.querySelector('.designers-aside__list').onclick = function (event) {
  var target = event.target;
  if (target.className == 'designers-aside__item') {
    for (var i = 0; i < tab.length; i++) {
      if (target == tab[i]) {
        showTabsContent(i);
        break;
      }
    }
  }
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

const searchBtn = document.querySelector('.search__field'),
  itemSearch = document.querySelector('.header__action-item--search')

window.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('search__field')) {
    itemSearch.classList.add('open')
  } else {
    itemSearch.classList.remove('open')
  }
});