import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Services from "./pages/Services"
import About from "./pages/About"
import Policy from "./pages/Policy"
import Demo from "./components/Demo"
import ShippingTools from "./pages/ShippingTools"

function App() {
  return (
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/services" element={<Services />} />
         <Route path="/about" element={<About />} />
         <Route path="/policy" element={<Policy />} />
         <Route path="/shipping-tools" element={<ShippingTools />} />
         <Route path="/demo" element={<Demo />} />
       </Routes>
    </BrowserRouter>
  )
}

export default App
