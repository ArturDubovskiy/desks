import {
  LOAD_TASKS_LIST,
  setLoadingTasks,
  createTaskError,
  setTasks,
  setTasksError,
  CREATE_TASK,
  setTask
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
