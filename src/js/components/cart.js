const cartPlusArr = Array.from(cartPlus),
  cartMinusArr = Array.from(cartMinus),
  itemPriceArr = Array.from(itemPrice),
  cartValueArr = Array.from(cartValue);

if (cartPlusArr && cartMinusArr && cartValueArr) {

  cartPlusArr.forEach(el => {
    el.addEventListener('click', function () {
      el.previousElementSibling.value++;

      console.log(itemPriceArr);

      const totalPrice = priceTotal.innerHTML.trim(),
      totalPriceItems = priceSummaryItems.innerHTML.trim();
      console.log(+totalPrice + 1);

    });
  });

  cartMinusArr.forEach(el => {
    el.addEventListener('click', function () {
      el.nextElementSibling.value--;
      if (el.nextElementSibling.value <= 0) {
        el.nextElementSibling.value = 0;
      }
    });
  });
}