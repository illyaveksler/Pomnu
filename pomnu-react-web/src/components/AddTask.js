import React, { useState } from 'react'
import todosData from './todosData'
import PlusIcon from "../assets/plus-solid.svg"
import "./AddTask.css"
import TodoItem from './TodoItem'

export default function AddTask({ inputText, setInputText, todos, setTodos }) {
    const [value, setValue] = useState("") 

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    const submitTaskHandler = (e) => {
        e.preventDefault()
        setTodos([  // Passing an array as argument. The function defintion doesn't mention an array!
            ...todos, {
                id:todosData.length, 
                text: inputText, 
                completed: false, 
                tag: null, 
                tag_color: null}
        ])
    }

    return (
        <div class="add-task-container">
            <button type="submit" onClick={submitTaskHandler}><img src={PlusIcon} alt="plus" /></button>
              <form>
                <input 
                  type="text"  
                  autocomplete="off" 
                  placeholder="Add a task." 
                  className="add-task"
                  onChange={inputTextHandler}
                   />
              </form>
        </div>
    )
}