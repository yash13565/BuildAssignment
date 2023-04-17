import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Contact from '../Pages/Contact/Contact'
import Task from '../Pages/Task/Task'
function Routing() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/task' element={<Task/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Routing