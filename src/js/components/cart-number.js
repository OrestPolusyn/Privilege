let cartPlus = document.querySelector('.plus'),
  cartMinus = document.querySelector('.minus'),
  cartValue = document.querySelector('.cart-product__number');


if (cartPlus && cartMinus && cartValue) {

  cartPlus.addEventListener('click', function () {
    cartValue.value = +cartValue.value + 1;
  });

  cartMinus.addEventListener('click', function () {
    cartValue.value = +cartValue.value - 1;
    if (cartValue.value <= 0) {
      cartValue.value = 1;

    }
  })
}