import * as typeAction from "../constant/typeAction";

export const add_todo = (value)=>{
    return{
        type:typeAction.ADD_TODO,
        payload:value,
    }
}