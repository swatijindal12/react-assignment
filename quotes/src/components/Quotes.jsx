import React, { useState, useEffect } from 'react'
import './Quotes.css'
import loader from '../assets/icons8-spinner-50.png'
import doubleQuotes from '../assets/icons8-double-quotes-30.png'
import LoaderContainer from './LoaderContainer'
import { fetchQuotes } from '../api'

const Quotes = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [quotesData, setQuotesData] = useState([])
  const [quote, setQuote] = useState({ text: '', author: '' })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const quotesData = await fetchQuotes()
        setQuotesData(quotesData)
      } catch (error) {
        console.error('Error fetching quotes:', error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    setIsLoading(true)
    const interval = setInterval(() => {
      const randomValue = Math.floor(Math.random() * quotesData.length)
      const { text, author } = quotesData[randomValue]
      setQuote({ text, author })
      setIsLoading(false)
    }, 2000)

    return () => {
      clearInterval(interval)
    }
  }, [quotesData])

  return (
    <div className="main">
      {isLoading ? (
        <>
          <div className="spin-loader" data-testid={'spin-loader'}></div>
        </>
      ) : (
        <div className="quotes">
          {' '}
          <img src={doubleQuotes} alt="Double-quotes" />
          <h2 data-testid={'quote-text'}>{quote.text}</h2>
          <p className="author">{quote.author}</p>
          <LoaderContainer />
        </div>
      )}
    </div>
  )
}

export default Quotes
