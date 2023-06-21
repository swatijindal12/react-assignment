import React, { useState } from 'react'
import './Styles.css'
import Envelope from '../assets/envelope-solid.svg'

const InputContainer = ({
  imageSrc,
  altText,
  inputType,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <>
      <div className="email-container">
        <img src={imageSrc} alt={altText} width="20px" height="20px" />
        <input
          placeholder={placeholder}
          type={inputType}
          value={value}
          onChange={onChange}
          required
        />
      </div>
    </>
  )
}

export default InputContainer
