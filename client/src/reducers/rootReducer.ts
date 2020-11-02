import { tasksReducer } from './tasksReducer';
import {combineReducers} from 'redux'
import {desksReducer} from './desksReducer'

export const rootReducer = combineReducers({
    desks: desksReducer,
    tasks: tasksReducer
})