import { useState } from 'react'
import './Button.css'
import BeforeImage from '../assets/before.png'
import AfterImage from '../assets/after.png'

const Button = () => {
  const [showImage, setShowImage] = useState<Boolean>(false)
  const colors = [
    'lightgrey',
    'red',
    'blue',
    'green',
    'yellow',
    'orange',
    'purple',
    'pink',
  ]
  const [selectedColor, setSelectedColor] = useState<string>('')

  const handleColorClick = (color: string) => {
    setSelectedColor(color)
  }

  return (
    <div>
      <div className="button-tag">
        <button
          onClick={() => {
            setShowImage(false)
          }}
          className="text-button"
        >
          Before
        </button>
        <button
          onClick={() => {
            setShowImage(true)
          }}
          className="text-button"
        >
          After
        </button>
        <div className="color-box">
          {colors.map((color) => (
            <button
              key={color}
              className={`color-swatch ${
                selectedColor === color ? 'selected' : ''
              }`}
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></button>
          ))}
        </div>
      </div>

      <div className="image">
        {showImage ? (
          <img
            src={AfterImage}
            style={{
              background: selectedColor,
              width: '650px',
            }}
          />
        ) : (
          <img src={BeforeImage} />
        )}{' '}
      </div>
      <div className="button-class">
        <button
          className="download-button"
          onClick={() => {
            window.open(`${AfterImage}?bg=${selectedColor}`)
          }}
        >
          Download
        </button>
        <button className="download-button">Share</button>
      </div>
    </div>
  )
}

export default Button
