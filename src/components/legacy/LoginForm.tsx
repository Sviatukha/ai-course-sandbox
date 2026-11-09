import { useState } from 'react'

// Учебный «плохой» компонент: input без label, ошибка без aria, автофокус
export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoFocus
      />
      <input
        placeholder="Пароль"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div onClick={() => alert('Вход')}>Войти</div>
      {!email && <span style={{ color: 'red' }}>Введите email</span>}
    </form>
  )
}
