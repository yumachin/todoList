import './Header.css'
import { FaRegSquarePlus } from "react-icons/fa6";

const Header = ({ todo, getTodo, addTodo }) => {

  return (
    <div className='Header'>
      <div className="content">
        <h1>TodoList</h1>
        <div className='input-area'>
          <input 
            type="text" 
            placeholder='入力してください' 
            onChange={getTodo}
            value={todo}
          />
          <button>
            <FaRegSquarePlus 
              className='add-icon' 
              onClick={addTodo}
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header