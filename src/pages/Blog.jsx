import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'
import Floatingbtn from '../components/Floatingbtn'
import BlogIntro from '../components/blog/BlogIntro'
import BlogPreview from '../components/blog/BlogPreview'
import BrowseNews from '../components/blog/BrowseNews'
import ServicesSec4 from '../components/services/ServicesSec4'
import sanityClient from '../../blogClient';
import { PulseLoader } from 'react-spinners'


const Blog = () => {
  const { pathname } = useLocation();

  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  useEffect(() => { 
    sanityClient.fetch(
        `
        *[_type == 'post']{
            ...,
            content[]->{
                ...,
            }
          }
        `
    )
    .then((data) => {
        setStories(data);
        setLoading(false);
        // console.log(data, 'STORIES');
      })
      .catch((err) => {
        setError(err);
        console.log(err);
        setLoading(false);
      });
},[])

if (loading) {
    return (
    <div className='flex items-center justify-center h-screen w-full'>
      <PulseLoader
        size={15} // size of the loader (in pixels)
        color={'#1A8F98'} // color of the loader
        loading={true} // boolean to show/hide the loader
      />
    </div>
  );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const heading = 'Browse Our must-read news and update'

  return (
    <div className='w-full'>
        <BlogIntro />
        <BlogPreview  data={stories[0]} />
        <BrowseNews title={heading} />
        <ServicesSec4 />
        <Footer/>
        <Floatingbtn />
    </div>
  )
}

export default Blog
