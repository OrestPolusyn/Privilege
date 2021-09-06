const searchForm = document.querySelector('.search'),
  searchLine = document.querySelector('.search__field'),
  menuHeaderSearch = document.querySelector('.header__nav'),
  searchIcon = document.querySelector('.search__icon--search');

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('search__header')) {
    menuHeaderSearch.classList.add('header__nav--active');
    searchForm.classList.add('search--open');
  }

  if (e.target.classList.contains('search__close')) {
    menuHeaderSearch.classList.remove('header__nav--active');
    searchForm.classList.remove('search--open');
    searchLine.value = '';
  }
  if (e.target.classList.contains('search__icon--search')) {
    menuHeaderSearch.classList.add('header__nav--active');
    searchForm.classList.add('search--open');
    searchLine.value = '';
  }

});