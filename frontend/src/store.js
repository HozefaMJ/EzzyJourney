import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"

import reducersRouting from './reducers';

import {packageListReducer,
        packageDetailsReducer,
        packageDeleteReducer,
        packageUpdateReducer,
        packageCreateReducer,
        packageReviewCreateReducer,
        packageListAdminReducer,
        packageTopReducer
} from "./reducers/packageReducers";

import {userLoginReducer,
        userRegisterReducer,
        userDetailsReducer,
        userUpdateProfileReducer,
        userListReducer,
        userDeleteReducer,
        userUpdateReducer,
        userEmployeeListReducer,
        userAddEmployeeReducer,
        userWishistReducer,
        userRemoveWishlistReducer
} from "./reducers/userReducers";

import {
  queryListReducer,
  queryRespondReducer,
  myQueryListReducer,
  queryAnonymousListReducer,
  queryAnonymousRespondReducer,
  queryAnonymousReducer,
  queryNormalReducer
} from "./reducers/queryReducers";

const reducer = combineReducers({
    ...reducersRouting,
    packageList: packageListReducer,
    packageListAdmin: packageListAdminReducer,
    packageDetails: packageDetailsReducer,
    packageDelete: packageDeleteReducer,
    packageUpdate: packageUpdateReducer,
    packageCreate: packageCreateReducer,
    packageReviewCreate: packageReviewCreateReducer,
    packageTop: packageTopReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    userEmployeeList: userEmployeeListReducer,
    userAddEmployees: userAddEmployeeReducer,
    userWishlist: userWishistReducer,
    userRemoveWishlist: userRemoveWishlistReducer,
    queryList: queryListReducer,
    queryResponed: queryRespondReducer,
    myQueryList: myQueryListReducer,
    queryAnonymousList: queryAnonymousListReducer,
    queryAnonymousRespond: queryAnonymousRespondReducer,
    queryAnonymous: queryAnonymousReducer,
    queryNormal: queryNormalReducer
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