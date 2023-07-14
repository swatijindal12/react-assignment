import { useState } from 'react'
import './Card.css'
import EditIcon from '../assets/edit.png'
import { Draggable } from 'react-beautiful-dnd'
import { CardModel } from '../utils/model'

interface CardProps {
  card: CardModel
  updateCard: (updatedCard: CardModel) => void
  index: number
}

const Card = ({ card, updateCard, index }: CardProps) => {
  const [edit, setEdit] = useState(false)
  const [updatedTitle, setUpdatedTitle] = useState(card.title)

  const handleEdit = () => {
    setEdit(true)
  }

  const handleSubmit = () => {
    const updatedCard: CardModel = {
      ...card,
      title: updatedTitle,
    }
    updateCard(updatedCard)

    setEdit(false)
  }

  return (
    <Draggable draggableId={card.id.toString()} index={index}>
      {(provided) => (
        <div
          className="card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {edit ? (
            <form className="card_edit-mode" onSubmit={handleSubmit}>
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
              <p style={{ fontSize: '1rem' }}>{card.title}</p>
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
