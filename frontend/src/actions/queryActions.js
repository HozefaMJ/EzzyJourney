import axios from "axios";

import { QUERY_ANONYMOUS_MY_LIST_FAIL, 
         QUERY_ANONYMOUS_MY_LIST_REQUEST,
         QUERY_ANONYMOUS_MY_LIST_SUCCESS, 
         QUERY_ANONYMOUS_RESPOND_FAIL, 
         QUERY_ANONYMOUS_RESPOND_REQUEST, 
         QUERY_ANONYMOUS_RESPOND_SUCCESS, 
         QUERY_LIST_FAIL,
         QUERY_LIST_REQUEST,
         QUERY_LIST_SUCCESS,
         QUERY_MY_LIST_FAIL,
         QUERY_MY_LIST_REQUEST,
         QUERY_MY_LIST_SUCCESS,
         QUERY_RESPOND_FAIL,
         QUERY_RESPOND_REQUEST,
         QUERY_RESPOND_SUCCESS,
 } from "constants/queryConstants";

export const listQueries = () => async (dispatch,getState) => {
    try {
        dispatch({
            type: QUERY_LIST_REQUEST
        })

        const { userLogin: {userInfo} } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.get(`/api/queries/all`,config)

        dispatch({
            type: QUERY_LIST_SUCCESS,
            payload: data
        })
        
        
    } catch (error) {
        dispatch({
            type: QUERY_LIST_FAIL,
            payload: error.message && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const respondQuery = (id) => async (dispatch,getState) => {
    try {
        dispatch({
            type: QUERY_RESPOND_REQUEST
        })

        const { userLogin: {userInfo} } = getState()

        console.log(userInfo.token)

        let config

        if(userInfo.token){
            config = {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`
                }
            }
        }

        const {data} = await axios.put(`/api/queries/${id}/reverted`,{},config)

        console.log(data)

        dispatch({
            type: QUERY_RESPOND_SUCCESS,
            payload: data
        })
        
        
    } catch (error) {
        dispatch({
            type: QUERY_RESPOND_FAIL,
            payload: error.message && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const myListQueries = () => async (dispatch,getState) => {
    try {
        dispatch({
            type: QUERY_MY_LIST_REQUEST
        })

        const { userLogin: {userInfo} } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.get(`/api/queries/myqueries`,config)

        dispatch({
            type: QUERY_MY_LIST_SUCCESS,
            payload: data
        })
        
        
    } catch (error) {
        dispatch({
            type: QUERY_MY_LIST_FAIL,
            payload: error.message && error.response.data.message ? error.response.data.message : error.message
        })
    }
}




export const myAnonymousListQueries = () => async (dispatch,getState) => {
    try {
        dispatch({
            type: QUERY_ANONYMOUS_MY_LIST_REQUEST
        })

        const { userLogin: {userInfo} } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.get(`/api/queries/all/anonymous`,config)

        dispatch({
            type: QUERY_ANONYMOUS_MY_LIST_SUCCESS,
            payload: data
        })
        
        
    } catch (error) {
        dispatch({
            type: QUERY_ANONYMOUS_MY_LIST_FAIL,
            payload: error.message && error.response.data.message ? error.response.data.message : error.message
        })
    }
}



export const respondAnonymousQuery = (id) => async (dispatch,getState) => {
    try {
        dispatch({
            type: QUERY_ANONYMOUS_RESPOND_REQUEST
        })

        const { userLogin: {userInfo} } = getState()

        console.log(userInfo.token)

        let config

        if(userInfo.token){
            config = {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`
                }
            }
        }

        const {data} = await axios.put(`/api/queries/${id}/reverted/anonymous`,{},config)

        console.log(data)

        dispatch({
            type: QUERY_ANONYMOUS_RESPOND_SUCCESS,
            payload: data
        })
        
        
    } catch (error) {
        dispatch({
            type: QUERY_ANONYMOUS_RESPOND_FAIL,
            payload: error.message && error.response.data.message ? error.response.data.message : error.message
        })
    }
}