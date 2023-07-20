import React from 'react'
import { useSelector } from 'react-redux'
import NavLink from './NavLink'

function Nav() {

    return (
        <div className="Nav" style={{'backgroundColor': 'white'}}>
            <NavLink content="Blog" />
            <NavLink content="About Me" />
            <NavLink content="Projects" />
            <NavLink content="Other" />
        </div>
    )
}

export default Nav
