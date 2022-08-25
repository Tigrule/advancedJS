"use strict"

class ProductsItem {
    constructor(product) {
    this.title = product.title;
    this.id = product.id;
    this.price = product.price;
    this.image = product.image;
  }
  render() {
    return `<div class="goods-item">
      <div class="goods__img-container">
        <img src="${this.image}" class="goods__img">
      </div>
      <h3 class="goods__title">${this.title}</h3>
      <p class="goods__price">${this.price}</p>
      <button>Добавить</button>
    </div>`;
  }
}

class ProductsList {
  constructor(container = '.goods-list') {
    this.goods = [];
    this.container = container;
    this._fetchProducts();
    this.render()
  }
  _fetchProducts() {
    this.goods = [
      { title: 'Shirt', price: 150, image: 'img/good_img.png' },
      { title: 'Socks', price: 50, image: 'img/good_img.png' },
      { title: 'Jacket', price: 350, image: 'img/good_img.png' },
      { title: 'Shoes', price: 250, image: 'img/good_img.png' },
      { title: 'Правый товар', price: 0, 
        image:'img/depositphotos_10182313-stock-photo-hand-symbol.webp' },
      ];
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
  let list = new ProductsList();
  console.log(list.summAllGoods());