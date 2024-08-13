import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'
import Floatingbtn from '../components/Floatingbtn'
import BlogIntro from '../components/blog/BlogIntro'
import BlogPreview from '../components/blog/BlogPreview'
import BrowseNews from '../components/blog/BrowseNews'
import ServicesSec4 from '../components/services/ServicesSec4'


const Blog = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className='w-full'>
        <BlogIntro />
        <BlogPreview />
        <BrowseNews />
        <ServicesSec4 />
        <Footer/>
        <Floatingbtn />
    </div>
  )
}

export default Blog
