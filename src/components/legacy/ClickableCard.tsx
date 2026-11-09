type Props = { title: string; onOpen: () => void }

// Учебный «плохой» компонент: div вместо button, нет клавиатуры и роли
export function ClickableCard({ title, onOpen }: Props) {
  return (
    <div onClick={onOpen} style={{ cursor: 'pointer', color: '#bbb' }}>
      <img src="/card.png" />
      <span>{title}</span>
    </div>
  )
}
