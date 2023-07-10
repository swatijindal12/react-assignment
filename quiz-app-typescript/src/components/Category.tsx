import React, { useState } from 'react'
import './Category.css'
import Header from './Header'
import { useNavigate } from 'react-router-dom'

const Category: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>()
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate(`/quiz-question/${selectedCategory}`)
  }

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value)
    setSelectedCategory(value)
  }

  return (
    <div>
      <Header />
      <form className="form">
        <label>Select category:</label>
        <select
          className="form-control"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="any">Any Category</option>
          <option value="9">General Knowledge</option>
          <option value="17">Science & Nature</option>
          <option value="18">Science: Computers</option>
          <option value="19">Science: Mathematics</option>
          <option value="22">Geography</option>
          <option value="30">Science: Gadgets</option>
        </select>
      </form>
      <div className="buttonClass">
        <button onClick={handleSubmit}>Submit</button>
        <button>Close</button>
      </div>
    </div>
  )
}

export default Category
