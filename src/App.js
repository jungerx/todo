import React from 'react'
import {createStore} from 'redux'
import  todoList from './redux/reducer/reducer'
import { Provider } from 'react-redux'
import TodoList from './components/TodoList'
import './App.css'
const store = createStore( todoList);
function App() {
  return (
   <Provider store={store}>
    <div>
      <TodoList/>
    </div>
   </Provider>
  )
}

export default App
