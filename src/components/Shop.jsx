import React from 'react'
import chair from '../assets/image/chair.png'
import dotIcon from '../assets/icons8-dots-32.png'
import './Styles.css'

const Shop = () => {
  return (
    <>
      <section className="section">
        <div className="column">
          <h1>Shop</h1>
          <p>Home Furnishings</p>
          <p>Accessories</p>
          <p>Sports</p>
          <p>Clothing wear</p>
        </div>
        <div>
          <img
            src={chair}
            className="chair"
            alt="chair"
            width="600px"
            height="600px"
          />
        </div>
        <div className="column-1">
          <p className="column-version">1.0</p>
          <p>Limited Edition</p>
          <h1>White Clock</h1>
        </div>
      </section>
      <div className="dot-icon">
        <img src={dotIcon} alt="icon-dot" />
        <button>Shop Now</button>
      </div>
    </>
  )
}

export default Shop
