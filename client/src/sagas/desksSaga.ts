import api from '../api'
import {
  LOAD_DESKS_LIST,
  EDIT_DESK_START,
  CREATE_DESK,
  DELETE_DESK_START,
  setDesks,
  setErrorDesks,
  setLoadingStatus,
  setDesk,
  createDeskError,
  deleteDeskError,
  deleteDesk,
  editDeskDone,
  editDeskError,
  setCurrentDesk,
} from '../actions/deskActions'
import { takeLatest, call, put } from 'redux-saga/effects'

const errorMsg = 'Sorry! Something whent wrong.'

export function* loadDesksWatcher() {
  yield takeLatest(LOAD_DESKS_LIST, loadDesksFlow)
}

function* loadDesksFlow() {
  yield put(setLoadingStatus(true))
  try {
    const desks = yield call(api.desks.get)
    yield put(setDesks(desks))
    yield put(setCurrentDesk(desks.slice(-1)[0]))
  } catch (e) {
    yield put(setErrorDesks(errorMsg + e))
  }
  yield put(setLoadingStatus(false))
}

export function* createDeskWatcher() {
  yield takeLatest(CREATE_DESK, addDeskFlow)
}

function* addDeskFlow(action: any) {
  yield put(setLoadingStatus(true))
  try {
    const res = yield call(api.desks.post, { desk: action.payload })
    yield put(setDesk(res))
    yield put(setCurrentDesk(res))
  } catch (e) {
    yield put(createDeskError(errorMsg + e))
  }
  yield put(setLoadingStatus(false))
}

export function* deleteDeskWatcher() {
  yield takeLatest(DELETE_DESK_START, deleteDeskFlow)
}

function* deleteDeskFlow(action: any) {
  yield put(setLoadingStatus(true))
  try {
    const res = yield call(api.desks.delete, { id: action.payload })
    yield put(deleteDesk(res.desk))
  } catch (e) {
    yield put(deleteDeskError(errorMsg + e))
  }
  yield put(setLoadingStatus(false))
}

export function* editDeskWatcher() {
  yield takeLatest(EDIT_DESK_START, editDeskFlow)
}

function* editDeskFlow(action: any) {
  yield put(setLoadingStatus(true))
  try {
    const res = yield call(api.desks.update, { id: action.payload.id, name: action.payload.name })
    yield put(editDeskDone(res))
  } catch (e) {
    yield put(editDeskError(errorMsg + e))
  }
  yield put(setLoadingStatus(false))
}
