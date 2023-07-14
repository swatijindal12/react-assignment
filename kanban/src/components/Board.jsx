import React from 'react'
import './Board.css'
import More from '../assets/ellipsis.png'
import Card from './Card'
import AddCard from './common/AddCard'
import { Droppable } from 'react-beautiful-dnd'

const Board = (board) => {
  console.log('board are: ', board)
  return (
    <Droppable droppableId={board.board.id.toString()}>
      {(provided) => (
        <div
          className="board"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <div className="board-header">
            <p className="board-title">{board.board.title}</p>
            <span>
              <img src={More} alt="More-icon" className="board-more-icon" />
            </span>
          </div>
          <div className="boards_card">
            {board.board.card.map((item, index) => (
              <Card
                key={item.id}
                card={item}
                updateCard={board.updateCard}
                index={index}
              />
            ))}
            {provided.placeholder}

            <AddCard
              onSubmit={(value) => board.addCard(value, board.board?.id)}
              className="add_card_input"
            />
          </div>
        </div>
      )}
    </Droppable>
  )
}

export default Board
