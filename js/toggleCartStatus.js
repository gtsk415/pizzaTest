function toggleCartStatus() {

  const cartWrapper = document.querySelector('.cart-wrapper');
  const cartWrapperBadge = document.getElementById('cart-status');
  const orderForm = document.getElementById('order-form');
  const orderCost = document.querySelector('.order-wrapper');

  
  if (cartWrapper.children.length > 0 ) {
    cartWrapperBadge.classList.add('none');
    orderForm.classList.remove('none');
    orderCost.classList.remove('none');
  } else {
    cartWrapperBadge.classList.remove('none');
    orderForm.classList.add('none');
    orderCost.classList.add('none');
  }

}

