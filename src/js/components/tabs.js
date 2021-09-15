if (tabs) {
  tabs.addEventListener('click', (e) => {
    if (e.target.classList.contains('tabs__btn')) {
      const tabsPath = e.target.dataset.tabsPath;
      
      tabsBtn.forEach(el => {
        el.classList.remove('tabs__btn--active')
      });
      
      document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs__btn--active');
      tabsHandler(tabsPath);

    }
  });
}

const tabsHandler = (path) => {
  tabsContent.forEach(el => {
    el.classList.remove('tabs-content__item--active')
  });
  document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs-content__item--active');
};




sidebarItem.forEach(item => {
  item.addEventListener('click', function (e) {
    const self = e.currentTarget,
      controlItem = self.querySelector('.accordion__name'),
      contentItem = self.querySelector('.accordion__filter, .accordion__content ');

    e.target.classList.toggle('accordion-active');

    if (controlItem.classList.contains('accordion-active')) {
      contentItem.style.maxHeight = contentItem.scrollHeight + 'px';
    } else {
      contentItem.style.maxHeight = null;
    }
  })
});