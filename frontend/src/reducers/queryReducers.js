import { QUERY_ANONYMOUS_FAIL, QUERY_ANONYMOUS_MY_LIST_FAIL,
         QUERY_ANONYMOUS_MY_LIST_REQUEST, 
         QUERY_ANONYMOUS_MY_LIST_RESET, 
         QUERY_ANONYMOUS_MY_LIST_SUCCESS, 
         QUERY_ANONYMOUS_REQUEST, 
         QUERY_ANONYMOUS_RESPOND_FAIL, 
         QUERY_ANONYMOUS_RESPOND_REQUEST, 
         QUERY_ANONYMOUS_RESPOND_SUCCESS, 
         QUERY_ANONYMOUS_SUCCESS, 
         QUERY_LIST_FAIL, 
         QUERY_LIST_REQUEST,
         QUERY_LIST_RESET,
         QUERY_LIST_SUCCESS,
         QUERY_MY_LIST_FAIL,
         QUERY_MY_LIST_REQUEST,
         QUERY_MY_LIST_SUCCESS,
         QUERY_NORMAL_FAIL,
         QUERY_NORMAL_REQUEST,
         QUERY_NORMAL_SUCCESS,
         QUERY_RESPOND_FAIL,
         QUERY_RESPOND_REQUEST,
         QUERY_RESPOND_SUCCESS,
} from "constants/queryConstants"

export const queryListReducer = (state = { queries:[] }, action) => {
    switch(action.type){
        case QUERY_LIST_REQUEST:
            return {loading: true}
        case QUERY_LIST_SUCCESS:
            return {loading: false, queries: action.payload}
        case QUERY_LIST_FAIL:
            return {loading: false, error: action.payload}
        case QUERY_LIST_RESET:
            return { queries: []}
        default:
            return state
    }
}


export const queryAnonymousListReducer = (state = { anonymousQueries:[] }, action) => {
    switch(action.type){
        case QUERY_ANONYMOUS_MY_LIST_REQUEST:
            return {loading: true}
        case QUERY_ANONYMOUS_MY_LIST_SUCCESS:
            return {loading: false, anonymousQueries: action.payload}
        case QUERY_ANONYMOUS_MY_LIST_FAIL:
            return {loading: false, error: action.payload}
        case QUERY_ANONYMOUS_MY_LIST_RESET:
            return { anonymousQueries: []}
        default:
            return state
    }
}


export const queryRespondReducer = (state = {}, action) => {
    switch(action.type){
        case QUERY_RESPOND_REQUEST:
            return {loading: true}
        case QUERY_RESPOND_SUCCESS:
            return {loading: false, success: true}
        case QUERY_RESPOND_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}


export const myQueryListReducer = (state = { queries:[] }, action) => {
    switch(action.type){
        case QUERY_MY_LIST_REQUEST:
            return {loading: true}
        case QUERY_MY_LIST_SUCCESS:
            return {loading: false, queries: action.payload}
        case QUERY_MY_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}


export const queryAnonymousRespondReducer = (state = {}, action) => {
    switch(action.type){
        case QUERY_ANONYMOUS_RESPOND_REQUEST:
            return {loading: true}
        case QUERY_ANONYMOUS_RESPOND_SUCCESS:
            return {loading: false, success: true}
        case QUERY_ANONYMOUS_RESPOND_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}


export const queryAnonymousReducer = (state = { }, action) => {
    switch(action.type){
        case QUERY_ANONYMOUS_REQUEST:
            return {loading: true}
        case QUERY_ANONYMOUS_SUCCESS:
            return {loading: false, success: true}
        case QUERY_ANONYMOUS_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const queryNormalReducer = (state = { }, action) => {
    switch(action.type){
        case QUERY_NORMAL_REQUEST:
            return {loading: true}
        case QUERY_NORMAL_SUCCESS:
            return {loading: false, success: true}
        case QUERY_NORMAL_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}