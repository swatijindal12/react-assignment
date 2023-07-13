import React from 'react'
import './Board.css'
import More from '../assets/ellipsis.png'
import Card from './Card'
import AddCard from './AddCard'
import { Droppable } from 'react-beautiful-dnd'

const Board = (board) => {
  return (
    <div className="board">
      <div className="board-header">
        <p className="board-title">{board.board.title}</p>
        <span>
          <img src={More} alt="More-icon" className="board-more-icon" />
        </span>
      </div>
      <Droppable droppableId={board.board.id.toString()}>
        {(provided) => (
          <div
            className="boards_card"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {board.board.card.map((item, index) => (
              <Card
                key={item.id}
                card={item}
                updateCard={board.updateCard}
                index={index}
              />
            ))}

            <AddCard
              onSubmit={(value) => board.addCard(value, board.board?.id)}
              className="add_card_input"
            />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default Board
