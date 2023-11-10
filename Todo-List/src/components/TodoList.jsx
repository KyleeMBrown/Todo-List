import React from "react";
import { useState } from "react";
import List from "./List";

const TodoList = (props) => {
    const [todoList, setTodoList] = useState([])
    const [inputText, setInputText] = useState('')
    const [finishedList, setFinishedList] = useState([])
    const [completeDisplay, setCompleteDisplay] = useState('none')
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
 console.log("todo:" + todoList)
    const handleComplete = (task) =>{
            const updatedTodoList = todoList.filter((item) => item != task);
            setTodoList(updatedTodoList)
            setFinishedList([...finishedList, task])
            if(finishedList.length === 0 ){
               return setCompleteDisplay('inline')
            }
            
    }
    const onDelete= (task) => {
       const newTodoList = todoList.filter((item)=> item != task)
       setTodoList(newTodoList)
        
    }
    

  
    return (
        <>
            <div className='todo-div'>
                <input onKeyDown={handleKeydown} ref={input} onChange={handleChange} type='text' className={props.inputClass}></input>
                <button onClick={handleClick} className={props.addbuttonClass}>+</button>
            </div>
            <div className='output'>
                <ul>
                    {todoList.map((item, index) => {
                        return <List  onComplete={handleComplete}  key={index} task={item} handleDel={onDelete} />
                    })}
                </ul>
            </div>
            <h1 className="complete" style={{display:completeDisplay}} >Complete</h1>
            <div className="output" style={{display:completeDisplay}}>
                <ul>
                {finishedList.map((item, index) => {
                        return <List onComplete={handleComplete} checkDisp='none' key={index} task={item}   />
                    })}
                </ul>
            </div>
            <button 
            onClick={function(){
                setTodoList([])
                setFinishedList([])
                setCompleteDisplay('none')
                }} 
            className={props.clearbuttonClass}
            >CLEAR
            </button>
        </>

    )
  
}

export default TodoList


