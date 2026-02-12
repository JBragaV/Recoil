import { memo } from "react";

import { useSetRecoilState } from "recoil";

import { listState } from "../../context/list_state/atoms";

import { ListItem, TaskText, RemoveButton } from '../../styles/todo_item'

function Item({ item }) {
    const {id, tarefa, estaFeita} = item;
    const setList = useSetRecoilState(listState);
    
    const apagarTarefa = ident => {
        setList(prev => prev.filter(item => item.id !== ident))
    }

    const handleChange = () => {
        setList(prev => prev.map(item => {
            return item.id === id ? {...item, estaFeita: !item.estaFeita} : item
        }))
    }
    return (
        <ListItem>
            <input checked={estaFeita} onChange={handleChange} type="checkbox"/>
            <TaskText feita={estaFeita}>{tarefa}</TaskText>
            <RemoveButton onClick={(ident) => apagarTarefa(id)}>Remover</RemoveButton>
        </ListItem>
    )
}

export default memo(Item);