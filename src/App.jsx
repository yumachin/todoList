import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Tasks from './components/Tasks/Tasks'



const App = () => {
  return (
    <div className='App'>
      <Header />
      <Tasks />
    </div>
  )
}

export default App