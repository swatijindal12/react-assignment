import './Board.css'
import More from '../assets/ellipsis.png'
import Card from './Card'
import AddCard from './common/AddCard'
import { Droppable } from 'react-beautiful-dnd'
import { BoardModel, CardModel } from '../utils/model'

interface BoardProps {
  board: BoardModel
  addCard: (title: string, bid: number) => void
  updateCard: (updatedCard: CardModel) => void
}

const Board = ({ board, addCard, updateCard }: BoardProps) => {
  return (
    <Droppable droppableId={board.id.toString()}>
      {(provided) => (
        <div
          className="board"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <div className="board-header">
            <p className="board-title">{board.title}</p>
            <span>
              <img src={More} alt="More-icon" className="board-more-icon" />
            </span>
          </div>
          <div className="boards_card">
            {board.card.map((item, index) => (
              <Card
                key={item.id}
                card={item}
                updateCard={updateCard}
                index={index}
              />
            ))}
            {provided.placeholder}

            <AddCard
              onSubmit={(value: string) => addCard(value, board.id)}
              className="add_card_input"
            />
          </div>
        </div>
      )}
    </Droppable>
  )
}

export default Board
