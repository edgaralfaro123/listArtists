import { createStore, combineReducers, applyMiddleware } from 'redux'
import componentsReducer from './reducers/componentsReducer'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    componentsReducer
})
export default store = createStore(rootReducer, applyMiddleware(thunk))