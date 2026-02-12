import { atom } from 'recoil'

export const listState = atom({
    key: 'todo/listState',
    default: []
});

export const filtroState = atom({
    key: 'todo/filtroStado',
    default: 'Todas'
})