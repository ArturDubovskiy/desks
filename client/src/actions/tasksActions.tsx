export const LOAD_TASKS_LIST = 'LOAD_TASKS_LIST'
export const DELETE_TASK_START = 'DELETE_TASK_START'
export const EDIT_TASK_START = 'EDIT_TASK_START'
export const EDIT_TASK_ERROR = 'EDIT_TASK_ERROR'
export const EDIT_TASK_DONE = 'EDIT_TASK_DONE'
export const SET_LOADING_TASK = 'SET_LOADING_TASK'
export const DELETE_TASK_ERROR = 'DELETE_TASK_ERROR'
export const DELETE_TASK = 'DELETE_TASK'
export const SAVE_TASK_LIST = 'SAVE_TASK_LIST'
export const CREATE_TASK = 'CREATE_TASK'
export const SET_TASK = 'SET_TASK'
export const CREATE_TASK_ERROR = 'CREATE_TASK_ERROR'
export const SET_TASKS_ERROR = 'SET_TASKS_ERROR'

export const loadTasks = (deskId: number) => ({
  type: LOAD_TASKS_LIST,
  payload: deskId,
})

export const setTasks = (tasks: any[]) => ({
  type: SAVE_TASK_LIST,
  payload: tasks,
})

export const setTasksError = (error: string) => ({
  type: SET_TASKS_ERROR,
  payload: error,
})

export const deleteTaskStart = (data: any) => ({
  type: DELETE_TASK_START,
  payload: data,
})

export const editTaskStart = (task: any) => ({
  type: EDIT_TASK_START,
  payload: task,
})

export const editTaskError = (error: string) => ({
  type: EDIT_TASK_ERROR,
  payload: error,
})

export const editTaskDone = (res: any) => ({
  type: EDIT_TASK_DONE,
  payload: res,
})

export const setLoadingTasks = (loading: boolean) => ({
  type: SET_LOADING_TASK,
  payload: loading,
})

export const deleteTaskError = (error: string) => ({
  type: DELETE_TASK_ERROR,
  payload: error,
})

export const deleteTask = (task: any) => ({
  type: DELETE_TASK,
  payload: task.id,
})

export const createTask = (task: any) => ({
  type: CREATE_TASK,
  payload: task,
})

export const setTask = (task: any) => ({
  type: SET_TASK,
  payload: task,
})

export const createTaskError = (error: string) => ({
  type: CREATE_TASK_ERROR,
  payload: error,
})
