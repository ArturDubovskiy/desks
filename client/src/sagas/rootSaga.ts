import { fork } from 'redux-saga/effects'
import {
  createDeskWatcher,
  deleteDeskWatcher,
  loadDesksWatcher,
  editDeskWatcher,
} from './desksSaga'
import { loadTasksWatcher, createTaskWatcher } from './tasksSaga'
export function* rootSaga() {
  yield fork(loadDesksWatcher)
  yield fork(createDeskWatcher)
  yield fork(deleteDeskWatcher)
  yield fork(editDeskWatcher)
  yield fork(loadTasksWatcher)
  yield fork(createTaskWatcher)
}
