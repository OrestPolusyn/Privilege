const searchIcon = document.querySelector('.search__icon--search'),
  menuHeaderSearch = document.querySelector('.header__nav'),
  searchForm = document.querySelector('.search'),
  searchLine = document.querySelector('.search__field');

window.addEventListener('click', (e) => {

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