import React, { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Tasks from './components/Tasks/Tasks'



const App = () => {
  const [todo, setTodo] = useState("")
  const [todoArray, setTodoArray] = useState([])
  const [isVisible, setIsVisible] = useState(false)

  const getTodo = (e) => {
    setTodo(e.target.value)
    setTodoArray(...todoArray, todo)
  }
  const addTodo = () => {
    setIsVisible(prev => !prev)
    setTodo("")
  }

  return (
    <div className='App'>
      <Header todo={todo} getTodo={getTodo} addTodo={addTodo} />
      <Tasks todo={todo} todoArray={todoArray} isVisible={isVisible}  />
    </div>
  )
}

export default App