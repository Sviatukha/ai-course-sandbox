import { useState } from 'react'
import type { FormEvent } from 'react'
import { Button } from '../Button'
import { TextField } from '../TextField'

type SignupValues = { email: string; password: string }

type SignupFormProps = {
  onSubmit?: (values: SignupValues) => void
}

type Field = 'email' | 'password' | 'confirm'
type Errors = Partial<Record<Field, string>>
type Touched = Partial<Record<Field, boolean>>

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
  const [touched, setTouched] = useState<Touched>({})

  const errors = validate(email, password, confirm)

  const markTouched = (field: Field) => setTouched((prev) => ({ ...prev, [field]: true }))

  // Ошибку показываем только после blur поля либо после сабмита.
  const errorFor = (field: Field) => (touched[field] ? errors[field] : undefined)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setTouched({ email: true, password: true, confirm: true })
    if (Object.keys(errors).length === 0) onSubmit?.({ email, password })
  }

  return (
    <form noValidate onSubmit={handleSubmit}>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={() => markTouched('email')}
        error={errorFor('email')}
      />
      <TextField
        label="Пароль"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onBlur={() => markTouched('password')}
        error={errorFor('password')}
      />
      <TextField
        label="Подтверждение пароля"
        type="password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        onBlur={() => markTouched('confirm')}
        error={errorFor('confirm')}
      />
      <Button type="submit">Зарегистрироваться</Button>
    </form>
  )
}
