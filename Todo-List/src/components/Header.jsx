import React from 'react'

 function Header(props) {
    return (
        <nav className= {props.navClass}>
            <h1>{props.title}</h1>
        </nav>
    )
}

export default Header