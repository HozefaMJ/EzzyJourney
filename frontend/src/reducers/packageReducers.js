import {
    PACKAGE_LIST_REQUEST,
    PACKAGE_LIST_SUCCESS,
    PACKAGE_LIST_FAIL,
    PACKAGE_DETAIL_REQUEST,
    PACKAGE_DETAIL_SUCCESS,
    PACKAGE_DETAIL_FAIL
} from "../constants/packageConstants"

export const packageListReducer = (state = {packages: []}, action) => {
    switch(action.type){
        case PACKAGE_LIST_REQUEST:
            return {loading: true, packages: []}
        case PACKAGE_LIST_SUCCESS:
            return {loading: false, packages: action.payload}
        case PACKAGE_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}


export const packageDetailsReducer = (state = {packages: {reviews:[]}}, action) => {
    switch(action.type){
        case PACKAGE_DETAIL_REQUEST:
            return {loading: true, ...state}
        case PACKAGE_DETAIL_SUCCESS:
            return {loading: false, packages: action.payload}
        case PACKAGE_DETAIL_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}