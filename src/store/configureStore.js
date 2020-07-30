import { createStore, applyMiddleware } from "redux"
import rootReducer from "../reducers/rootReducer"
import {  composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk"
import logger from 'redux-logger'

export const configureStore = () => {
    const middlewares = [thunk, logger];

    const composedEnhancer = composeWithDevTools(applyMiddleware(...middlewares))

    const store = createStore(rootReducer, composedEnhancer);

    return store;
}