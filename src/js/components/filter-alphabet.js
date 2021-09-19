const designersLetters = Array.from(document.querySelectorAll('.designers-page__btn')),
  designersLists = Array.from(document.querySelectorAll('.designers-page__items .designers-page__item'));

if (designersLetters.length > 0 && !!designersLists.length > 0) {

  designersLetters.forEach(item => {
    item.addEventListener('click', function () {
      let letter = item.textContent.trim().toLowerCase();

      designersLists.forEach(el => {
        if (!el.innerText.toLowerCase().trim().includes(letter)) {
          el[_classList][_addClass]('designers-page__item--hidden');
        } else {
          el[_classList][_removeClass]('designers-page__item--hidden');
        }
      });


      designersLists.forEach(el => {

        if (!isNaN(parseInt(item.textContent.trim()))) {
          if (parseInt(el.textContent.trim().match(/\d+/))) {
            el[_classList][_removeClass]('designers-page__item--hidden');
          } else {
            el[_classList][_addClass]('designers-page__item--hidden');
          }
        }

      });
    })
  });
}