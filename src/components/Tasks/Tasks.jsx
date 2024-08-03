import React from 'react'
import './Tasks.css'
import { FaCheck } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";

const Tasks = ( {todo, todoArray, isVisible} ) => {
  return (
    <div className='Tasks'>
      {todoArray.map((item, index) => {
        return (
        <>
            <div key={index} className='Task'>
              <div className='task-content'>{item}</div>
            </div>
            <div className='buttons'>
              <button className='ok'>
                <FaCheck className='icon2'/>
              </button>
              <button className='delete'>
                <FaRegTrashAlt className='icon3'/>
              </button>
            </div>
        </>

        )
      })}
    </div>
  )
}

export default Tasks