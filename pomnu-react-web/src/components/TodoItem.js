import React from "react"
import PropTypes from "prop-types"
import './TodoItem.css'

function TodoItem(props) {
    return (
        <div className="todo-item">
            <p>{props.item.text}</p>
            <input
                type="checkbox"
                className="again-button"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)} />
            <input
                type="checkbox"
                className="hard-button" 
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)} />
            <input
                type="checkbox"
                className="good-button" 
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)} />
        </div>
    )
}

TodoItem.propTypes = {
    handleChange: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
}

export default TodoItem