import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function ListTodo() {
    const todoList = useSelector((state) => state.todo)
    return (

        <div className='container-todo'>
            {todoList.map((e, i) => (
                <div className='list-todo' key={i}>
                    <div className='todo-item' >
                        {e.name}
                    </div>
                    <div className="list-btn">
                        <button>
                            <ion-icon name="create-outline"></ion-icon>
                        </button>
                        <button>
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