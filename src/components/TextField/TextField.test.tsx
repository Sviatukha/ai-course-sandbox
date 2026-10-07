import { render, screen } from '@testing-library/react'
import { TextField } from './TextField'

describe('TextField', () => {
  it('связывает label с input', () => {
    render(<TextField label="Имя" />)
    expect(screen.getByLabelText('Имя')).toBeInTheDocument()
  })

  it('показывает ошибку и помечает поле невалидным', () => {
    render(<TextField label="Имя" error="Обязательное поле" />)
    expect(screen.getByRole('alert')).toHaveTextContent('Обязательное поле')
    expect(screen.getByLabelText('Имя')).toBeInvalid()
  })
})
