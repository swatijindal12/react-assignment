import React from 'react'
import './Styles.css'
import { productData } from './productData.js'

const Product = () => {
  const data = productData?.map((productItem) => (
    <div className="grid-item">
      <img
        src={productItem.image_url}
        alt={productItem.product_name}
        width="280"
        height="auto"
      />
      <div className="img-info">
        <h4>{productItem.product_name}</h4>
        <h5>{productItem.name}</h5>
      </div>
      <h6>{productItem.price}</h6>
    </div>
  ))
  return (
    <>
      <section className="section-3">{data}</section>
    </>
  )
}

export default Product
