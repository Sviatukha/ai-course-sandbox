import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SignupForm } from './SignupForm'

async function fill(email: string, password: string, confirm: string) {
  const user = userEvent.setup()
  if (email) await user.type(screen.getByLabelText('Email'), email)
  if (password) await user.type(screen.getByLabelText('Пароль'), password)
  if (confirm) await user.type(screen.getByLabelText('Подтверждение пароля'), confirm)
  await user.click(screen.getByRole('button', { name: 'Зарегистрироваться' }))
}

describe('SignupForm', () => {
  it('не показывает ошибку, пока поле в фокусе (до blur)', async () => {
    render(<SignupForm />)
    const user = userEvent.setup()
    await user.type(screen.getByLabelText('Email'), 'bad')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('показывает ошибку email после blur', async () => {
    render(<SignupForm />)
    const user = userEvent.setup()
    await user.type(screen.getByLabelText('Email'), 'not-an-email')
    await user.tab()
    expect(screen.getByText('Некорректный email')).toBeInTheDocument()
  })

  it('показывает ошибку пустого email после blur', async () => {
    render(<SignupForm />)
    const user = userEvent.setup()
    await user.click(screen.getByLabelText('Email'))
    await user.tab()
    expect(screen.getByText('Введите email')).toBeInTheDocument()
  })

  it('показывает ошибку короткого пароля после blur', async () => {
    render(<SignupForm />)
    const user = userEvent.setup()
    await user.type(screen.getByLabelText('Пароль'), '1234567')
    await user.tab()
    expect(screen.getByText('Пароль должен содержать минимум 8 символов')).toBeInTheDocument()
  })

  it('показывает ошибку несовпадения после blur подтверждения', async () => {
    render(<SignupForm />)
    const user = userEvent.setup()
    await user.type(screen.getByLabelText('Пароль'), '12345678')
    await user.type(screen.getByLabelText('Подтверждение пароля'), '87654321')
    await user.tab()
    expect(screen.getByText('Пароли не совпадают')).toBeInTheDocument()
  })

  it('не показывает ошибку других полей при blur одного', async () => {
    render(<SignupForm />)
    const user = userEvent.setup()
    await user.type(screen.getByLabelText('Email'), 'bad')
    await user.tab()
    // Blur был только у email — ошибки пароля ещё нет.
    expect(screen.getByText('Некорректный email')).toBeInTheDocument()
    expect(screen.queryByText('Введите пароль')).not.toBeInTheDocument()
  })

  it('показывает ошибки обязательных полей при пустом сабмите', async () => {
    render(<SignupForm />)
    await fill('', '', '')
    expect(screen.getByText('Введите email')).toBeInTheDocument()
    expect(screen.getByText('Введите пароль')).toBeInTheDocument()
  })

  it('показывает ошибку при неверном формате email', async () => {
    render(<SignupForm />)
    await fill('not-an-email', 'password1', 'password1')
    expect(screen.getByText('Некорректный email')).toBeInTheDocument()
  })

  it('показывает ошибку, если пароль короче 8 символов', async () => {
    render(<SignupForm />)
    await fill('a@b.co', '1234567', '1234567')
    expect(screen.getByText('Пароль должен содержать минимум 8 символов')).toBeInTheDocument()
  })

  it('принимает пароль из 8 символов', async () => {
    render(<SignupForm />)
    await fill('a@b.co', '12345678', '12345678')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('показывает ошибку, если пароли не совпадают', async () => {
    render(<SignupForm />)
    await fill('a@b.co', '12345678', '87654321')
    expect(screen.getByText('Пароли не совпадают')).toBeInTheDocument()
  })

  it('вызывает onSubmit с email и паролем при валидных данных', async () => {
    const onSubmit = vi.fn()
    render(<SignupForm onSubmit={onSubmit} />)
    await fill('a@b.co', '12345678', '12345678')
    expect(onSubmit).toHaveBeenCalledWith({ email: 'a@b.co', password: '12345678' })
  })

  it('не вызывает onSubmit при ошибках', async () => {
    const onSubmit = vi.fn()
    render(<SignupForm onSubmit={onSubmit} />)
    await fill('a@b.co', '123', '123')
    expect(onSubmit).not.toHaveBeenCalled()
  })
})
