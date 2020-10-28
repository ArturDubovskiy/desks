import { homeReducer } from './reducers/homeReducer'
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, createStore } from 'redux'
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(homeReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)
