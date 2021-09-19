const burger = document.querySelector('.burger'),
  menuMobile = document.querySelector('.header__menu');


burger.addEventListener('click', function (e) {
  burgerClick(e)
})

const burgerClick = (e) => {
  e.currentTarget[_classList][_toggleClass]('burger--open');
  menuMobile[_classList][_toggleClass]('header__menu--open');
  console.log();
  if (!e.currentTarget[_classList].contains('burger--open')) {
  dropdownMenu[_classList][_removeClass]('header__dropdown--show');

  }
};