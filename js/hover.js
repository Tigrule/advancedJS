const cartContent = document.querySelector('.cart__content');
let cart = ''
const cartBody = document.querySelector('.cart__body');
  document.addEventListener(
    'click', (event) => {
      if (event.target.classList.contains('cart__button')) {
       cartBody.classList.toggle('display-none');
       cart = new ProductsCart();
    } else {
        cartBody.classList.add('display-none');
        if (cart){
          // cartContent.textContent = '';
          cartContent.clear();
          cart = ''
        }
      }
    }
  )