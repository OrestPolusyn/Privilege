let cartPlus = document.querySelectorAll('.plus'),
  cartMinus = document.querySelectorAll('.minus'),
  cartValue = document.querySelectorAll('.cart-product__number');


if (cartPlus && cartMinus && cartValue) {

  cartPlus.forEach(e => {
    e.addEventListener('click', function () {
      e.previousElementSibling.value = +e.previousElementSibling.value + 1;

    });
  });

  cartMinus.forEach(e => {
    e.addEventListener('click', function () {
      e.nextElementSibling.value = +e.nextElementSibling.value - 1;
      if (e.nextElementSibling.value <= 0) {
        e.nextElementSibling.value = 0;
      }
    });
  });

}

cartValue.forEach(el => {
  el.addEventListener('input', function () {
    if (el.value === "" || el.value === String || el.value === 'e') {
      el.value = '';
    }
    el.value = parseInt(el.value, 10)
  });

  el.addEventListener('change', function () {
    if (el.value === "" || el.value === String || el.value === 'e') {
      el.value = 0;
    }
  })
});