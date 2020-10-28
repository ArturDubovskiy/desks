import { fork } from 'redux-saga/effects'
import { loadDesksWatcher } from './sagas/desksSaga'
export function* rootSaga() {
  yield fork(loadDesksWatcher)
}
