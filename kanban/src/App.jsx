import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Board from './components/Board'
import AddCard from './components/common/AddCard'
import { DragDropContext } from 'react-beautiful-dnd'
// import { boards } from './utils/data'

function App() {
  const [boardData, setBoardData] = useState([])

  // useEffect(() => {
  //   setBoardData(boards)

  //   return () => {}
  // }, [])

  const addCard = (title, bid) => {
    const card = {
      id: parseInt(Date.now() + Math.random() * 4),
      title,
    }

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
        id: parseInt(Date.now() + Math.random() * 10),
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
    const { source, destination } = result

    // Check if a valid drop destination exists
    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const updatedBoardData = Array.from(boardData)
    const sourceBoard = updatedBoardData.find(
      (board) => board.id.toString() === source.droppableId,
    )
    const destinationBoard = updatedBoardData.find(
      (board) => board.id.toString() === destination.droppableId,
    )

    if (sourceBoard && destinationBoard) {
      const draggedCard = sourceBoard.card[source.index]
      sourceBoard.card.splice(source.index, 1)
      destinationBoard.card.splice(destination.index, 0, draggedCard)
    }

    setBoardData(updatedBoardData)
  }

  return (
    <div className="App">
      <Header />
      <div className="outer-container">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="card-row">
            {boardData.map((item, index) => (
              <Board
                key={`${item.id}_${index}`}
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
        </DragDropContext>
      </div>
    </div>
  )
}

export default App
