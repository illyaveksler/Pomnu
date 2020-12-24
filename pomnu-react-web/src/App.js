import './App.css'
import React, { useState } from "react"
import SettingsButton from './components/SettingsButton'
import TodoItem from "./components/TodoItem"
import todosData from "./components/todosData"
import Date from "./components/Date"
import AddTask from "./components/AddTask"

function App() { 
    const [todos, setTodos] = useState(todosData)
    const [inputText, setInputText] = useState("")
    
    const todoComponents = todos.map(item => 
        <TodoItem 
            key={item.id} 
            item={item}   
            />)
    
    function TaskList() {
        return (
        <>{todoComponents}</>
        )
    }

    return (
        <div className="todo-list">
            <SettingsButton />
            <h3 className="title">pomnu</h3>
            <Date />
            <TaskList />
            <br /><br /> 
            <AddTask 
              todos={todos} 
              setTodos={setTodos} 
              setInputText={setInputText}
              inputText={inputText}
               />
        </div>
    )

}


export default App; 

