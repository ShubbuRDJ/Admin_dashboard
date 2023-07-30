import { combineReducers } from "redux";
import {cakeReducer} from "./cakeReducer"
import { addDepartmentReducer } from "./addDepartmentReducer";
export const reducers = combineReducers({
cake:cakeReducer,
department:addDepartmentReducer
})