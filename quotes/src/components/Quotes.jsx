import React, { useState, useEffect } from 'react'
import './Quotes.css'
import loader from '../assets/icons8-spinner-50.png'
import doubleQuotes from '../assets/icons8-double-quotes-30.png'
import LoaderContainer from './LoaderContainer'
import axios from 'axios'

const Quotes = () => {
  const [quoteText, setQuoteText] = useState('')
  const [quoteAuthor, setQuoteAuthor] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await axios.get('https://type.fit/api/quotes')
        const quotesData = res.data
        const randomValue = Math.floor(Math.random() * quotesData.length) // generate random value
        setQuoteText(quotesData[randomValue].text)
        setQuoteAuthor(quotesData[randomValue].author)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching quote:', error)
      }
    }

    const interval = setInterval(fetchQuote, 8000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="main">
      {isLoading ? (
        <>
          <img src={loader} alt="LoaderImg" />
        </>
      ) : (
        <div className="quotes">
          {' '}
          <img src={doubleQuotes} alt="Double-quotes" />
          <h2>{quoteText}</h2>
          <p className="author">{quoteAuthor}</p>
          <LoaderContainer />
        </div>
      )}
    </div>
  )
}

export default Quotes
