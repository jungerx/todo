import * as typeAction from "../constant/typeAction"
const initState = {
    todo: [],
}
// khởi tạo hàm xử lý logic
const todoList = (state = initState, action) => {
    switch (action.type) {
        case typeAction.ADD_TODO:
            return {
                ...state,
                todo: [...state.todo, action.payload]
            }
        case typeAction.COM_TODO:
            return {
                ...state,
                todo: state.todo.filter((e) => e.id !== action.payload)
            }
        case typeAction.DETELE_TODO:
            return {
                ...state,
                todo: state.todo.filter((e) => e.id !== action.payload)
            }
        default:
            break;
    }
    return state;

}
export default todoList;