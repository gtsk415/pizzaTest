function calcCartPriceAndDelivery() {
  const cartWrapper = document.querySelector('.cart-wrapper');
  const cartItems = cartWrapper.querySelectorAll('.cart-item');
  const totalCost = document.querySelector('.total-price');
  const deliveryCost = document.querySelector('.delivery-cost');

  let totalPrice = 0;

  cartItems.forEach(function(item) {
    const amountEl = item.querySelector('[data-counter]');
    const priceEl = item.querySelector('.price__currency');
    const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
    totalPrice += currentPrice;
  })

  totalCost.innerText = totalPrice;

  if (totalPrice >= 600) {
    deliveryCost.classList.add('free');
    deliveryCost.innerText = 'бесплатно';

  } else {
    deliveryCost.classList.remove('free');
    deliveryCost.innerText = '300 ₽';
  }

}