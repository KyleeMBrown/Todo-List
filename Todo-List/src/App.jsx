import React from 'react'
import './App.css'
import Header from './components/Header'
import Dashboard from './components/Dahboard'
import TodoList from './components/TodoList'

function App() {
  return (
    <>
      <Header navClass='nav' title='ToDo List App'/>
      <Dashboard className='dash'>
        <TodoList buttonClass="todo-button" inputClass="todo-input"/>
      </Dashboard>
    </>
  );
}

export default App
