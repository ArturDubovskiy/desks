import { createDesk } from './../api'
import { setLoading } from './../actions/deskActions'
import { LOAD_DESKS, ADD_DESK, setDesks, setError, setDesk } from '../actions/deskActions'
import { takeLatest, call, put, take } from 'redux-saga/effects'
import { getDesks } from '../api'

export function* loadDesksWatcher() {
  yield takeLatest(LOAD_DESKS, loadDesksFlow)
}

function* loadDesksFlow() {
  try {
    yield put(setLoading(true))
    const desks = yield call(getDesks)
    yield put(setDesks(desks))
    yield put(setLoading(false))
  } catch (e) {
    yield put(setError(e))
  }
}

export function* createDeskWatcher() {
  yield takeLatest(ADD_DESK, addDeskFlow)
}

function* addDeskFlow(action: any) {
  try {
    const res = yield call(createDesk, { desk: action.payload })
    yield put(setDesk(res))
  } catch (e) {}
}
