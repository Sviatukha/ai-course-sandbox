import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button', () => {
  it('вызывает onClick', async () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Сохранить</Button>)
    await userEvent.click(screen.getByRole('button', { name: 'Сохранить' }))
    expect(onClick).toHaveBeenCalledOnce()
  })

  it('не кликается в disabled', async () => {
    const onClick = vi.fn()
    render(
      <Button onClick={onClick} disabled>
        Сохранить
      </Button>,
    )
    await userEvent.click(screen.getByRole('button'))
    expect(onClick).not.toHaveBeenCalled()
  })
})
