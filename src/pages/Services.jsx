import React, { useEffect } from 'react'
import ServicesIntro from '../components/services/ServicesIntro'
import ServicesSec2 from '../components/services/ServicesSec2'
import ServicesSec3 from '../components/services/ServicesSec3'
import ServicesSec4 from '../components/services/ServicesSec4'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'
import Floatingbtn from '../components/Floatingbtn'

const Services = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
        <ServicesIntro />
        <ServicesSec2 />
        <ServicesSec3 />
        <ServicesSec4 />
        <Footer/>
        <Floatingbtn />
    </div>
  )
}

export default Services