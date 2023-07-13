import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Board from './components/Board'
import AddCard from './components/AddCard'
import { DragDropContext } from 'react-beautiful-dnd'

function App() {
  const [boardData, setBoardData] = useState([
    {
      id: Date.now() + Math.random(),
      title: 'To do',
      card: [
        {
          id: Date.now() + Math.random() * 4,
          title: 'Card 1',
        },
        {
          id: Date.now() + Math.random() * 4,
          title: 'Card 2',
        },
        {
          id: Date.now() + Math.random() * 4,
          title: 'Card 3',
        },
      ],
    },
  ])

  const addCard = (title, bid) => {
    const card = {
      id: Date.now() + Math.random() * 4,
      title,
    }

    console.log('board id is:', boardData, bid)

    const index = boardData.findIndex((item) => item.id === bid)
    if (index < 0) return

    const tempBoard = [...boardData]
    tempBoard[index].card.push(card)
    setBoardData(tempBoard)
  }

  const addBoard = (title) => {
    setBoardData([
      ...boardData,
      {
        id: Date.now() + Math.random(),
        title,
        card: [],
      },
    ])
  }

  const updateCard = (updatedCard) => {
    const updatedBoardData = boardData.map((board) => {
      const updatedCardList = board.card.map((card) =>
        card.id === updatedCard.id ? updatedCard : card,
      )
      return { ...board, card: updatedCardList }
    })
    setBoardData(updatedBoardData)
  }

  const onDragEnd = (result) => {
    console.log('result are:', result)
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <Header />
        <div className="outer-container">
          <div className="card-row">
            {boardData.map((item) => (
              <Board
                key={item.id}
                board={item}
                addCard={addCard}
                updateCard={updateCard}
              />
            ))}

            <AddCard
              text="Add another list"
              placeholder="Add another list"
              onSubmit={(value) => addBoard(value)}
              className="add_board_input"
            />
          </div>
        </div>
      </div>
    </DragDropContext>
  )
}

export default App
