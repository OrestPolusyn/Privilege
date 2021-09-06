'use strict';

let headerTop = document.querySelector('.header'),
  scrollPrev = 0;

window.addEventListener('scroll', function () {
  let windowScrolled = window.pageYOffset,
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