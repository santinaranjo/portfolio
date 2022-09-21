import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
// Dev
import { Projects } from './Components/Projects/Projects'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                // Dev
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
