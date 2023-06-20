import React from 'react'
import './Styles.css'
import { shopData } from './shopData'

const Outdoor = () => {
  const data = shopData.map((shopItem) => (
    <div className="outer-container">
      <h6>{shopItem.value}</h6>
      <div>
        <p className="outdoor">{shopItem.type}</p>
        <p className="shop-outdoor">SHOP</p>
      </div>
      <img src={shopItem.image_url} alt="imageA" width="100%" height="550" />
      <a className="img-indoor-shop-link" href="#img">
        Shop {shopItem.type}
      </a>
    </div>
  ))
  return (
    <>
      <section className="section-2">{data}</section>
      <div className="container">
        <div className="popular-container">
          <h2>Popular</h2>
          <h5 className="h5">SHOP</h5>
        </div>
        <h4>Previous | Next</h4>
      </div>
    </>
  )
}

export default Outdoor
