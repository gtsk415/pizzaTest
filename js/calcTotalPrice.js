const calcTotalPrice = () => {
  const elemInCart = document.querySelectorAll('.cart-item');
  const price = document.querySelector('.price__currency').innerText;
  const priceCurrency = parseInt(price);
  console.log(priceCurrency);
};