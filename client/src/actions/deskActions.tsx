import { DeskFormInterface, DeskRespItem } from '../interfaces/homePage'

export const CREATE_DESK = 'CREATE_DESK'
export const LOAD_DESKS_LIST = 'LOAD_DESKS_LIST'
export const SAVE_DESKS_LIST = 'SAVE_DESKS_LIST'
export const SET_ERROR_DESKS = 'SET_ERROR_DESKS'
export const SET_LOADING_DESKS = 'SET_LOADING_DESKS'
export const SET_DESK = 'SET_DESK'
export const CREATE_DESK_LOADING = 'CREATE_DESK_LOADING'
export const CREATE_DESK_ERROR = 'CREATE_DESK_ERROR'
export const DELETE_DESK_LOADING = 'DELETE_DESK_LOADING'
export const DELETE_DESK_ERROR = 'DELETE_DESK_ERROR'
export const DELETE_DESK_START = 'DELETE_DESK_START'
export const DELETE_DESK = 'DELETE_DESK'
export const SET_CURRENT_DESK = 'SET_CURRENT_DESK'
export const EDIT_DESK_START = 'EDIT_DESK_START'
export const EDIT_DESK_DONE = 'EDIT_DESK_DONE'
export const EDIT_DESK_ERROR = 'EDIT_DESK_ERROR'
export const SET_LOADING_STATUS = 'SET_LOADING_STATUS'

export const loadDesks = () => ({
  type: LOAD_DESKS_LIST,
})

export const deleteDeskStart = (id: string) => ({
  type: DELETE_DESK_START,
  payload: id,
})

export const editDeskStart = (desk: DeskRespItem) => ({
  type: EDIT_DESK_START,
  payload: desk,
})

export const editDeskError = (error: string) => ({
  type: EDIT_DESK_ERROR,
  payload: error,
})

export const editDeskDone = (res: any) => ({
  type: EDIT_DESK_DONE,
  payload: res,
})

export const setLoadingStatus = (loading: boolean) => ({
  type: SET_LOADING_STATUS,
  payload: loading,
})

export const deleteDeskError = (error: string) => ({
  type: DELETE_DESK_ERROR,
  payload: error,
})

export const deleteDesk = (desk: DeskRespItem) => ({
  type: DELETE_DESK,
  payload: desk.id,
})

export const setDesks = (desks: any[]) => ({
  type: SAVE_DESKS_LIST,
  payload: desks,
})

export const setErrorDesks = (error: string) => ({
  type: SET_ERROR_DESKS,
  payload: error,
})

export const createDesk = (desk: DeskFormInterface) => ({
  type: CREATE_DESK,
  payload: desk,
})

export const createDeskError = (error: string) => ({
  type: CREATE_DESK_ERROR,
  payload: error,
})

export const setDesk = (desk: DeskRespItem) => ({
  type: SET_DESK,
  payload: desk,
})
