import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom' // Import the jest-dom library to access expect(...).toBeInTheDocument

import Header from '../components/Header'

test('Testing Heading', () => {
  render(<Header />)

  const element = screen.getByRole('heading')
  expect(element).toBeInTheDocument()
})
