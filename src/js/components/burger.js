burger.addEventListener('click', (e) => {
  e.currentTarget[_classList][_toggleClass]('burger--open');
  menuMobile[_classList][_toggleClass]('header__menu--open');
  dropdownMenu[_classList][_toggleClass]('header__dropdown--show');
});
