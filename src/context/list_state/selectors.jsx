import { selector } from 'recoil'

import { listState, filtroState } from './atoms'

export const contagemLista = selector({
    key: 'todo/listaContagem',
    get: ({get}) => {
        const listaFiltrada = get(filtroLista);
        return listaFiltrada.length
    }
});

export const filtroLista = selector({
    key: 'todo/filtroLista',
    get: ({get}) => {
        const lista = get(listState);
        const filtro = get(filtroState);
        switch (filtro) {
            case "Pendente":
                return lista.filter(item => !item.estaFeita);
            case "Terminadas":
                return lista.filter(item => item.estaFeita);
            default:
                return lista;
        }

    }
})