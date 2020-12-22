import './App.css'
import React, { useState } from "react"
import TodoItem from "./components/TodoItem"
import todosData from "./components/todosData"
import Date from "./components/Date"
import PlusIcon from "./assets/plus-solid.svg"

function App() {  // Unable to change state yet
    const [todos, setTodos] = useState(todosData);
    
    const handleChange = id => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo
        })
        setTodos(updatedTodos);
    }
    
    const todoComponents = todos.map(item => 
        <TodoItem 
            key={item.id} 
            item={item}
            handleChange={handleChange}    
            />)

    return (
        <div className="todo-list">
            <button className="settings-button" />
            <h3 className="title">pomnu</h3>
            <Date />
            {todoComponents}
            <br /> 
            <br />
            <div class="add-task-container">
                <img src={PlusIcon} alt="plus"/>
                <input autocomplete="off" placeholder="Add a task." className="add-task" />
            </div>
        </div>
    )
}

export default App; 
