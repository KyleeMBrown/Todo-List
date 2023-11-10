import React from "react";
import { useState, useEffect } from "react";

const List = (props) => {
    const [display, setDisplay] = useState();
    const handleClick = () => {
        props.onComplete(props.task)

       
    };


    const handleMouseover = () => {
        setDisplay(function changedisplay() {
            return (
                <>
                    <button onClick={handleClick} className='checkmark'><img width='30%' src="/src/assets/checkmark-png-5.png"></img></button>
                    <button  className='delete'>X</button>
                </>
            )
        });
    };
    const handleMouseout = () => {
        setDisplay()
    }

    return (
        <div style={{display:display}} onMouseOut={handleMouseout} onMouseOver={handleMouseover} className='list-div'>
            <li >{props.task}</li>
            {display}
        </div>
    )
}

export default List