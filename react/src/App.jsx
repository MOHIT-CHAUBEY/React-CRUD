import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Create from './components/create'
import Post from './components/Post'
import Read from './components/Read'
import Update from './components/Update'
import Delete from './components/Delete'

function App() {
  return (
    <div>
      <Navbar/>
      
      <h1 className="text-center"> <span className='badge  bg-primary'>C R U D - APP</span></h1>
      <Routes>
        <Route path='/' element = {<h1><Post/></h1>}></Route>
        <Route path='/page1' element = {<h1> <Create/> </h1>}></Route>
        <Route path='/post/:id' element = {<Read/>}></Route>
        <Route path='/page2' element = {<h1><Post/></h1>}></Route>
        <Route path='/page3' element = {<h1><Update/></h1>}></Route>
        <Route path='/update/:id' element = {<Update/>}></Route>
        <Route path='/page4' element = {<h1><Delete/></h1>}></Route>
        <Route path='/delete/:id' element = {<Delete/>}></Route>
      </Routes>

    
    </div>
  )
}

export default App
