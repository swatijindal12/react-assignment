import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../component/Header'

test('Testing Heading', () => {
  render(<Header />)

  const headerElement = screen.getByText(
    /Manual Editing for your photo is complete now./i,
  )
  expect(headerElement).toBeInTheDocument()
})

test('Testing h2 heading', () => {
  render(<Header />)

  const h2Element = screen.getByRole('heading', {
    level: 2,
  })
  expect(h2Element).toBeInTheDocument()
})
