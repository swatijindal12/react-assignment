import React from 'react'
import './Styles.css'

const ProductHeader = () => {
  return (
    <div className="container">
      <div className="popular-container">
        <h2>Popular</h2>
        <h5 className="h5">SHOP</h5>
      </div>
      <div className="prevNextAnchor">
        <a>Previous </a>
        <a>|</a>
        <a> Next</a>
      </div>
    </div>
  )
}

export default ProductHeader
