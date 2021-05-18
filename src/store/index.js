import { createStore, combineReducers, applyMiddleware } from 'redux'
import authReducer from './reducers/authReducer'
import componentsReducer from './reducers/componentsReducer'
import directivesReducers from './reducers/directivesReducer'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    authReducer,
    componentsReducer,
    directivesReducers
})
export default store = createStore(rootReducer, applyMiddleware(thunk))