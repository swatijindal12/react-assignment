import React from 'react'
import './InputContainer.css'

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
