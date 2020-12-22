import React, { useState } from "react"
import PropTypes from "prop-types"
import './TodoItem.css'

function TodoItem(props) {
    const [option, setOption] = useState(null)

    return (
        <div className="todo-item">
            <p>{props.item.text}</p>

            <form>
              <div className="form-check">
                <input
                  type="radio"
                  name="srs"
                  value='again'
                  checked={null}
                  className="again-button"
                  onChange={e => setOption(e.target.value)}
                  />    
              </div>

              <div className="form-check">
                <input
                  type="radio"
                  name="srs"
                  value='hard'
                  checked={null}
                  className="hard-button"
                  onChange={e => setOption(e.target.value)}
                  />    
              </div>

              <div className="form-check">
                <input
                  type="radio"
                  name="srs"
                  value='good'
                  checked={null}
                  className="good-button"
                  onChange={e => setOption(e.target.value)}
                  />    
              </div>

            </form>
        </div>
    )
}

TodoItem.propTypes = {
    handleChange: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
}

export default TodoItem