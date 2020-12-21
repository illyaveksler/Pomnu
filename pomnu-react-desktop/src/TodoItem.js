import React from "react"
import PropTypes from "prop-types"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input
                type="checkbox" 
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)} />
            <p>{props.item.text}</p>
        </div>
    )
}

TodoItem.propTypes = {
    handleChange: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
}

export default TodoItem