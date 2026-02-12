import './App.css'
import TodoList from './components/list/todo-list'

import { Title, Card } from './styles/header'

function App() {
  return (
      <Card>
        <Title>Lista de Tarefas</Title>
        <TodoList/>
      </Card>
  )
}

export default App
