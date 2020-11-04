import {
  SAVE_TASK_LIST,
  SET_TASKS_ERROR,
  SET_LOADING_TASK,
  SET_TASK,
  CREATE_TASK_ERROR,
  DELETE_TASK_ERROR,
  DELETE_TASK,
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
    case DELETE_TASK:
      let tasks = state.tasks.filter((el: Task) => el.id !== action.payload)
      return { ...state, tasks }
    default:
      return { ...state }
  }
}
