import { render, screen, logRoles, act, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import Quotes from '../components/Quotes'
// import { fetchQuotes } from '../api'

// jest.mock(fetchQuotes)

describe('Testing Quotes', () => {
  //fetch quotes sample data
  const mockedQuotes = [
    { text: 'Quote 1', author: 'Author 1' },
    { text: 'Quote 2', author: 'Author 2' },
  ]

  // beforeEach(() => {
  //   fetchQuotes.mockResolvedValue(mockedQuotes)
  // })

  test('renders spin-loader correctly', () => {
    render(<Quotes />)

    const loaderElement = screen.getByTestId('spin-loader')
    expect(loaderElement).toBeInTheDocument()
  })

  test('renders text & author', async () => {
    render(<Quotes />)

    await waitFor(
      () => {
        const textElement = screen.getByTestId('quote-text')
        expect(textElement).toBeInTheDocument()
      },
      { timeout: 10000 }, // Increase the timeout to 10000ms (10 seconds)
    )
  })
})
