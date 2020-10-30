import { SET_ERROR, SET_LOADING, SET_DESK, SAVE_DESKS } from './../actions/deskActions'
import { LOAD_DESKS } from '../actions/deskActions'

type Action = { type: string; payload: any }

interface IDesk {
  id: string
  name: string
}

export interface IDesksState {
  desks: IDesk[]
  loading: boolean
  error: string
}

const initialState = {
  desks: [],
  loading: false,
  error: '',
}

export const desksReducer = (state: IDesksState = initialState, action: Action) => {
  switch (action.type) {
    case LOAD_DESKS:
      return { ...state, error: '' }
    case SAVE_DESKS:
      return { ...state, desks: action.payload }
    case SET_ERROR:
      return { ...state, error: action.payload }
    case SET_LOADING:
      return { ...state, loading: action.payload }
    case SET_DESK:
      return { ...state, desks: [...state.desks, action.payload] }
    default:
      return state
  }
}
