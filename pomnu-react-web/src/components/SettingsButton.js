import React, { useState } from 'react'
import "./SettingsButton.css"

export default function SettingsButton(props) {

  const [open, setOpen] = useState(false)
  
  return (
        <>
          <li className="settings-button">
            <a href="icon" className="icon-button" onClick={e => { setOpen(!open); e.preventDefault();}}>
              <img src={props.icon} alt="dots" />
            </a>

            {open && props.children}
          </li>  
        </>
    )
  

}

