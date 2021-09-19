const cartPlus = Array.from(document.querySelectorAll('.plus')),
  cartMinus = Array.from(document.querySelectorAll('.minus')),
  priceTotal = document.querySelector('.price-total'),
  priceShipping = document.querySelector('.price-shipping'),
  subtotalItems = document.querySelector('.price-subtotal');

const deleteCardItemButton = Array.from(document.querySelectorAll('.cart-product__delete')),
  cartItems = Array.from(document.querySelectorAll('.cart-product'));


function calculateCartPrice() {
  const sumItems = cartItems.reduce(function (acc, cartItem) {

    const quantity = +cartItem.querySelector('.cart-product__number').value,
      price = cartItem.dataset.productPrice;

    let sumItems = acc + quantity * price;

    return sumItems;

  }, 0);

  subtotalItems.textContent = sumItems.toFixed(2);

  priceTotal.textContent = (sumItems + +priceShipping.textContent).toFixed(2);
}

/// Axios
deleteCardItemButton.forEach(btn => {
  btn.addEventListener('click', function async (e) {
    const itemId = this.dataset.productId;

    try {

      /// AJAX query here ...

      cartItems.forEach(item => {
        const cartItemId = item.dataset.productId;

        if (itemId === cartItemId) {
          // Here we will delete cart item from DOM  ...
        }
      });

    } catch (e) {
      // Something went wrong try again
    }
  })
})

if (cartPlus.length > 0 && cartMinus.length > 0) {

  cartPlus.forEach(el => {
    el.addEventListener('click', function (e) {
      el.previousElementSibling.querySelector('input').value++;
      //  console.log(el.previousElementSibling.querySelector('input'));
      calculateCartPrice();
    });
  });

  cartMinus.forEach(el => {
    el.addEventListener('click', function () {
      el.nextElementSibling.querySelector('input').value--;
      if (el.nextElementSibling.querySelector('input').value <= 0) {
        el.nextElementSibling.querySelector('input').value = 1;
      }
      calculateCartPrice();
    });
  });
  calculateCartPrice();
}