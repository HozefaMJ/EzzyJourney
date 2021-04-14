import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import reducersRouting from './reducers';
import {packageListReducer} from "./reducers/packageReducers";

const reducer = combineReducers({
    ...reducersRouting,
    packageList: packageListReducer,
})

const initialState = {}


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