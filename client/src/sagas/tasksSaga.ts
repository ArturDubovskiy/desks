import {
  LOAD_TASKS_LIST,
  setLoadingTasks,
  createTaskError,
  setTasks,
  setTasksError,
  CREATE_TASK,
  setTask,
  DELETE_TASK_START,
  deleteTask,
  deleteTaskError,
  TOGGLE_TASK_STATUS,
  setTaskStatus,
  editTaskError,
} from './../actions/tasksActions'
import { takeLatest, put, call } from 'redux-saga/effects'
import api from '../api'

export function* loadTasksWatcher() {
  yield takeLatest(LOAD_TASKS_LIST, loadTasksFlow)
}

function* loadTasksFlow(action: any) {
  yield put(setLoadingTasks(true))
  try {
    const tasks = yield call(api.tasks.get, action.payload)
    yield put(setTasks(tasks))
  } catch (e) {
    yield put(setTasksError(e))
  }
  yield put(setLoadingTasks(false))
}

export function* createTaskWatcher() {
  yield takeLatest(CREATE_TASK, createTaskFlow)
}

function* createTaskFlow(action: any) {
  yield put(setLoadingTasks(true))
  try {
    const task = yield call(api.tasks.post, action.payload)
    yield put(setTask(task))
  } catch (e) {
    yield put(createTaskError(e))
  }
  yield put(setLoadingTasks(false))
}

export function* deleteTaskWatcher() {
  yield takeLatest(DELETE_TASK_START, deleteTaskFlow)
}

function* deleteTaskFlow(action: any) {
  yield put(setLoadingTasks(true))
  try {
    const task = yield call(api.tasks.delete, action.payload)
    yield put(deleteTask(task))
  } catch (e) {
    yield put(deleteTaskError(e))
  }
  yield put(setLoadingTasks(false))
}

export function* toggleTaskStatusWatcher() {
  yield takeLatest(TOGGLE_TASK_STATUS, toggleTaskFlow)
}

function* toggleTaskFlow(action: any) {
  yield put(setLoadingTasks(true))
  try {
    const task = yield call(api.tasks.update, action.payload)
    yield put(setTaskStatus(task))
  } catch (e) {
    yield put(editTaskError(e))
  }
  yield put(setLoadingTasks(false))
}
