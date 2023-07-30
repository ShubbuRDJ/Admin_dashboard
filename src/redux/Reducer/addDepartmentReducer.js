import { ActionType } from "../types/cakeType";

let initialState = {
    department:[]
};
export const addDepartmentReducer = (state = initialState,action)=>{
    console.log(action)
    switch (action.type) {
        case ActionType.ADD_DEPARTMENT:
            return{
                ...state,
                department:[...state.department,action.payload],
                msg:"success"
            }
    
        default:
            return state
    }
}
