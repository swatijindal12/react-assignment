import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from '../component/Button'
import user from '@testing-library/user-event'
import { act } from 'react-dom/test-utils' // Import act from react-dom/test-utils

describe('Button Testing', () => {
  test('Testing Before & After button', () => {
    render(<Button />)

    const beforeButton = screen.getByRole('button', {
      name: 'Before',
    })
    expect(beforeButton).toBeInTheDocument()

    const afterButton = screen.getByRole('button', {
      name: 'After',
    })
    expect(afterButton).toBeInTheDocument()
  })

  test('render after image after clicking on after button', async () => {
    render(<Button />)

    const afterButton = screen.getByRole('button', {
      name: 'After',
    })

    await act(async () => {
      await user.click(afterButton)
    })

    const altAfterImg = screen.getByAltText('After-Image')
    expect(altAfterImg).toBeInTheDocument()
  })

  test('render before image after clicking on after button', async () => {
    render(<Button />)

    const beforeButton = screen.getByRole('button', {
      name: 'Before',
    })

    await act(async () => {
      await user.click(beforeButton)
    })

    const altBeforeImg = screen.getByAltText('Before-Image')
    expect(altBeforeImg).toBeInTheDocument()
  })

  test('renders correct background Color on after image', async () => {
    render(<Button />)

    const redColorButton = screen.getByTestId('color-button-red')
    user.click(redColorButton)

    const afterButton = screen.getByRole('button', {
      name: 'After',
    })

    await act(async () => {
      await user.click(afterButton)
    })

    const afterImage = screen.getByAltText('After-Image')

    // Get the computed style of the image
    const imageStyle = window.getComputedStyle(afterImage)
    const backgroundColor = imageStyle
      .getPropertyValue('background-color')
      .trim()

    // Verify if the image background color matches the selected color
    expect(backgroundColor).toBe('red')
  })
})
