import React, { useEffect } from 'react'
import HomeIntro from '../components/home/HomeIntro'
import HomeSection2 from '../components/home/HomeSection2'
import HomeAbout from '../components/home/HomeAbout'
import HomeServices from '../components/home/HomeServices'
import HomeSection4 from '../components/home/HomeSection4'
import HomeTestimonials from '../components/home/HomeTestimonials'
import HomeFaq from '../components/home/HomeFaq'
import Footer from '../components/Footer'
import Floatingbtn from '../components/Floatingbtn'
import { useLocation } from 'react-router-dom';
import Rate from '../components/home/Rate'

const Home = () => {
  const location = useLocation();
  const sectionId = new URLSearchParams(location.search).get('sectionId');

  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [sectionId]);

  return (
    <div>
      <HomeIntro />
      <HomeSection2 />
      <HomeServices />
      <HomeSection4 />
      <div id='rate'>
       <Rate /> 
      </div>
      <div id='testimonials'>
       <HomeTestimonials />
      </div>
      <HomeFaq  />
      <div id='footer'>
        <Footer />
      </div>
      <Floatingbtn />
    </div>
  )
}

export default Home