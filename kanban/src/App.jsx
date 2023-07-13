import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Board from './components/Board'
import AddCard from './components/AddCard'
import { DragDropContext } from 'react-beautiful-dnd'

function App() {
  const [boardData, setBoardData] = useState([
    {
      id: parseInt(Date.now() + Math.random() * 10),
      title: 'To do',
      card: [
        {
          id: parseInt(Date.now() + Math.random() * 4),
          title: 'Card 1',
        },
        {
          id: parseInt(Date.now() + Math.random() * 4),
          title: 'Card 2',
        },
        {
          id: parseInt(Date.now() + Math.random() * 4),
          title: 'Card 3',
        },
      ],
    },
  ])

  const addCard = (title, bid) => {
    const card = {
      id: parseInt(Date.now() + Math.random() * 4),
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

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    let updateBoardData = [...boardData]
    let addData

    if (source.droppableId === destination.droppableId) {
      const boardIndex = updateBoardData.findIndex(
        (item) => item.id === parseInt(source.droppableId),
      )
      addData = updateBoardData[boardIndex].card.splice(source.index, 1)[0]
      updateBoardData[boardIndex].card.splice(destination.index, 0, addData)
    } else {
      const sourceBoardIndex = updateBoardData.findIndex(
        (item) => item.id === parseInt(source.droppableId),
      )
      const destinationBoardIndex = updateBoardData.findIndex(
        (item) => item.id === parseInt(destination.droppableId),
      )
      addData = updateBoardData[sourceBoardIndex].card.splice(
        source.index,
        1,
      )[0]
      updateBoardData[destinationBoardIndex].card.splice(
        destination.index,
        0,
        addData,
      )
    }

    setBoardData(updateBoardData)
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
