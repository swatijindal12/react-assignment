import React, { useState, useEffect } from 'react'
import './Quotes.css'
import loader from '../assets/icons8-spinner-50.png'
import doubleQuotes from '../assets/icons8-double-quotes-30.png'
import LoaderContainer from './LoaderContainer'
import axios from 'axios'

const Quotes = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [quotesData, setQuotesData] = useState([])
  const [quote, setQuote] = useState({ text: '', author: '' })

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const res = await axios.get('https://type.fit/api/quotes')
        const quotesData = res.data
        setQuotesData(quotesData)
      } catch (error) {
        console.error('Error fetching quotes:', error)
      }
    }

    fetchQuotes()
  }, [])

  useEffect(() => {
    setIsLoading(true)
    const interval = setInterval(() => {
      const randomValue = Math.floor(Math.random() * quotesData.length)
      const { text, author } = quotesData[randomValue]
      setQuote({ text, author })
      setIsLoading(false)
      console.log('Quote text is:', quote)
    }, 8000)

    return () => {
      clearInterval(interval)
    }
  }, [quotesData])

  return (
    <div className="main">
      {isLoading ? (
        <>
          <div className="spin-loader"></div>
        </>
      ) : (
        <div className="quotes">
          {' '}
          <img src={doubleQuotes} alt="Double-quotes" />
          <h2>{quote.text}</h2>
          <p className="author">{quote.author}</p>
          <LoaderContainer />
        </div>
      )}
    </div>
  )
}

export default Quotes
