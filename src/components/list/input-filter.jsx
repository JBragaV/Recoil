import { useRecoilState } from "recoil";
import { filtroState } from "../../context/list_state/atoms";

import { FilterWrapper, Select, Label } from '../../styles/filter';

export default function FilterTodo(){
    const [filtro, setFiltro] = useRecoilState(filtroState);
    
    const novoFiltro = e => {
        setFiltro(e.target.value);
    }

    return(
        <FilterWrapper>
            <Label htmlFor="filtro">Filtro</Label>
            <Select name="filtro" id="filtro" value={filtro} onChange={novoFiltro}>
                <option value="Todas">Todas</option>
                <option value="Pendente">Pendente</option>
                <option value="Terminadas">Terminadas</option>
            </Select>
        </FilterWrapper>
    )
}