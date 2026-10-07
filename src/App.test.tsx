import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App', () => {
  it('показывает подсказку по клику', async () => {
    render(<App />)
    await userEvent.click(screen.getByRole('button', { name: /показать/i }))
    expect(screen.getByText(/docs\/README.md/)).toBeInTheDocument()
  })
})
