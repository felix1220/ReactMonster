import { createReducer } from "../common/util/reducerUtils"
import { ASYNC_ACTION_START, ASYNC_ACTION_FINISH, ASYNC_ACTION_ERROR, ASYNC_FETCH_DATA} from "./ayncConstants"

const initialState = {
    loading: false,
    userData: null
}

const asyncActionStarted = (state) => {
    return {
        ...state,
        loading:  true
    }
}

const asyncActionFinished = (state) => {
    return {
        ...state,
        loading:  false
    }
}

const asyncActionError = (state) => {
    return {
        ...state,
        loading: false
    }
}

const asyncFetchUsers = (state, payload) => {
    return {
        ...state,
        userData: payload
    }
}

export default createReducer(initialState, {
    [ASYNC_ACTION_START]: asyncActionStarted,
    [ASYNC_ACTION_FINISH]: asyncActionFinished,
    [ASYNC_ACTION_ERROR]: asyncActionError,
    [ASYNC_FETCH_DATA]: asyncFetchUsers
})