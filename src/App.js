import './App.css'
import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { Portfolio } from './Pages/Portfolio/Portfolio'
import { Contact } from './Pages/Contact/Contact'
import { About } from './Pages/About/About'

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contacto" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </HashRouter>
    )
}

export default App
