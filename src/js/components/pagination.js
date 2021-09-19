const paginationBtns = Array.from(document.querySelectorAll('.pagination__item'));

if (paginationBtns.length > 0) {
  paginationBtns.forEach(item => {
    item.addEventListener('click', (e) => {
      paginationBtn.forEach(el => {
        el[_classList][_removeClass]('active');
      });
      item[_classList][_addClass]('active')
    })
  });
}