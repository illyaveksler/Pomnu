import './App.css';
import React from "react"
import TodoItem from "./TodoItem"

function App() {
    return (
        <div className="todo-list">
            <h3 className="title">pomnu</h3>
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    )
}

export default App;
