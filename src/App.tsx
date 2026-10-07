import { Button } from './components/Button'
import { useToggle } from './hooks/useToggle'

function App() {
  const [open, toggle] = useToggle()
  return (
    <main>
      <h1>AI Course Sandbox</h1>
      <p>Песочница для заданий курса. Задания: docs/backlog.md</p>
      <Button onClick={toggle}>{open ? 'Скрыть' : 'Показать'} подсказку</Button>
      {open && <p>Начни с docs/README.md</p>}
    </main>
  )
}

export default App
