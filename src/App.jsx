import React from 'react'
import './App.css'
import Navbar from './components/navbar'
import { Routes, Route } from 'react-router-dom'
import { Home } from './page/Home'
import { Contact } from './page/Contact'
import { Service } from './page/Service'
import { About } from './page/About'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/About' element={<About/>}></Route>
        <Route path="/Services" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
