import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import { useLocation, useParams } from 'react-router-dom'
import Floatingbtn from '../components/Floatingbtn'
import BlogIntro from '../components/blog/BlogIntro'
import BrowseNews from '../components/blog/BrowseNews'
import NewsDetails from '../components/blog/NewsDetails'
import sanityClient from '../../blogClient'
import { PulseLoader } from 'react-spinners'


const NewsPreview = () => {
  const [story, setStory] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);
  const { slug } = useParams()

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  

  useEffect(() => { 
    sanityClient.fetch(
        `
        *[slug.current == "${slug}"]{
            ...,
            content[]->{
                ...,
            }
          }
        `
    )
    .then((data) => {
      setStory(data[0]);
        setLoading(false);
        // console.log(data, 'STORIES');
      })
      .catch((err) => {
        setError(err);
        console.log(err);
        setLoading(false);
      });
},[slug])

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

  const heading = 'Check Related Articles and News'

  return (
    <div className='w-full'>
        <BlogIntro />
        <NewsDetails data={story} />
        <BrowseNews title={heading} />
        <Footer/>
        <Floatingbtn />
    </div>
  )
}

export default NewsPreview
