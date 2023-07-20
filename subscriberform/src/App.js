import './App.css'
import LeftContainer from './components/LeftContainer'
import RightContainer from './components/RightContainer'
import Settings from './components/Settings'

function App() {
  return (
    <>
      <Settings />
      <div className="main-container">
        <LeftContainer />
        <RightContainer />
      </div>
    </>
  )
}

export default App
