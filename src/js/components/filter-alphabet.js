const designersLetter = document.querySelectorAll('.designers-page__list li'),
  designersList = document.querySelectorAll('.designers-page__items a');


designersLetter.forEach(item => {
  item.addEventListener('click', function () {
    let letter = item.textContent.trim().toLowerCase();

    designersList.forEach(el => {
      if (!el.innerText.toLowerCase().includes(letter)) {
        el.parentElement.style.display = 'none'
      } else {
        el.parentElement.style.display = 'block'

      }

    });
  })
});