const popUp = document.querySelector('.popup'),
  designersSec = document.querySelector('.designers');

if (designersSec) {

  window.addEventListener('scroll', function (e) {
    e.preventDefault();
    if (window.pageYOffset > designersSec.offsetTop - 100 && !popUp.classList.contains('popup--close')) {
      popUp[_classList][_addClass]('popup--active');
    }
  })

  popUp.addEventListener('click', function (e) {
    if (e.target.classList.contains('subscribe__close')) {
      popUp.classList.remove('popup--active');
      popUp.classList.add('popup--close');
    }
  })
}