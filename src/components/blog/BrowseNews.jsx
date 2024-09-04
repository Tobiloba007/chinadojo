import React, { useEffect, useState } from 'react'
import { IoTimeOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import moment from 'moment';
import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '../../../blogClient'



const BrowseNews = ({title}) => {
    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
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
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error: {error.message}</p>;
    }

    const builder = imageUrlBuilder(sanityClient);

  return (
    <main className='flex flex-col items-start justify-start w-full font-sans mb-9 px-5 mt-5 md:px-10 md:mb-0 lg:px-11 lg:mt-8 xl:px-24 xl:mt-12 xl:mb-14 max-w-[1440px]'>
         <div className='flex items-center justify-start w-full mt-8 md:mt-12 xl:mt-10'>
             <p className='text-sm text-[#1A8F98] font-medium font-sans text-start w-full md:text-[15px] lg:text-[17px] xl:text-[21px]'>
                   {title}
             </p>
         </div>


         <div className='flex flex-col items-start w-full mt-5 md:flex-row md:items-start md:justify-start md:flex-wrap'>
              {stories.slice(0, 3).map((item) => (
               <Link key={item.slug.current} to={`/blog/${item.slug.current}`} className={`flex flex-col items-start w-full mb-8 md:mr-3 md:w-[31.5%] lg:mr-3.5 lg:w-[31.5%] xl:mr-5`}>
                   <img className='h-[224px] w-full rounded-t-xl object-cover md:h-40 lg:h-[180px] xl:h-72 xl:rounded-t-2xl'
                   src={builder.image(item.mainImage.asset._ref).url()} alt='news_image' />

                   <div className='flex flex-col items-start w-full px-3 mt-2 md:px-1.5'>
                      <div className='flex items-center justify-start w-full font-inter mt-2.5'>
                         <div className='flex justify-start items-center'>
                             <IoTimeOutline className='text-lg text-[#7B8794] md:text-base xl:text-xl' />
                             <p className='text-[11px] text-[#7B8794] font-light text-start pl-1.5 pt-[2px] md:font-normal md:text-[10px] xl:text-xs'>
                                 {moment(item.publishedAt).format('D MMMM, YYYY')}
                             </p>
                         </div>
                      </div>

                      <p className='text-lg font-semibold text-[#130F26] mt-3.5 w-[90%] md:text-sm md:leading-[22px] lg:mt-2.5 lg:text-xl'>
                             {`${item.title.substring(0, 30)}...`}
                      </p>

                      <p className='text-xs font-normal text-[#7B8794] mt-2 leading-5 text-start overflow-hidden text-overflow-ellipsis break-words max-w-[50ch] 
                                    md:text-[10px] md:mt-1.5 xl:text-[12px]'>
                              {`${item.body[0].children[0].text.substring(0, 125)}...`}
                          <span className='text-xs text-[#F8C605] pl-2 font-medium md:text-[10px] xl:text-xs'>Read more</span>
                      </p>

                      <hr className='border-[0.5px] border-[#D0D5DD] opacity-40 w-full mt-3 md:mt-2.5' />

                      <div className='flex items-center justify-between w-full mt-3.5 md:mt-2 xl:mt-3.5'>
                          <p className='text-[11px] text-[#7B8794] font-light md:text-[9px] lg:text-[9.5px] lg:font-normal xl:text-[11px]'>
                              {item.readngTime} read
                          </p>
                      </div>

                   </div>
               </Link>
               ))}

         </div>


         <div className='flex items-center justify-end w-full md:mt-7'>
              <Link to='/viewAllPosts' className='flex items-center justify-center h-8 px-4 rounded-md bg-[#1A8F98] text-[11px] text-white 
                                                  font-medium md:px-4 md:text-xs xl:text-base xl:h-12 xl:px-7 xl:rounded-lg'>
                View all posts
              </Link>
         </div>

    </main>
  )
}

export default BrowseNews
