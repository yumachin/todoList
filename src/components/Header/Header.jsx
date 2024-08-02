import React from 'react'
import './Header.css'
import { FaRegSquarePlus } from "react-icons/fa6";

const Header = () => {
  return (
    <div className='Header'>
      <div className="content">
        <h1>TodoList</h1>
        <div className='input-area'>
          <input type="text" placeholder='入力してください'/>
          <button><FaRegSquarePlus className='add-icon' /></button>
        </div>
      </div>
    </div>
  )
}

export default Header