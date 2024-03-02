import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './component/Dashboard'

function App() {

  function clickMe(){
    console.log("Im Clicked")
  }

  return (
   <div>
    <Dashboard click={clickMe}></Dashboard>
   </div>
  )
}

export default App
