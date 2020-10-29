export const ADD_DESK = 'ADD_DESK'
export const LOAD_DESKS = 'LOAD_DESKS'
export const SAVE_DESKS = 'SAVE_DESKS'
export const SET_ERROR = 'SET_ERROR'
export const SET_LOADING = 'SET_LOADING'
export const SET_DESK = 'SET_DESK'

export const addDesk = (desk: any) => ({
  type: ADD_DESK,
  payload: desk,
})

export const loadDesks = () => ({
  type: LOAD_DESKS,
})

export const setDesks = (desks: any[]) => ({
  type: SAVE_DESKS,
  payload: desks,
})

export const setDesk = (desk: any) => ({
  type: SET_DESK,
  payload: desk,
})

export const setError = (error: string) => ({
  type: SET_ERROR,
  payload: error,
})

export const setLoading = (flag: boolean) => ({
  type: SET_LOADING,
  payload: flag,
})
