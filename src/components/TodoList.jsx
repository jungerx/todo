import React, { useState } from 'react'
import Form from './Form'
import ListTodo from './ListTodo'
import Total from './Total'

function TodoList() {
  return (
    <div className='container'>
        <h1>TodoList</h1>
        <Form />
        <ListTodo />
        <Total/>
    </div>
  )
}

export default TodoList