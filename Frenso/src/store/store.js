import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./auth/Reducer";

const rootReducer = combineReducers({
  auth: authReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
