import React from 'react'
import './Styles.css'
import { shopData } from './shopData'

const Featured = (shopItem) => {
  return (
    <div className="outer-container">
      <h6>{shopItem.shopItem.value}</h6>
      <div>
        <p className="outdoor">{shopItem.shopItem.type}</p>
        <p className="shop-outdoor">SHOP</p>
      </div>
      <img
        src={shopItem.shopItem.image_url}
        alt="imageA"
        width="100%"
        height="auto"
      />
      <a className="img-indoor-shop-link" href="#img">
        Shop {shopItem.shopItem.type}
      </a>
    </div>
  )
}

const Outdoor = () => {
  return (
    <>
      <section className="section-2">
        {shopData.map((shopItem) => (
          <Featured key={shopItem.id} shopItem={shopItem} />
        ))}
      </section>
    </>
  )
}

export default Outdoor
