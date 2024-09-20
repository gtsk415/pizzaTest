const cartWrapper = document.querySelector('.cart-wrapper');

window.addEventListener('click', function(e) {
  if (e.target.hasAttribute('data-cart')) {
    const card = e.target.closest('.card');

    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector('.product-img').getAttribute('src'),
      title: card.querySelector('.card__title').innerText,
      itemsInBox: card.querySelector('.card__descr').innerText,
      weight: card.querySelector('.price__weight').innerText,
      currency: card.querySelector('.price__currency').innerText,
      counter: card.querySelector('[data-counter]').innerText,

    };


    const cartHtml = `<div class="cart-item" data-id=${productInfo.id}>
    <div class="cart-item__img">
      <img src=${productInfo.imgSrc} alt="">
    </div>
    <div class="cart-item__content">
      <div class="cart-item__desc">
        <div class="cart-item__title">${productInfo.title}</div>
        <div class="cart-item__weight">${productInfo.weight}</div>

        <!-- cart-item__details -->
        <div class="cart-item__details">

          <div class="items items--small counter-wrapper">
            <div class="counter__control" data-action="minus">-</div>
            <div class="counter__current" data-counter="">${productInfo.counter}</div>
            <div class="counter__control" data-action="plus">+</div>
          </div>

          <div class="price">
            <div class="price__currency">${productInfo.currency}</div>
          </div>

        </div>
        <!-- // cart-item__details -->

      </div>
    </div>
  </div>`;

    cartWrapper.insertAdjacentHTML('beforeend', cartHtml);
  };

})
