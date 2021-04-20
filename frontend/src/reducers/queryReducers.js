import { QUERY_LIST_FAIL, 
         QUERY_LIST_REQUEST,
         QUERY_LIST_RESET,
         QUERY_LIST_SUCCESS,
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
