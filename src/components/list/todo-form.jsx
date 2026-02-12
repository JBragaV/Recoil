import { useSetRecoilState } from "recoil";

import useInput from "../../hooks/useInput";
import { listState } from '../../context/list_state/atoms';

import { Form, Input, Button } from '../../styles/todo-form';

export default function TodoForm(){
    const { valor, onChange, reset } = useInput();
    const setList = useSetRecoilState(listState);

    const onSubmit = e => {
        e.preventDefault();
        if (!valor.trim()) return;
        setList(prev => [...prev, {id: Date.now(), tarefa: valor, estaFeita: false}]);
        reset();
    }
    return(
        <Form onSubmit={onSubmit}>
            <Input type="text" value={valor} onChange={onChange}/>
            <Button>Add nova tarefa</Button>
        </Form>
    )
}