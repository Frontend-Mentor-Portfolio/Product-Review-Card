import React from 'react'
import styles from './ProductCard.module.css'

export default function ProductCard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img
            src="images/image-product-mobile.jpg"
            alt="Perfume bottle"
            className={styles.imageMobile}
          />
          <img
            src="/images/image-product-desktop.jpg"
            alt="Perfume bottle"
            className={styles.imageDesktop}
          />
        </div>

        <div className={styles.content}>
          <p className={styles.category}>PERFUME</p>
          <h1 className={styles.title}>Gabrielle Essence Eau De Parfum</h1>
          <p className={styles.description}>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>

          <div className={styles.pricing}>
            <span className={styles.price}>$149.99</span>
            <span className={styles.oldPrice}>$169.99</span>
          </div>

          <button className={styles.addButton}>
            <img src="/images/icon-cart.svg" alt="" className={styles.cartIcon} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
