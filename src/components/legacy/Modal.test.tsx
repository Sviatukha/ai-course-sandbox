import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Modal } from './Modal'

// Характеризационные тесты: фиксируют текущее поведение перед миграцией class→function.
describe('Modal', () => {
  it('ничего не рендерит, когда закрыт', () => {
    render(
      <Modal open={false} onClose={() => {}}>
        Содержимое
      </Modal>,
    )
    expect(screen.queryByText('Содержимое')).not.toBeInTheDocument()
  })

  it('показывает содержимое, когда открыт', () => {
    render(
      <Modal open onClose={() => {}}>
        Содержимое
      </Modal>,
    )
    expect(screen.getByText('Содержимое')).toBeInTheDocument()
  })

  it('вызывает onClose по клику на «x»', async () => {
    const onClose = vi.fn()
    render(
      <Modal open onClose={onClose}>
        Содержимое
      </Modal>,
    )
    await userEvent.setup().click(screen.getByText('x'))
    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
