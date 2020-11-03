import { LOAD_TASKS_LIST, setLoadingTasks, setTask, setTasksError } from './../actions/tasksActions';
import { takeLatest, put, call } from 'redux-saga/effects';
import api from '../api'


export function* loadTasksWatcher() {
    yield takeLatest(LOAD_TASKS_LIST, loadTasksFlow)
  }
  
  function* loadTasksFlow(action: any) {
    yield put(setLoadingTasks(true))
    try {
      const tasks = yield call(api.tasks.get, action.payload)
      yield put(setTask(tasks))
    } catch (e) {
      yield put(setTasksError(e))
    }
    yield put(setLoadingTasks(false))
  }