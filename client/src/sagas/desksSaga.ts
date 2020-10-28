import { LOAD_DESKS, setDesks} from './../actions/homeActions'
import { takeLatest, call, put } from 'redux-saga/effects'
import { getDesks } from '../api'

export function* loadDesksWatcher(){
    yield takeLatest(LOAD_DESKS, loadDesksFlow)
}

function* loadDesksFlow() {
    const desks = yield call(getDesks)
    yield put(setDesks(desks))
}