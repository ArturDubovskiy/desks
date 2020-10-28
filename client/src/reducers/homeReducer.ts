import { LOAD_DESKS } from '../actions/homeActions';

type Desk = { id: string, name: string }

export interface DesksState {
    desks: Desk[],
    loading: boolean,
    error: string
}

type Action = {type: string, payload: string}

const initialState = {
    desks: [],
    loading: false,
    error: ''
}

export const homeReducer = (state: DesksState = initialState, action: Action) => {
    switch (action.type) {
        case LOAD_DESKS:
            return { ...state, desks: action.payload, error: '' }
        default:
            return state
    }
} 