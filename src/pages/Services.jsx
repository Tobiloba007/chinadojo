import React from 'react'
import ServicesIntro from '../components/services/ServicesIntro'
import ServicesSec2 from '../components/services/ServicesSec2'
import ServicesSec3 from '../components/services/ServicesSec3'
import ServicesSec4 from '../components/services/ServicesSec4'
import Footer from '../components/Footer'

const Services = () => {
  return (
    <div>
        <ServicesIntro />
        <ServicesSec2 />
        <ServicesSec3 />
        <ServicesSec4 />
        <Footer/>
    </div>
  )
}

export default Services