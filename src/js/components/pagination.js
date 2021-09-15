const paginationBtns = Array.from(paginationBtn);

if (!!paginationBtns) {
  paginationBtns.forEach(item => {
    item.addEventListener('click', (e) => {
      paginationBtn.forEach(el => {
        el[_classList][_removeClass]('active');
      });
      item[_classList][_addClass]('active')
    })
  });
}