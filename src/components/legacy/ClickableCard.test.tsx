import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ClickableCard } from './ClickableCard'

// Характеризационные тесты: фиксируют текущее поведение перед миграцией class→function.
describe('ClickableCard', () => {
  it('отображает заголовок', () => {
    render(<ClickableCard title="Карточка" onOpen={() => {}} />)
    expect(screen.getByText('Карточка')).toBeInTheDocument()
  })

  it('рендерит картинку', () => {
    const { container } = render(<ClickableCard title="Карточка" onOpen={() => {}} />)
    expect(container.querySelector('img')).toBeInTheDocument()
  })

  it('вызывает onOpen по клику', async () => {
    const onOpen = vi.fn()
    render(<ClickableCard title="Карточка" onOpen={onOpen} />)
    await userEvent.setup().click(screen.getByText('Карточка'))
    expect(onOpen).toHaveBeenCalledTimes(1)
  })
})
