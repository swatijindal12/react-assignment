import './App.css'
import Quotes from './components/Quotes'
import Header from './components/Header'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Quotes />
    </div>
  )
}

export default App
