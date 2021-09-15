if (designersSec) {
  
  window.addEventListener('scroll', function (e) {
    e.preventDefault();
    if (window.pageYOffset > designersSec.offsetTop - 100 && !popupClose.classList.contains('popup--close')) {
     popUp[_classList][_addClass]('popup--active');
    }
  })

  popupClose.addEventListener('click', function (e) {
    if (e.target.classList.contains('subscribe__close')) {
      popupClose.classList.remove('popup--active');
      popupClose.classList.add('popup--close');
    }
  })
}