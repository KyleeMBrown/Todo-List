import React from "react";
import { useState } from "react";
import List from "./List";

const TodoList = (props) => {
    const [todoList, setTodoList] = useState([])
    const [inputText, setInputText] = useState('')
    const [finishedList, setFinishedList] = useState([])
    const handleChange = (e) => {
        setInputText(e.target.value)
    };
    const input = React.useRef();
    const handleClick = () => {
        if (inputText.trim() !== '') {
            setTodoList([...todoList, inputText])
            setInputText('')
            input.current.value = null
        }
       
    };
    const handleKeydown = (e) => {
        if (e.key === 'Enter') {
            console.log(e.key)
            handleClick()
        }
 }

    const handleComplete = (task) =>{
            const updatedTodoList = todoList.filter((item) => item != task);
            setTodoList(updatedTodoList)
            setFinishedList([...finishedList, task])
    }

 console.log('todo-List:'+ todoList)
 console.log('finished-List:' + finishedList)
    return (
        <>
            <div className='todo-div'>
                <input onKeyDown={handleKeydown} ref={input} onChange={handleChange} type='text' className={props.inputClass}></input>
                <button onClick={handleClick} className={props.addbuttonClass}>+</button>
            </div>
            <div className='output'>
                <ul>
                    {todoList.map((item, index) => {
                        return <List  onComplete={handleComplete}  key={index} task={item} />
                    })}
                </ul>
            </div>
            <div className="output">

            </div>
            <button className={props.clearbuttonClass}>CLEAR</button>
        </>

    )

}

export default TodoList


