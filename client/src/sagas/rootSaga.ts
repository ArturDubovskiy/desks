import { fork } from 'redux-saga/effects'
import { createDeskWatcher, loadDesksWatcher } from './desksSaga'
export function* rootSaga() {
  yield fork(loadDesksWatcher)
  yield fork(createDeskWatcher)
}
