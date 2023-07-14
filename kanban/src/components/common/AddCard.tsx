import React, { useState } from 'react'
import Plus from '../../assets/plus.png'
import './AddCard.css'
import { X } from 'react-feather'

interface AddCardProps {
  text?: string
  placeholder?: string
  onSubmit: (value: string) => void
  className: string
}

const AddCard = ({ text, placeholder, onSubmit, className }: AddCardProps) => {
  const [showEdit, setShowEdit] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (onSubmit) {
      onSubmit(inputValue)
    }
    setShowEdit(false)
    setInputValue('')
  }

  return (
    <div className="addCard">
      {showEdit ? (
        <form className={`add_form_${className}`} onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder={placeholder || 'Add an item'}
            className={className}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <X onClick={() => setShowEdit(false)} />
        </form>
      ) : (
        <div
          className={`add_card_${className}`}
          onClick={() => setShowEdit(true)}
        >
          <span>
            <img src={Plus} alt="plus-icon" />
          </span>
          <p>{text || 'Add a card'}</p>
        </div>
      )}
    </div>
  )
}

export default AddCard
