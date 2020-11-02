import { SAVE_TASK_LIST, SET_TASKS_ERROR, SET_LOADING_TASK } from './../actions/tasksActions'
import { TasksState } from './../interfaces/homePage'
const initialState = {
  tasks: [],
  loading: false,
  errorLoadTasks: '',
  errorCreateTask: '',
  errorDeleteTask: '',
  errorEditTask: '',
}

export const tasksReducer = (state: TasksState = initialState, action: any) => {
  switch (action.type) {
    case SAVE_TASK_LIST:
      return { ...state, tasks: action.payload }
    case SET_TASKS_ERROR:
      return { ...state, errorLoadTasks: action.payload }
    case SET_LOADING_TASK:
      return { ...state, loading: action.payload }
    default:
      return { ...state }
  }
}
