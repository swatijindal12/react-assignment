import './App.css'
import Header from './components/Header'
import Shop from './components/Shop'
import Outdoor from './components/Outdoor'
import Product from './components/Product'
import ProductHeader from './components/ProductHeader'

function App() {
  return (
    <div className="main-container">
      <Header />
      <Shop />
      <Outdoor />
      <ProductHeader />
      <Product />
    </div>
  )
}

export default App
