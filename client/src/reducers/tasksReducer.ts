import {
  SAVE_TASK_LIST,
  SET_TASKS_ERROR,
  SET_LOADING_TASK,
  SET_TASK,
  CREATE_TASK_ERROR,
  DELETE_TASK_ERROR,
  DELETE_TASK,
  SET_TOGGLE_STATUS,
  EDIT_TASK_ERROR,
} from './../actions/tasksActions'
import { Task, TasksState } from './../interfaces/homePage'
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
    case SET_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] }
    case CREATE_TASK_ERROR:
      return { ...state, errorCreateTask: action.payload }
    case DELETE_TASK_ERROR:
      return { ...state, errorDeleteTask: action.payload }
    case SET_TOGGLE_STATUS:
      let newTasks = [...state.tasks]
      for (let i = 1; i < newTasks.length; i++) {
        if (newTasks[i].id === action.payload.id) {
          newTasks[i] = action.payload
        }
      }
      return { ...state, tasks: newTasks }
    case DELETE_TASK:
      let tasks = state.tasks.filter((el: Task) => el.id !== action.payload)
      return { ...state, tasks }
    case EDIT_TASK_ERROR:
      return { ...state, errorEditTask: action.payload }
    default:
      return { ...state }
  }
}
