const designersLetter = document.querySelectorAll('.designers-page__btn'),
  designersList = document.querySelectorAll('.designers-page__link');


designersLetter.forEach(item => {
  item.addEventListener('click', function () {
    let letter = item.textContent.trim().toLowerCase();

    designersList.forEach(el => {
      if (!el.innerText.toLowerCase().includes(letter)) {
        el.parentElement.style.display = 'none';
      } else {
        el.parentElement.style.display = 'block';
      }
    });

    designersList.forEach(el => {
      if (!parseInt(letter)) {
        let elNumber = parseInt(el.textContent.match(/\d+/));
        console.log(elNumber);
        // elNumber.parentElement.style.display = 'none'
      } else {  
        el.parentElement.style.display = 'block'
      }
    });
  })
});