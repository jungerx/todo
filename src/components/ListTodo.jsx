import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {com_todo,detele_todo} from '../redux/action/index'


function ListTodo() {
    const todoList = useSelector((state) => state.todo)
    const dispatch=useDispatch();
    const handleComplete=(id)=>{
        console.log("complete" , id)
        
    }
    const handleDetele=(id)=>{
        dispatch(detele_todo(id))
    }
    return (

        <div className='container-todo'>
            {todoList.map((e, i) => (
                <div className='list-todo' key={i}>
                    <div className='todo-item' >
                        {e.name}
                    </div>
                    <div className="list-btn">
                        <button onClick={()=>handleComplete(e.id)}>
                            <ion-icon name="create-outline"></ion-icon>
                        </button>
                        <button onClick={()=>handleDetele(e.id)}>
                            <ion-icon name="trash-outline" ></ion-icon>
                        </button>
                        <button>
                            <ion-icon name="checkmark-done-outline"></ion-icon>
                        </button>
                    </div>

                </div>
            ))}

        </div>
    )
}

export default ListTodo