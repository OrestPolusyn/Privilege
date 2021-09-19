const tabs = document.querySelector('.tabs'),
  tabsBtn = Array.from(document.querySelectorAll('.tabs__btn')),
  tabsContent = Array.from(document.querySelectorAll('.tabs-content__item')),
  sidebarItem = Array.from(document.querySelectorAll('.accordion__item'));


if (tabs) {
  tabs.addEventListener('click', (e) => {
    if (e.target[_classList].contains('tabs__btn')) {
      const tabsPath = e.target.dataset.tabsPath;

      tabsBtn.forEach(el => {
        el[_classList][_removeClass]('tabs__btn--active')
      });

      document.querySelector(`[data-tabs-path="${tabsPath}"]`)[_classList][_addClass]('tabs__btn--active');
      tabsHandler(tabsPath);
    }
  });
}

const tabsHandler = (path) => {
  tabsContent.forEach(el => {
    el[_classList][_removeClass]('tabs-content__item--active')
  });
  document.querySelector(`[data-tabs-target="${path}"]`)[_classList][_addClass]('tabs-content__item--active');
};

sidebarItem.forEach(item => {
  item.addEventListener('click', function (e) {
    const self = e.currentTarget,
      controlItem = self.querySelector('.accordion__name'),
      contentItem = self.querySelector('.accordion__filter, .accordion__content');

    if (e.target[_classList].contains('accordion__name')) {
      e.target[_classList].toggle('accordion-active');
    }
    if (controlItem[_classList].contains('accordion-active')) {
      contentItem[_classList][_addClass]('accordion__filter--open');
    } else {
      contentItem[_classList][_removeClass]('accordion__filter--open');
    }
  })
});