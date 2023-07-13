import React, { useState } from 'react'
import './Card.css'
import EditIcon from '../assets/edit.png'
import { Draggable } from 'react-beautiful-dnd'

const Card = (card) => {
  // console.log('card id are:', card)
  const [edit, setEdit] = useState(false)
  const [updatedTitle, setUpdatedTitle] = useState(card.card.title)

  const handleEdit = () => {
    setEdit(true)
  }

  const handleSubmitClick = () => {
    const updatedCard = {
      ...card.card,
      title: updatedTitle,
    }
    card.updateCard(updatedCard)

    setEdit(false)
  }

  return (
    <Draggable draggableId={card.card.id.toString()} index={card.index}>
      {(provided) => (
        <div
          className="card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {edit ? (
            <form className="card_edit-mode" onSubmit={handleSubmitClick}>
              <input
                className="card_input"
                value={updatedTitle}
                onChange={(e) => {
                  setUpdatedTitle(e.target.value)
                }}
              />
            </form>
          ) : (
            <div className="card_title">
              <p style={{ fontSize: '1rem' }}>{card.card.title}</p>
              <span>
                <img
                  src={EditIcon}
                  alt="Edit-Icon"
                  className="card-edit-icon"
                  onClick={handleEdit}
                />
              </span>
            </div>
          )}
        </div>
      )}
    </Draggable>
  )
}

export default Card
