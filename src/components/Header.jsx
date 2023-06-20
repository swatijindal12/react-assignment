import React from 'react'
import './Styles.css'
import MenuIcon from '../assets/menu.svg'
import SearchIcon from '../assets/search-icon.svg'
import CartImg from '../assets/cart.svg'

const Header = () => {
  return (
    <>
      <header className="header">
        <div>
          <img src={MenuIcon} className="icon" alt="menu icon" />
          <img src={SearchIcon} className="icon" alt="search-icon" />
        </div>
        <h1 className="title">minim</h1>
        <div>
          <h2>ACCOUNT</h2>
          <img src={CartImg} alt="cart" />
        </div>
      </header>
    </>
  )
}

export default Header
