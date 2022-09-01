"use strict"

function addToCart() {
  console.log(event.target);
}

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';


class ProductsItem {
    constructor(product, img = 'img/good_img.png') {
      this.title = product.product_name;
      this.id = product.id_product;
      this.price = product.price;
      this.image = img;
  }

  render() {
    return `<div class="goods-item"  onclick=addToCart(${this.id}, this)">
      <div class="goods__img-container">
        <img src="${this.image}" class="goods__img">
      </div>
      <h3 class="goods__title">${this.title}</h3>
      <p class="goods__price">${this.price}</p>

      <button class="goods__button">В корзину</button>
    </div>`;
  }
}

class ProductsList {
  constructor(container = '.goods-list', source = '/catalogData.json') {
    this.goods = [];
    this.container = container;
    this.source = source;
    this._fetchProducts()
      .then(data => {
        this.goods = data;
        this.render();
      } )
    }

  _fetchProducts() {
    return fetch(`${API}${this.source}`)
      .then(result => result.json())
      .catch(error => console.log(error));
  }
  render() {
    const block = document.querySelector(this.container);
    this.goods.forEach(good => {
    const goodsItem = new ProductsItem(good);
    block.insertAdjacentHTML('beforeend', goodsItem.render())
    });
  }
  summAllGoods() {
    return this.goods.reduce((summ, item) => summ + item.price, 0)
  }
}

class ProductsCart extends ProductsList {
  constructor(container = '.cart__content', source = '/getBasket.json' ) {
    super(container, source)
    this.amount;
    this.countGoods;
  }

  render() {
    const block = document.querySelector(this.container);
    this.goods.forEach(good => {
    const goodsItem = new CartProduct(good);
    block.insertAdjacentHTML('beforeend', goodsItem.render())
    });
  }

  _fetchProducts() {
    return fetch(`${API}${this.source}`)
      .then(result => result.json())
      .then(obj => {
        this.amount = obj.amount;
        this.countGoods = obj.countGoods;
        return obj.contents;
      })
      .catch(error => console.log(error));
  }
  add(product, number = 1) {
    this.products.push(product)
  }
  GetTotalPrice (){}
  Buy(){}
  delete(id){}
  clear(){}
}

class CartProduct extends ProductsItem {
  constructor(product, quantity = 1){
    super(product)
    this.quantity = quantity;
  }

  render() {
    return `<div class="cart__item">
      <div class="goods__img-container">
        <img src="${this.image}" class="goods__img">
      </div>
      <h3 class="goods__title">${this.title}</h3>
      <p class="goods__price">${this.price}</p>
      <div class="quantity">
        <span class="cart__quantity">${this.quantity}</span>
        в корзине
      <div>
    </div>`;
  }

  deleteFromProductsCart(){}
  addOneMore(){}
  subtractOneMore(){}
}

  let list = new ProductsList();
  console.log(list.summAllGoods());

  

    // _fetchProducts() {
  //   this.goods = [
  //     { title: 'Shirt', price: 150, image: 'img/good_img.png' },
  //     { title: 'Socks', price: 50, image: 'img/good_img.png' },
  //     { title: 'Jacket', price: 350, image: 'img/good_img.png' },
  //     { title: 'Shoes', price: 250, image: 'img/good_img.png' },
  //     { title: 'Правый товар', price: 0, 
  //       image:'img/depositphotos_10182313-stock-photo-hand-symbol.webp' },
  //     ];
  // }