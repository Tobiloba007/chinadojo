import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Services from "./pages/Services"
import About from "./pages/About"
import Policy from "./pages/Policy"

function App() {
  return (
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/services" element={<Services />} />
         <Route path="/about" element={<About />} />
         <Route path="/policy" element={<Policy />} />
       </Routes>
    </BrowserRouter>
  )
}

export default App
