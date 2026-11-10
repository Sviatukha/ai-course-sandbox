import { render, screen } from '@testing-library/react'
import { Badge } from './Badge'

describe('Badge', () => {
  it('отображает переданный текст', () => {
    render(<Badge>Новый</Badge>)
    expect(screen.getByText('Новый')).toBeInTheDocument()
  })

  it('применяет класс варианта', () => {
    render(<Badge variant="success">Готово</Badge>)
    expect(screen.getByText('Готово')).toHaveClass('badge', 'badge--success')
  })

  it('использует variant info по умолчанию', () => {
    render(<Badge>Инфо</Badge>)
    expect(screen.getByText('Инфо')).toHaveClass('badge--info')
  })
})
