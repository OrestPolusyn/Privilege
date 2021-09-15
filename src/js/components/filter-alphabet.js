const designersLetters = Array.from(designersLetter),
designersLists = Array.from(designersList);

if (!!designersLetters && !!designersLists) {
  
  designersLetters.forEach(item => {
    item.addEventListener('click', function () {
      let letter = item.textContent.trim().toLowerCase();

      designersLists.forEach(el => {
        if (!el.innerText.toLowerCase().includes(letter)) {
          el.parentElement.style.display = 'none';
        } else {
          el.parentElement.style.display = 'block';
        }
      });

      designersLists.forEach(el => {
        if (!parseInt(letter)) {
          let elNumber = parseInt(el.textContent.match(/\d+/));
        } else {
          el.parentElement.style.display = 'block'
        }
      });
    })
  });
}