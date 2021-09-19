const filtersBtn = document.querySelector('.filters__btn'),
  sidebar = document.querySelector('.sidebar'),
  filtersClose = document.querySelector('.sidebar__close');


if (filtersBtn !== null && filtersClose) {
  filtersBtn.addEventListener('click', function () {
    sidebar[_classList][_addClass]('sidebar-active');
    body[_classList][_addClass]('overflow');
  });

  filtersClose.addEventListener('click', function () {
    sidebar[_classList][_removeClass]('sidebar-active');
    body[_classList][_removeClass]('overflow');
  });
}