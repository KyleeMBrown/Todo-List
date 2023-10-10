import React from "react";
import { useState } from "react";

const List = (props) => {
    const [display, setDisplay] = useState();
    const [complete, setComplete] = useState('')
    const [cList, setClist]= useState([])
    const handleClick = () => {
        setComplete('none')
        setClist([...cList, props.task])
        console.log(props.task)
    }
    const handleMouseover = () => {
        setDisplay(function changedisplay() {
            return (
                <>
                    <button onClick={handleClick}  className='checkmark'><img width='30%' src="/src/assets/checkmark-png-5.png"></img></button>
                    <button  className='delete'>X</button>
                </>
            )
        });
    };
    const handleMouseout = () => {
        setDisplay()
    }

    return (
        <div   style={{display:complete}} onMouseOut={handleMouseout} onMouseOver={handleMouseover} className='list-div'>
            <li >{props.task}</li>
            {display}
        </div>
    )
}

export default List