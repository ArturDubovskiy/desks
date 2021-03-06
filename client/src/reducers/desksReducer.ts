import { SET_LOADING_STATUS, EDIT_DESK_ERROR, EDIT_DESK_DONE } from './../actions/deskActions'
import { DesksState } from './../interfaces/homePage'
import { DeskRespItem } from '../interfaces/homePage'
import {
  SET_ERROR_DESKS,
  SET_DESK,
  SAVE_DESKS_LIST,
  CREATE_DESK_ERROR,
  DELETE_DESK_ERROR,
  DELETE_DESK,
} from '../actions/deskActions'

const initialState = {
  desks: [],
  loading: false,
  errorDesks: '',
  errorCreateDesk: '',
  errorDeleteDesk: '',
  errorEditDesk: '',
}

export const desksReducer = (state: DesksState = initialState, action: any) => {
  switch (action.type) {
    case SAVE_DESKS_LIST:
      return { ...state, desks: action.payload }
    case SET_ERROR_DESKS:
      return { ...state, errorDesks: action.payload }
    case SET_LOADING_STATUS:
      return { ...state, loading: action.payload }
    case SET_DESK:
      return { ...state, desks: [...state.desks, action.payload] }
    case CREATE_DESK_ERROR:
      return { ...state, errorCreateDesk: action.payload }
    case DELETE_DESK:
      return { ...state, desks: state.desks.filter((el: DeskRespItem) => el.id !== action.payload) }
    case DELETE_DESK_ERROR:
      return { ...state, errorDeleteDesk: action.payload }
    case EDIT_DESK_ERROR:
      return { ...state, errorEditDesk: action.payload }
    case EDIT_DESK_DONE:
      let desks = [...state.desks]
      for(let i = 1; i < desks.length; i++) {
        if (desks[i].id === action.payload.id) {
          desks[i] = action.payload
        }
      }
      return { ...state, desks }

    default:
      return state
  }
}
