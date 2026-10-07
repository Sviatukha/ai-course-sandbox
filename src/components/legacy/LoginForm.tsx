import { Component } from 'react'

type State = { email: string; password: string }

// Учебный «плохой» компонент: input без label, ошибка без aria, автофокус
export class LoginForm extends Component<object, State> {
  state = { email: '', password: '' }

  render() {
    return (
      <form>
        <input
          placeholder="Email"
          value={this.state.email}
          onChange={(e) => this.setState({ email: e.target.value })}
          autoFocus
        />
        <input
          placeholder="Пароль"
          type="password"
          value={this.state.password}
          onChange={(e) => this.setState({ password: e.target.value })}
        />
        <div onClick={() => alert('Вход')}>Войти</div>
        {!this.state.email && <span style={{ color: 'red' }}>Введите email</span>}
      </form>
    )
  }
}
