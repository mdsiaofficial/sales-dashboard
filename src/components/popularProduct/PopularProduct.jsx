import React from 'react'
import './PopularProduct.css'
import fan from '../../assets/fan.svg'
import headphone from '../../assets/headphone.svg'
import cup from '../../assets/cup.svg'
import laptop from '../../assets/laptop.svg'
import radio from '../../assets/radio.svg'
import tshirt from '../../assets/tshirt.svg'
import more from '../../assets/more.svg'

const PopularProduct = () => {
  const products = [
    {
      icon: headphone,
      name: 'Headsheet',
      category: 'Fashion',
      author: 'Benjamin R',
      price: '$99,10',
      status: 'Available',
    },
    {
      icon: cup,
      name: 'Cup and top glass',
      category: 'Home',
      author: 'William K',
      price: '$70,20',
      status: 'Available',
    },
    {
      icon: laptop,
      name: 'Lepi oh lepi',
      category: 'Tech',
      author: 'Savanah N',
      price: '$60,00',
      status: 'Available',
    },
  ];

  return (
    <div className="popular-products">
      <h2 className="title">Popular Product</h2>
      <div className="product-table">
        <div className="table-header">
          <span className="header-item">Images</span>
          <span className="header-item">Product names</span>
          <span className="header-item">Categories</span>
          <span className="header-item">Author</span>
          <span className="header-item">Prices</span>
          <span className="header-item">Status</span>
        </div>
        <ul className="product-list">
          {products.map((product, index) => (
            <li key={index} className="product-item">
              <img src={product.icon} alt={product.name} className="product-icon" />
              <span className="product-name">{product.name}</span>
              <span className="product-category">{product.category}</span>
              <span className="product-author">{product.author}</span>
              <span className="product-price">{product.price}</span>
              <span className="product-status">{product.status}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PopularProduct
