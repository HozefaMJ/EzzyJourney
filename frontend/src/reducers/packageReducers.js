import {
    PACKAGE_LIST_REQUEST,
    PACKAGE_LIST_SUCCESS,
    PACKAGE_LIST_FAIL,
    PACKAGE_DETAIL_REQUEST,
    PACKAGE_DETAIL_SUCCESS,
    PACKAGE_DETAIL_FAIL,
    PACKAGE_DELETE_REQUEST,
    PACKAGE_DELETE_SUCCESS,
    PACKAGE_DELETE_FAIL,
    PACKAGE_UPDATE_REQUEST,
    PACKAGE_UPDATE_SUCCESS,
    PACKAGE_UPDATE_FAIL,
    PACKAGE_UPDATE_RESET,
    PACKAGE_CREATE_REQUEST,
    PACKAGE_CREATE_SUCCESS,
    PACKAGE_CREATE_FAIL,
    PACKAGE_CREATE_RESET,
    PACKAGE_CREATE_REVIEW_REQUEST,
    PACKAGE_CREATE_REVIEW_SUCCESS,
    PACKAGE_CREATE_REVIEW_FAIL,
    PACKAGE_CREATE_REVIEW_RESET,
    PACKAGE_ADMIN_LIST_REQUEST,
    PACKAGE_ADMIN_LIST_SUCCESS,
    PACKAGE_ADMIN_LIST_FAIL,
    PACKAGE_TOP_REQUEST,
    PACKAGE_TOP_SUCCESS,
    PACKAGE_TOP_FAIL
} from "../constants/packageConstants"

export const packageListReducer = (state = {packages: []}, action) => {
    switch(action.type){
        case PACKAGE_LIST_REQUEST:
            return {loading: true, packages: []}
        case PACKAGE_LIST_SUCCESS:
            return { loading: false,
                     packages: action.payload.packages,
                     pages: action.payload.pages,
                     page: action.payload.page}
        case PACKAGE_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const packageListAdminReducer = (state = {packages: []}, action) => {
    switch(action.type){
        case PACKAGE_ADMIN_LIST_REQUEST:
            return {loading: true, packages: []}
        case PACKAGE_ADMIN_LIST_SUCCESS:
            return { loading: false,
                     packages: action.payload}
        case PACKAGE_ADMIN_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}


export const packageTopReducer = (state = {packages: []}, action) => {
    switch(action.type){
        case PACKAGE_TOP_REQUEST:
            return {loading: true, packages: []}
        case PACKAGE_TOP_SUCCESS:
            return { loading: false,
                     packages: action.payload}
        case PACKAGE_TOP_FAIL:
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

export const packageDeleteReducer = (state = {}, action) => {
    switch(action.type){
        case PACKAGE_DELETE_REQUEST:
            return {loading: true}
        case PACKAGE_DELETE_SUCCESS:
            return {loading: false, success: true}
        case PACKAGE_DELETE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}


export const packageCreateReducer = (state = {}, action) => {
    switch(action.type){
        case PACKAGE_CREATE_REQUEST:
            return {loading: true}
        case PACKAGE_CREATE_SUCCESS:
            return {loading: false, success: true, packages: action.payload}
        case PACKAGE_CREATE_FAIL:
            return {loading: false, error: action.payload}
        case PACKAGE_CREATE_RESET:
            return {}
        default:
            return state
    }
}


export const packageUpdateReducer = (state = {packages:{} }, action) => {
    switch(action.type){
        case PACKAGE_UPDATE_REQUEST:
            return {loading: true}
        case PACKAGE_UPDATE_SUCCESS:
            return {loading: false, success: true, packages: action.payload}
        case PACKAGE_UPDATE_FAIL:
            return {loading: false, error: action.payload}
        case PACKAGE_UPDATE_RESET:
            return { packages:{}}
        default:
            return state
    }
}


export const packageReviewCreateReducer = (state = {}, action) => {
    switch(action.type){
        case PACKAGE_CREATE_REVIEW_REQUEST:
            return {loading: true}
        case PACKAGE_CREATE_REVIEW_SUCCESS:
            return {loading: false, success: true}
        case PACKAGE_CREATE_REVIEW_FAIL:
            return {loading: false, error: action.payload}
        case PACKAGE_CREATE_REVIEW_RESET:
            return {}
        default:
            return state
    }
}