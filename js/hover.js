const cartContent = document.querySelector('.cart__content');
let cart = ''
const cartBody = document.querySelector('.cart__body');
  document.addEventListener(
    'click', (event) => {
      if (event.target.classList.contains('cart__button')&& !Boolean(cart)) {
       cartBody.classList.remove('display-none');
       cartContent.textContent = '';
       cart = new ProductsCart();
    } else {
      cartBody.classList.add('display-none');
      cart = ''
    }
  }
)