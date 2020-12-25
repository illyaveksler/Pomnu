import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import {ReactComponent as Select} from "../assets/check-circle-regular.svg"
import {ReactComponent as Tutorial} from "../assets/chalkboard-solid.svg"
import {ReactComponent as DarkMode} from "../assets/adjust-solid.svg"
import {ReactComponent as SignIn} from "../assets/sign-in-alt-solid.svg"
import {ReactComponent as SignOut} from "../assets/sign-out-alt-solid.svg"
import {ReactComponent as About} from  "../assets/info-circle-solid.svg"
import './DropdownMenu.css'

export default function DropdownMenu() {

    const [activeMenu, setActiveMenu] = useState('main')

    function DropdownItem(props) {
        return(
            <a href="item" className="menu-item">
                
                {props.children}
                <span className="icon-button">{props.rightIcon}</span>
            </a>
        )
    }

    return(
        <div className="dropdown">
            <DropdownItem rightIcon={<Select />}>&nbsp;&nbsp;&nbsp;Select</DropdownItem>
            <DropdownItem rightIcon={<DarkMode />}>&nbsp;&nbsp;&nbsp;Dark Mode</DropdownItem>
            <DropdownItem rightIcon={<Tutorial />}>&nbsp;&nbsp;&nbsp;Tutorial</DropdownItem>
            <DropdownItem rightIcon={<About />}>&nbsp;&nbsp;&nbsp;About</DropdownItem>
            <DropdownItem rightIcon={<SignIn />}>&nbsp;&nbsp;&nbsp;Log In</DropdownItem>
        </div>
    )
}
