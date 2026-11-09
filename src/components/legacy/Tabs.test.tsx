import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Tabs } from './Tabs'

const tabs = [
  { id: 'a', label: 'Первая', content: 'Контент первой' },
  { id: 'b', label: 'Вторая', content: 'Контент второй' },
]

// Характеризационные тесты: фиксируют текущее поведение перед миграцией class→function.
describe('Tabs', () => {
  it('рендерит заголовки всех вкладок', () => {
    render(<Tabs tabs={tabs} />)
    expect(screen.getByText('Первая')).toBeInTheDocument()
    expect(screen.getByText('Вторая')).toBeInTheDocument()
  })

  it('по умолчанию показывает содержимое первой вкладки', () => {
    render(<Tabs tabs={tabs} />)
    expect(screen.getByText('Контент первой')).toBeInTheDocument()
    expect(screen.queryByText('Контент второй')).not.toBeInTheDocument()
  })

  it('переключает содержимое по клику на вкладку', async () => {
    render(<Tabs tabs={tabs} />)
    await userEvent.setup().click(screen.getByText('Вторая'))
    expect(screen.getByText('Контент второй')).toBeInTheDocument()
    expect(screen.queryByText('Контент первой')).not.toBeInTheDocument()
  })
})
