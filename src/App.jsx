import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Services from "./pages/Services"
import About from "./pages/About"
import Policy from "./pages/Policy"
import Demo from "./components/Demo"
import ShippingTools from "./pages/ShippingTools"
import Blog from "./pages/Blog"
import NewsPreview from "./pages/NewsPreview"

function App() {
  return (
    <Router>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/services" element={<Services />} />
         <Route path="/about" element={<About />} />
         <Route path="/policy" element={<Policy />} />
         <Route path="/shipping-tools" element={<ShippingTools />} />
         <Route path="/demo" element={<Demo />} />
         <Route path="/blog" element={<Blog/>} />
         <Route path="/newsPreiew" element={<NewsPreview/>} />
       </Routes>
    </Router>
  )
}

export default App
