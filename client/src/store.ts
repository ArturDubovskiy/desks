import createSagaMiddleware, { SagaMiddleware } from 'redux-saga'
import { applyMiddleware, createStore, Store } from 'redux'
import { rootSaga } from './sagas/rootSaga'
import { rootReducer } from './reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

export const store: Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)
