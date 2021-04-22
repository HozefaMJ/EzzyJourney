import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"

import reducersRouting from './reducers';

import {packageListReducer,
        packageDetailsReducer,
        packageDeleteReducer,
        packageUpdateReducer,
        packageCreateReducer
} from "./reducers/packageReducers";

import {userLoginReducer,
        userRegisterReducer,
        userDetailsReducer,
        userUpdateProfileReducer,
        userListReducer,
        userDeleteReducer,
        userUpdateReducer,
        userEmployeeListReducer,
        userAddEmployeeReducer
} from "./reducers/userReducers";

import {
  queryListReducer,
  queryRespondReducer,
  myQueryListReducer
} from "./reducers/queryReducers";

const reducer = combineReducers({
    ...reducersRouting,
    packageList: packageListReducer,
    packageDetails: packageDetailsReducer,
    packageDelete: packageDeleteReducer,
    packageUpdate: packageUpdateReducer,
    packageCreate: packageCreateReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    userEmployeeList: userEmployeeListReducer,
    userAddEmployees: userAddEmployeeReducer,
    queryList: queryListReducer,
    queryResponed: queryRespondReducer,
    myQueryList: myQueryListReducer,
})


const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null


const initialState = {
  userLogin: {userInfo: userInfoFromStorage}
}


const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store




/*

import { createStore, combineReducers } from 'redux';


export default function configureStore() {
  return createStore(
    combineReducers({
      ...reducers
    }),
    {}
  );
}
*/