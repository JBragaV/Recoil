import { useRecoilValue } from 'recoil'
import { contagemLista, filtroLista } from '../../context/list_state/selectors'

import TodoForm from './todo-form'
import Item from './todo-item'
import FilterTodo from './input-filter';

import { EmptyMessage } from '../../styles/todo_list'

export default function TodoList() {

    const list = useRecoilValue(filtroLista)
    const contagem = useRecoilValue(contagemLista);

    return (
        <>
            <TodoForm/>
            <h2 style={{ 
                color: "#F1F5F9", 
                marginBottom: "20px",
                fontWeight: 600
                }}>Lista de Tarefas ({contagem})</h2>
            <FilterTodo/>
            <ul>
                {contagem ? 
                list.map(tarefa => <Item 
                    key={tarefa.id} 
                    item={tarefa} 
                    />) : 
                <EmptyMessage>"Lista de tarefas vazia"</EmptyMessage>}
            </ul>
        </>
    )
}