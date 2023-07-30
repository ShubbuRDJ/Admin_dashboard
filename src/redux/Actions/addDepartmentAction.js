import { ActionType } from "../types/cakeType"

export const addDepartment  = (value)=>{

    return async (dispatch)=>{
        dispatch({
            isLoading:false,
            type:ActionType.ADD_DEPARTMENT,
            payload:value,
            msg:''
        });
        // callback();
    };
};