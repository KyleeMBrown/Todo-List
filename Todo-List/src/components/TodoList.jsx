import React from "react";
import {useState, useRef} from "react";
import List from "./List";

const TodoList = (props) => {
    const[todoList, setTodoList]= useState([])
    const [inputText, setInputText]=useState('')
    const handleChange = (e)=> {
        setInputText(e.target.value)
    };
    const input = React.useRef();
    const handleClick = () => {
        if (inputText.trim() !== ''){
            setTodoList([...todoList, inputText])
            setInputText('')
            input.current.value = null
        }
    };
 
    return (
        <>
        <div className='todo-div'>
        <input ref={input} onChange={handleChange} type='text' className={props.inputClass}></input>
        <button onClick={handleClick}  className={props.addbuttonClass}>+</button>
        </div>
        <div className='output'>
            <ul>
            {todoList.map((item, index) => {
              return  <List key={index} task={item}/>
            })}
            </ul>
        </div>
        <button className={props.clearbuttonClass}>CLEAR</button>
        </>
   
    )
   
}

export default TodoList


