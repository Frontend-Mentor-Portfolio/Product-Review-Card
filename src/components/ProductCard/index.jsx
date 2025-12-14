import React from 'react';
import productImageDesktop from '../../assets/images/image-product-desktop.jpg';
import productImageMobile from '../../assets/images/image-product-mobile.jpg';
import cartIcon from '../../assets/images/icon-cart.svg';

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-image">
        <picture>
          <source media="(min-width: 641px)" srcSet={productImageDesktop} />
          <img src={productImageMobile} alt="Gabrielle Essence Eau De Parfum" />
        </picture>
      </div>
      <div className="product-details">
        <span className="product-category">PERFUME</span>
        <h1 className="product-title">Gabrielle Essence Eau De Parfum</h1>
        <p className="product-description">
          A floral, solar and voluptuous interpretation composed by Olivier Polge, 
          Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="price-container">
          <span className="current-price">$149.99</span>
          <span className="original-price">$169.99</span>
        </div>
        <button className="add-to-cart-btn">
          <img src={cartIcon} alt="" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
