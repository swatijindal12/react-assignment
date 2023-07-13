import React, { useState } from 'react'
import Plus from '../assets/plus.png'
import './AddCard.css'
import { X } from 'react-feather'

const AddCard = (props) => {
  const [showEdit, setShowEdit] = useState(false)
  const [inputValue, setInputValue] = useState('')
  return (
    <div className="addCard">
      {showEdit ? (
        <form
          className={`add_form_${props.className}`}
          onSubmit={(e) => {
            e.preventDefault()
            if (props.onSubmit) props.onSubmit(inputValue)
            setShowEdit(false)
            setInputValue('')
          }}
        >
          <input
            type="text"
            placeholder={props.placeholder || 'Add a item'}
            className={props.className}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <X
            onClick={() => {
              setShowEdit(false)
            }}
          />
        </form>
      ) : (
        <div
          className={`add_card_${props.className}`}
          onClick={() => setShowEdit(true)}
        >
          <span>
            <img src={Plus} alt="plus-icon" />
          </span>
          <p>{props.text || 'Add a card'}</p>
        </div>
      )}
    </div>
  )
}

export default AddCard
