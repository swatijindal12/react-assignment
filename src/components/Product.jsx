import React from 'react'
import './Styles.css'
import { productData } from './productData.js'

const Product = (productItem) => {
  return (
    <div className="grid-item">
      <img
        src={productItem.productItem.image_url}
        alt={productItem.productItem.product_name}
        width="280"
        height="auto"
      />
      <div className="img-info">
        <h4>{productItem.productItem.product_name}</h4>
        <h5>{productItem.productItem.name}</h5>
      </div>
      <h6>{productItem.productItem.price}</h6>
    </div>
  )
}

const Products = () => {
  return (
    <>
      <section className="section-3">
        {productData?.map((productData) => (
          <Product key={productData.id} productItem={productData} />
        ))}
      </section>
    </>
  )
}

export default Products
