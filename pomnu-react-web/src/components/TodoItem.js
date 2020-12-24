import React, { useState } from "react"
import PropTypes from "prop-types"
import './TodoItem.css'

function TodoItem(props) {

    const completedStyle = {
      fontStyle: "italic",
      color: "#cdcdcd",
      textDecoration: "line-through"
    }

    const [option, setOption] = useState(null)

    return (
        <div className="todo-item">
            <p style={props.item.completed ? completedStyle : null}>{props.item.text}</p>
            <button 
              className="tag"
              varient="default"
              style={
                props.item.completed ? completedStyle : {background: props.item.tag_color },
                props.item.tag === null ? {background: "black"} : {background: props.item.tag_color} }>
               {props.item.tag === null ? "+ Add tag" : "• " + props.item.tag}
            </button>

            <form>
              <div className="form-check">
                <input
                  type="radio"
                  name="srs"
                  value='again'
                  checked={null}
                  className="again-button"
                  onChange={() => { 
                    setOption(props.item.value="again")
                    setOption(props.item.completed=true)
                    } }
                  />    
              </div>

              <div className="form-check">
                <input
                  type="radio"
                  name="srs"
                  value='hard'
                  checked={null}
                  className="hard-button"
                  onChange={() => { 
                    setOption(props.item.value="hard") 
                    setOption(props.item.completed=true)
                  } }
                  />    
              </div>

              <div className="form-check">
                <input
                  type="radio"
                  name="srs"
                  value='good'
                  checked={null}
                  className="good-button"
                  onChange={() => {
                    setOption(props.item.value="good")
                    setOption(props.item.completed=true)
                    } }
                  />    
              </div>

            </form>
            

        </div>
    )
}

TodoItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default TodoItem