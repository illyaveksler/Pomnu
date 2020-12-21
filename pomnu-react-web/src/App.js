import './App.css'
import React, { useState } from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

function App() {  // Unable to change state yet
    const [todos, setTodos] = useState(todosData);
    
    const handleChange = id => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
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
                <h3 className="title">pomnu</h3>
                {todoComponents}
            </div>
    )
}

export default App; 
