import { useState } from 'react'
import type { FormEvent } from 'react'
import { Button } from '../Button'
import { TextField } from '../TextField'

type SignupValues = { email: string; password: string }

type SignupFormProps = {
  onSubmit?: (values: SignupValues) => void
}

type Errors = { email?: string; password?: string; confirm?: string }

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PASSWORD_LENGTH = 8

function validate(email: string, password: string, confirm: string): Errors {
  const errors: Errors = {}
  if (!email) errors.email = 'Введите email'
  else if (!EMAIL_RE.test(email)) errors.email = 'Некорректный email'

  if (!password) errors.password = 'Введите пароль'
  else if (password.length < MIN_PASSWORD_LENGTH) {
    errors.password = `Пароль должен содержать минимум ${MIN_PASSWORD_LENGTH} символов`
  }

  if (confirm !== password) errors.confirm = 'Пароли не совпадают'
  return errors
}

export function SignupForm({ onSubmit }: SignupFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [errors, setErrors] = useState<Errors>({})

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(email, password, confirm)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) onSubmit?.({ email, password })
  }

  return (
    <form noValidate onSubmit={handleSubmit}>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
      />
      <TextField
        label="Пароль"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
      />
      <TextField
        label="Подтверждение пароля"
        type="password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        error={errors.confirm}
      />
      <Button type="submit">Зарегистрироваться</Button>
    </form>
  )
}
