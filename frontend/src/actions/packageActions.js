import axios from "axios"
import {
    PACKAGE_LIST_REQUEST,
    PACKAGE_LIST_SUCCESS,
    PACKAGE_LIST_FAIL,
    PACKAGE_DETAIL_REQUEST,
    PACKAGE_DETAIL_FAIL,
    PACKAGE_DETAIL_SUCCESS
} from "../constants/packageConstants"


export const listPackages = () => async (dispatch) => {
    try {
        dispatch({ type: PACKAGE_LIST_REQUEST })

        const {data} = await axios.get('/api/packages/all')

        dispatch({
            type: PACKAGE_LIST_SUCCESS,
            payload: data  
        })

    } catch (error) {
        dispatch({
            type: PACKAGE_LIST_FAIL,
            payload: error.message && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const listPackageDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PACKAGE_DETAIL_REQUEST })

        const {data} = await axios.get(`/api/packages/${id}`)

        dispatch({
            type: PACKAGE_DETAIL_SUCCESS,
            payload: data  
        })

    } catch (error) {
        dispatch({
            type: PACKAGE_DETAIL_FAIL,
            payload: error.message && error.response.data.message ? error.response.data.message : error.message
        })
    }
}