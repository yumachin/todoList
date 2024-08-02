import React from 'react'
import './Tasks.css'
import { FaCheck } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";

const Tasks = () => {
  return (
    <div className='Tasks'>
        <div className='Task'>
            <div className='task-content'>programming</div>
        </div>
        <div className='buttons'>
          <button className='ok'>
            <FaCheck className='icon2'/>
          </button>
          <button className='delete'>
            <FaRegTrashAlt className='icon3'/>
          </button>
        </div>
    </div>
  )
}

export default Tasks