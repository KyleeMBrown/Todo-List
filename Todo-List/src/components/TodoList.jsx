import React from "react";
import { useState} from "react";

const TodoList = (props) => {
    const[todoList, setTodoList]= useState([])
    const [inputText, setInputText]=useState('')
    const handleChange = (e)=> {
        setInputText(e.target.value)
    }
    const handleClick = () => {
        if (inputText.trim() !== ''){
            setTodoList([...todoList, inputText])
        }
        
    }
 
    return (
        <>
        <div className='todo-div'>
        <input onChange={handleChange} type='text' className={props.inputClass}></input>
        <button onClick={handleClick}  className={props.buttonClass}>+</button>
        </div>
        <div className='output'>
            <ul>
            {todoList.map((item, index) => {
              return  <li key={index}>{item}</li>
            })}
            </ul>
        </div>
        </>
   
    )
   
}

export default TodoList
