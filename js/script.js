"use strict"

const goods = [
  { title: 'Shirt', price: 150, image: 'img/good_img.png' },
  { title: 'Socks', price: 50, image: 'img/good_img.png' },
  { title: 'Jacket', price: 350, image: 'img/good_img.png' },
  { title: 'Shoes', price: 250, image: 'img/good_img.png' },
  { title: 'Правый товар', price: 'Бесплатно', 
    image:'img/depositphotos_10182313-stock-photo-hand-symbol.webp' },
  ];

const renderGoodsItem = (good) => {
  return `<div class="goods-item">
    <div class="goods__img-container">
      <img src="${good.image}" class="goods__img">
    </div>
    <h3 class="goods__title">${good.title}</h3>
    <p class="goods__price">${good.price}</p>
    <button>Добавить</button>
  </div>`;
  };
  const renderGoodsList = (list) => {
  let goodsList = list.map(item => renderGoodsItem(item));
  document.querySelector('.goods-list').innerHTML = goodsList.join('')
  //Был ещё вариант про reduce, потом кааак понял про join
  }
  renderGoodsList(goods);
    