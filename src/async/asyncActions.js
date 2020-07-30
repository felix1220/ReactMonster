import { ASYNC_ACTION_START, ASYNC_ACTION_FINISH, ASYNC_ACTION_ERROR, ASYNC_FETCH_DATA } from "./ayncConstants"
import { fetchUserData } from "../data/mockApi"

export const asyncActionStart = () => {
    return {
        type: ASYNC_ACTION_START
    }
}

export const asyncActionFinish = () => {
    return {
        type: ASYNC_ACTION_FINISH
    }
}

export const asyncActionError = () => {
    return {
        type: ASYNC_ACTION_ERROR
    }
}

export const asyncFetchUsers = (payload) => {
    return {
        type: ASYNC_FETCH_DATA,
        userData: payload
    }
}



export const loadUsers = () => {
    return async dispatch => {
        const userFunc = await fetchUserData();
        const users = await userFunc();
        
        dispatch({ type: ASYNC_FETCH_DATA, payload: users})
        
    }
}