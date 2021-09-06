let paginationBtn = document.querySelectorAll('.pagination__item');

paginationBtn.forEach(item => {
  item.addEventListener('click', (e) => {
    paginationBtn.forEach(el => {
      el.classList.remove('active');
    });
    item.classList.add('active')
  })
});