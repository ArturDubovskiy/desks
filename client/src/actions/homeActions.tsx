export const ADD_DESK = 'ADD_DESK'
export const LOAD_DESKS = 'LOAD_DESKS'
export const SAVE_DESKS = 'SAVE_DESKS'

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
