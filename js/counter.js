// for one lement

// const btnMinus = document.querySelector('[data-action="minus"]');
// const btnPlus = document.querySelector('[data-action="plus"]');
// const counter = document.querySelector('[data-counter]');


// btnPlus.addEventListener('click', function() {
//   counter.innerText = ++counter.innerText;
// })

// btnMinus.addEventListener('click', function() {
//   if (counter.innerText > 1)
//   counter.innerText = --counter.innerText;;
// })

// for all elements

window.addEventListener('click', function(e) {
  if (e.target.dataset.action === 'plus') {
    const counterWrapper = e.target.closest('.counter-wrapper');
    const counter = counterWrapper.querySelector('[data-counter]');
    counter.innerText = ++counter.innerText;
  } 
});

window.addEventListener('click', function(e) {
  if (e.target.dataset.action === 'minus') {
    const counterWrapper = e.target.closest('.counter-wrapper');
    const counter = counterWrapper.querySelector('[data-counter]');
    if (counter.innerText > 1) {
      counter.innerText = --counter.innerText;
    }
  }
}); 
