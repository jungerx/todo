import * as typeAction from "../constant/typeAction";

export const add_todo = (value)=>{
    return{
        type:typeAction.ADD_TODO,
        payload:value,
    }
}
export const com_todo = (id)=>{
    return{
        type:typeAction.COM_TODO,
        payload:id,
    }
}

export const detele_todo = (id)=>{
        return{
            type:typeAction.DETELE_TODO,
            payload:id,
        }
    }