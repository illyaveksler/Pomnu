import React, { useState } from 'react'
import Dots from "../assets/ellipsis-h-solid.svg"
import "./SettingsButton.css"

export default function SettingsButton() {

  const [open, setOpen] = useState(false)

  return (
        <>
          <button className="settings-button" onClick={() => setOpen(!open)}>
            <img src={Dots} alt="dots"></img>

            { /*Dropdown goes here.*/ }

          </button>  
        </>
    )
}
