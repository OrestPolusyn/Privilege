const burger = document.querySelector('.burger'),
  menuMobile = document.querySelector('.header__menu');

burger.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('burger--open');
  menuMobile.classList.toggle('header__menu--open');
});