import React from 'react'
import './App.css'
import Header from './components/Header'
import Dashboard from './components/Dahboard'

function App() {
  return (
    <>
    <Header navClass='nav' title='ToDo List App'/>
    <Dashboard className='dash'/>
    </>
  );
}

export default App
