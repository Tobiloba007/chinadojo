import React from 'react'
import HomeIntro from '../components/home/HomeIntro'
import HomeSection2 from '../components/home/HomeSection2'
import HomeAbout from '../components/home/HomeAbout'
import HomeServices from '../components/home/HomeServices'
import HomeSection4 from '../components/home/HomeSection4'
import HomeTestimonials from '../components/home/HomeTestimonials'
import HomeFaq from '../components/home/HomeFaq'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <HomeIntro />
      <HomeSection2 />
      <HomeServices />
      <HomeSection4 />
      <HomeTestimonials />
      <HomeFaq  />
      <Footer />
    </div>
  )
}

export default Home