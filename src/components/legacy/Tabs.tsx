import { Component } from 'react'

type Props = { tabs: { id: string; label: string; content: string }[] }
type State = { active: number }

// Учебный «плохой» компонент: нет ARIA-ролей tablist/tab/tabpanel, нет стрелок
export class Tabs extends Component<Props, State> {
  state = { active: 0 }

  render() {
    return (
      <div>
        <div>
          {this.props.tabs.map((t, i) => (
            <span key={t.id} onClick={() => this.setState({ active: i })}>
              {t.label}
            </span>
          ))}
        </div>
        <div>{this.props.tabs[this.state.active].content}</div>
      </div>
    )
  }
}
