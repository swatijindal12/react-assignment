export const fetchQuotes = async () => {
  try {
    const response = await fetch('https://type.fit/api/quotes')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const quotesData = await response.json()
    return quotesData
  } catch (error) {
    console.error('Error fetching quotes:', error)
    return error
  }
}
