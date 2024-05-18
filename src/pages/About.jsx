import React, { useEffect } from 'react'
import AboutIntro from '../components/about/AboutIntro'
import AboutSec2 from '../components/about/AboutSec2'
import Footer from '../components/Footer'
import Floatingbtn from '../components/Floatingbtn'
import { useLocation } from 'react-router-dom'

const About = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <div>
        <AboutIntro />
        <AboutSec2 />
        <Footer />
        <Floatingbtn />
    </div>
  )
}

export default About