import React from 'react'
import PlusIcon from "../assets/plus-solid.svg"

export default function AddTask() {
    return (
        <div class="add-task-container">
            <img src={PlusIcon} alt="plus"/>
            <input autocomplete="off" placeholder="Add a task." className="add-task" />
        </div>
    )
}
