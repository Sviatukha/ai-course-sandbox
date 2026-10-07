import { Component } from 'react'

type Props = { open: boolean; onClose: () => void; children: React.ReactNode }

// Учебный «плохой» компонент: нет role="dialog", фокус-трапа, закрытия по Escape
export class Modal extends Component<Props> {
  render() {
    if (!this.props.open) return null
    return (
      <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.5)' }}>
        <div style={{ background: '#fff', margin: 40 }}>
          <a onClick={this.props.onClose}>x</a>
          {this.props.children}
        </div>
      </div>
    )
  }
}
