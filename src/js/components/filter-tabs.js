if (filtersBtn !== null && filtersClose) {

  filtersBtn.addEventListener('click', function () {
    sidebar[_classList][_addClass]('sidebar-active');
    body.style.height = 'auto';
  });

  filtersClose.addEventListener('click', function () {
    sidebar[_classList][_removeClass]('sidebar-active');
    body.style.height = '100%';
  });
}