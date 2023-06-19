import './App.css'
import {  Outlet } from 'react-router-dom'


import Navbar from './components/Navbar'

function App() {
  

  return (
    <div className='app'>
        <Navbar />
      <h2> Movies Lib </h2>
       <Outlet />

    </div>
  )
}

export default App
