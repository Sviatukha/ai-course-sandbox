import { useState } from 'react'

type Props = { tabs: { id: string; label: string; content: string }[] }

// Учебный «плохой» компонент: нет ARIA-ролей tablist/tab/tabpanel, нет стрелок
export function Tabs({ tabs }: Props) {
  const [active, setActive] = useState(0)

  return (
    <div>
      <div>
        {tabs.map((t, i) => (
          <span key={t.id} onClick={() => setActive(i)}>
            {t.label}
          </span>
        ))}
      </div>
      <div>{tabs[active].content}</div>
    </div>
  )
}
