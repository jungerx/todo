import React, { useState } from 'react'
import {useSelector,useDispatch}  from "react-redux";
import { add_todo } from '../redux/action';
function Form() {
  const selectedTodo=useSelector((state)=>console.log("Todo",state))
  const dispatch = useDispatch();
  const [todo,setTodo]=useState({
    id:"",
    name:"",
  });
  const handleChange=(e)=>{
    setTodo({
      ...todo,
      [e.target.name]: e.target.value
  })
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    const newTodo={...todo,id:Math.floor(Math.random()*100)}
    console.log("abc",newTodo)
    dispatch(add_todo(newTodo))
    setTodo({
      name:''
    })
  }
  return (
    <div>
    <form className="main-form"  onSubmit={handleSubmit}>
    <input type="text"className='input'placeholder='Enter new todo...'
    onChange={handleChange}
    name='name'
    value={todo.name}
    />
  <button  className='add' type='submit'>Add</button>
</form>
 </div>
  )
}

export default Form