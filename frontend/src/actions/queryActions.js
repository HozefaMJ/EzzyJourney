import axios from "axios";

import { QUERY_LIST_FAIL,
         QUERY_LIST_REQUEST,
         QUERY_LIST_SUCCESS,
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

        const {data} = await axios.put(`/api/queries/${id}/reverted`,config)

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

