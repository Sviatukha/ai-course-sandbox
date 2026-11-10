import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from './LoginForm'

// Характеризационные тесты: фиксируют текущее поведение перед миграцией class→function.
describe('LoginForm', () => {
  it('рендерит поля email и пароля', () => {
    render(<LoginForm />)
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Пароль')).toHaveAttribute('type', 'password')
  })

  it('показывает подсказку про email, пока поле пустое', () => {
    render(<LoginForm />)
    expect(screen.getByText('Введите email')).toBeInTheDocument()
  })

  it('скрывает подсказку после ввода email', async () => {
    render(<LoginForm />)
    await userEvent.setup().type(screen.getByPlaceholderText('Email'), 'a@b.co')
    expect(screen.getByPlaceholderText('Email')).toHaveValue('a@b.co')
    expect(screen.queryByText('Введите email')).not.toBeInTheDocument()
  })

  it('вызывает alert по клику на «Войти»', async () => {
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {})
    render(<LoginForm />)
    await userEvent.setup().click(screen.getByText('Войти'))
    expect(alertSpy).toHaveBeenCalledWith('Вход')
    alertSpy.mockRestore()
  })
})
