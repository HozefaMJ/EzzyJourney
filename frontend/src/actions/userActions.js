import axios from "axios"
import { USER_LOGIN_FAIL,
         USER_LOGIN_REQUEST,
         USER_LOGIN_SUCCESS,
         USER_LOGOUT, 
         USER_REGISTER_REQUEST,
         USER_REGISTER_SUCCESS,
         USER_REGISTER_FAIL,
         USER_DETAILS_REQUEST,
         USER_DETAILS_SUCCESS,
         USER_DETAILS_FAIL,
         USER_UPDATE_PROFILE_REQUEST,
         USER_UPDATE_PROFILE_SUCCESS,
         USER_UPDATE_PROFILE_FAIL,
         USER_LIST_REQUEST,
         USER_LIST_SUCCESS,
         USER_LIST_FAIL,
         USER_LIST_RESET,
         USER_DELETE_REQUEST,
         USER_DELETE_SUCCESS,
         USER_DELETE_FAIL,
         USER_UPDATE_REQUEST,
         USER_UPDATE_SUCCESS,
         USER_UPDATE_FAIL,
         USER_EMPLOYEE_LIST_REQUEST,
         USER_EMPLOYEE_LIST_FAIL,
         USER_EMPLOYEE_LIST_SUCCESS,
         USER_ADD_EMPLOYEE_REQUEST,
         USER_ADD_EMPLOYEE_SUCCESS,
         USER_ADD_EMPLOYEE_FAIL,
         USER_WISHLIST_REQUEST,
         USER_WISHLIST_SUCCESS,
         USER_WISHLIST_FAIL,
         USER_REMOVE_WISHLIST_REQUEST,
         USER_REMOVE_WISHLIST_SUCCESS,
         USER_REMOVE_WISHLIST_FAIL
} from "constants/userConstants"

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const {data} = await axios.post('/api/users/login', {email,password},config)

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.message && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({
        type: USER_LOGOUT
    })
    dispatch({
        type: USER_LIST_RESET
    })
}


export const register = (name, email,contact,dob,password,address) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const {data} = await axios.post('/api/users', {name,email,contact,dob,password,address},config)

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.message && error.response.data.message ? error.response.data.message : error.message
        })
    }
}



export const getUserDetails = (id) => async (dispatch,getState) => {
    try {
        dispatch({
            type: USER_DETAILS_REQUEST
        })

        const { userLogin: {userInfo} } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.get(`/api/users/${id}`,config)

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })

        
    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.message && error.response.data.message ? error.response.data.message : error.message
        })
    }
}



export const updateUserProfile = (user) => async (dispatch,getState) => {
    try {
        dispatch({
            type: USER_UPDATE_PROFILE_REQUEST
        })

        const { userLogin: {userInfo} } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.put(`/api/users/profile`,user,config)

        dispatch({
            type: USER_UPDATE_PROFILE_SUCCESS,
            payload: data
        })
        
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
        
    } catch (error) {
        dispatch({
            type: USER_UPDATE_PROFILE_FAIL,
            payload: error.message && error.response.data.message ? error.response.data.message : error.message
        })
    }
}



export const listUsers = () => async (dispatch,getState) => {
    try {
        dispatch({
            type: USER_LIST_REQUEST
        })

        const { userLogin: {userInfo} } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.get(`/api/users/all`,config)

        dispatch({
            type: USER_LIST_SUCCESS,
            payload: data
        })
        
        
    } catch (error) {
        dispatch({
            type: USER_LIST_FAIL,
            payload: error.message && error.response.data.message ? error.response.data.message : error.message
        })
    }
}



export const deleteUser = (id) => async (dispatch,getState) => {
    try {
        dispatch({
            type: USER_DELETE_REQUEST
        })

        const { userLogin: {userInfo} } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        await axios.delete(`/api/users/${id}`,config)

        dispatch({
            type: USER_DELETE_SUCCESS
        })
        
        
    } catch (error) {
        dispatch({
            type: USER_DELETE_FAIL,
            payload: error.message && error.response.data.message ? error.response.data.message : error.message
        })
    }
}



export const updateUser = (user) => async (dispatch,getState) => {
    try {
        dispatch({
            'Content-Type': 'application/json',
            type: USER_UPDATE_REQUEST
        })

        const { userLogin: {userInfo} } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.put(`/api/users/${user._id}`,user,config)

        dispatch({
            type: USER_UPDATE_SUCCESS
        })
        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })
        
        
    } catch (error) {
        dispatch({
            type: USER_UPDATE_FAIL,
            payload: error.message && error.response.data.message ? error.response.data.message : error.message
        })
    }
}



export const listEmployeeUsers = () => async (dispatch,getState) => {
    try {
        dispatch({
            type: USER_EMPLOYEE_LIST_REQUEST
        })

        const { userLogin: {userInfo} } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.get(`/api/users/employee`,config)

        dispatch({
            type: USER_EMPLOYEE_LIST_SUCCESS,
            payload: data
        })
        
        
    } catch (error) {
        dispatch({
            type: USER_EMPLOYEE_LIST_FAIL,
            payload: error.message && error.response.data.message ? error.response.data.message : error.message
        })
    }
}



export const addEmployees = (name, email) => async (dispatch,getState) => {
    try {
        dispatch({
            type: USER_ADD_EMPLOYEE_REQUEST
        })

        const { userLogin: {userInfo} } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.post('/api/users/employee', {name,email},config)

        dispatch({
            type: USER_ADD_EMPLOYEE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_ADD_EMPLOYEE_FAIL,
            payload: error.message && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


export const wishlistPackages = () => async (dispatch,getState) => {
    try {
        dispatch({
            type: USER_WISHLIST_REQUEST
        })

        const { userLogin: {userInfo} } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.get(`/api/packages/myWishlist`,config)

        dispatch({
            type: USER_WISHLIST_SUCCESS,
            payload: data
        })
        
        
    } catch (error) {
        dispatch({
            type: USER_WISHLIST_FAIL,
            payload: error.message && error.response.data.message ? error.response.data.message : error.message
        })
    }
}



export const removeWishlist = (id) => async (dispatch,getState) => {
    try {
        dispatch({
            type: USER_REMOVE_WISHLIST_REQUEST
        })

        const { userLogin: {userInfo} } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        await axios.delete(`/api/packages/myWishlist/${id}`,config)

        dispatch({
            type: USER_REMOVE_WISHLIST_SUCCESS
        })
        
        
    } catch (error) {
        dispatch({
            type: USER_REMOVE_WISHLIST_FAIL,
            payload: error.message && error.response.data.message ? error.response.data.message : error.message
        })
    }
}