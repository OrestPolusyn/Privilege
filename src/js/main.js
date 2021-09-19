'use strict';

const body = document.querySelector('body'),
  dropdownMenu = document.querySelector('.header__dropdown'),
  headerItems = Array.from(document.querySelectorAll('.header__menu .header__item')),
  policyLink = document.querySelector('.privacy-policy__quick');

let headerTop = document.querySelector('.header'),
  scrollPrev = 0;

window.addEventListener('scroll', function () {
  let windowScrolled = window.pageYOffset,
    headerScroll = headerTop.offsetHeight;

  if (windowScrolled > headerScroll && windowScrolled > scrollPrev && !burger[_classList].contains('burger--open')) {
    headerTop[_classList][_addClass]('out');
    headerTop[_classList][_removeClass]('header__shadow');
    policyLink[_classList][_removeClass]('privacy-policy__quick--down');

  } else {
    headerTop[_classList][_removeClass]('out');
    headerTop[_classList][_addClass]('header__shadow');
    policyLink[_classList][_addClass]('privacy-policy__quick--down');

  }

  scrollPrev = windowScrolled;
});

headerItems.forEach(function (item) {

  item.addEventListener('mouseover', function (e) {
    dropdownMenu[_classList][_addClass]('header__dropdown--show');
  });

  dropdownMenu.addEventListener('mouseleave', function (e) {
    dropdownMenu[_classList][_removeClass]('header__dropdown--show');
  });
  dropdownMenu.addEventListener('touchend', function (e) {
    dropdownMenu[_classList][_removeClass]('header__dropdown--show');
  });
});

const closeHeaderAdv = document.querySelector('.header-adv__close'),
  hedaerAdv = document.querySelector('.header-adv');

closeHeaderAdv.addEventListener('click', function () {
  hedaerAdv[_classList][_addClass]('header-adv--hidden');
})