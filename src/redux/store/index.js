import {createStore, applyMiddleware, compose} from "redux"
import thunk from 'redux-thunk'
import reducers from '../reducers/index'
import generateId from '../middleware/generateId'

const middlewares = [thunk, generateId]
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducers,
    composeEnhancer(applyMiddleware(...middlewares))
)

export default store
