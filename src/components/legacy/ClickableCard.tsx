import { Component } from 'react'

type Props = { title: string; onOpen: () => void }

// Учебный «плохой» компонент: div вместо button, нет клавиатуры и роли
export class ClickableCard extends Component<Props> {
  render() {
    return (
      <div onClick={this.props.onOpen} style={{ cursor: 'pointer', color: '#bbb' }}>
        <img src="/card.png" />
        <span>{this.props.title}</span>
      </div>
    )
  }
}
