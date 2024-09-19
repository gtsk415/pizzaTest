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

  let counter;

  if (e.target.dataset.action === 'plus' || e.target.dataset.action === 'minus') {
    const counterWrapper = e.target.closest('.card__counter');
    counter = counterWrapper.querySelector('[data-counter]');
  }

  if (e.target.dataset.action === 'plus') {
    counter.innerText = ++counter.innerText;
  } 

  if (e.target.dataset.action === 'minus') {
    if (counter.innerText > 1) {
      counter.innerText = --counter.innerText;
    }
  }
});
 
