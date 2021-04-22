import axios from "axios"
import {
    PACKAGE_LIST_REQUEST,
    PACKAGE_LIST_SUCCESS,
    PACKAGE_LIST_FAIL,
    PACKAGE_DETAIL_REQUEST,
    PACKAGE_DETAIL_FAIL,
    PACKAGE_DETAIL_SUCCESS,
    PACKAGE_DELETE_REQUEST,
    PACKAGE_DELETE_SUCCESS,
    PACKAGE_DELETE_FAIL,
    PACKAGE_UPDATE_FAIL,
    PACKAGE_UPDATE_SUCCESS,
    PACKAGE_UPDATE_REQUEST,
    PACKAGE_CREATE_REQUEST,
    PACKAGE_CREATE_SUCCESS,
    PACKAGE_CREATE_FAIL
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


export const deletePackage = (id) => async (dispatch,getState) => {
    try {
        dispatch({
            type: PACKAGE_DELETE_REQUEST
        })

        const { userLogin: {userInfo} } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        await axios.delete(`/api/packages/${id}`,config)

        dispatch({
            type: PACKAGE_DELETE_SUCCESS
        })
        
        
    } catch (error) {
        dispatch({
            type: PACKAGE_DELETE_FAIL,
            payload: error.message && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


export const createPackage = () => async (dispatch,getState) => {
    try {
        dispatch({
            type: PACKAGE_CREATE_REQUEST
        })

        const { userLogin: {userInfo} } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.post(`/api/packages/new`,{},config)

        dispatch({
            type: PACKAGE_CREATE_SUCCESS,
            payload: data
        })
        
        
    } catch (error) {
        dispatch({
            type: PACKAGE_CREATE_FAIL,
            payload: error.message && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


export const updatePackage = (packages) => async (dispatch,getState) => {
    try {
        dispatch({
            type: PACKAGE_UPDATE_REQUEST
        })

        const { userLogin: {userInfo} } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.put(`/api/packages/${packages._id}`,packages,config)

        dispatch({
            type: PACKAGE_UPDATE_SUCCESS
        })
        dispatch({
            type: PACKAGE_DETAIL_SUCCESS,
            payload: data
        })
        
        
    } catch (error) {
        dispatch({
            type: PACKAGE_UPDATE_FAIL,
            payload: error.message && error.response.data.message ? error.response.data.message : error.message
        })
    }
}