import { combineReducers } from 'redux'
import testReducer from '../components/testarea/testReducer';
import asyncReducer from '../async/asyncReducer';

const rootReducer = combineReducers({
    test: testReducer,
    async: asyncReducer
})

export default rootReducer;