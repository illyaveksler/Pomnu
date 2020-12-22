import './App.css'
import React, { useState } from "react"
import TodoItem from "./components/TodoItem"
import todosData from "./components/todosData"
import Date from "./components/Date"
import AddTask from "./components/AddTask"

function App() { 
    const [todos, setTodos] = useState(todosData)
    
    const todoComponents = todos.map(item => 
        <TodoItem 
            key={item.id} 
            item={item}   
            />)


    return (
        <div className="todo-list">
            <button className="settings-button" />
            <h3 className="title">pomnu</h3>
            <Date />
            {todoComponents}
            <br /><br /> 
            <AddTask />
        </div>
    )
}

export default App; 
