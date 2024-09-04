import React, { useEffect } from 'react'
import bgImg from '../../assets/blog1.jpg'
import { IoTimeOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import moment from 'moment';
import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '../../../blogClient';



const BlogPreview = ({data}) => {

    useEffect(()=>{
        // console.log(data, 'CONTENT');

    },[])

    const builder = imageUrlBuilder(sanityClient);


  return (
    <main className='flex flex-col items-start justify-start w-full font-inter mt-7 mb-2 px-5 md:px-8 lg:px-11 xl:px-24 xl:mt-12 max-w-[1440px]'>
         <div className='w-full'>
             <p className='text-[15px] text-[#130F26] font-medium font-sans text-start w-full pt-2.5 md:pt-0 md:text-[17px] lg:text-lg xl:text-2xl'>
                  Stay Informed with the Latest News and update
             </p>
             <p className='text-[12px] text-[#7B8794] font-normal leading-[21px] pt-3 md:pt-1.5 md:text-[11px] lg:leading-[22px] lg:text-xs xl:text-sm xl:leading-8'>
                  Catch Up on Recent Activities, Innovations, and Industry Trends and Explore important Announcements, and Industry Developments
             </p>
         </div>

         <div className='flex items-center justify-start w-full mt-8 md:mt-9 xl:mt-10'>
              <p className='text-sm text-[#1A8F98] font-medium font-sans text-start w-full md:text-[15px] lg:text-[17px] xl:text-[21px]'>
                    Our most recent news and update
              </p>
         </div>

         <Link to={`/blog/${data.slug.current}`} className='relative flex items-end justify-center w-full mt-3.5 md:mt-6 lg:mt-8 xl:mt-9'>
             <img className='h-[500px] w-full object-cover rounded-2xl md:h-[400px] md:rounded-3xl lg:h-[450px] xl:h-[650px]'
             src={builder.image(data.mainImage.asset._ref).url()} 
             alt='preview_img' loading='lazy' />
             <div className='absolute opacity-50 h-[500px] w-full bg-[#191919] rounded-2xl md:h-[400px] md:rounded-3xl lg:h-[450px] xl:h-[650px]'></div>

             <div className='absolute flex flex-col items-start w-full px-3 pb-5 md:px-8 lg:px-11 xl:px-16'>
                  <p className='text-base text-[#F8C605] font-medium font-sans text-start capitalize mt-3 pr-3 leading-7 w-full md:text-lg md:w-[95%] md:font-normal lg:text-2xl lg:leading-8 
                                lg:font-light lg:w-[85%] xl:mt-4 xl:text-[32px] xl:leading-[45px]'>
                      {data.title}
                  </p>
                  <p className='text-[13px] text-[#ffffff] font-normal text-start mt-3 pr-3 leading-6 w-full md:font-light md:w-[95%] md:leading-5 lg:leading-[22px] xl:mt-4 
                                xl:leading-7 xl:text-base'>
                      {`${data.body[0].children[0].text.substring(0, 200)}...`}
                      <span className='text-[#F8C605] font-medium text-sm ml-1.5'>Read more</span>
                  </p>

                  <hr className='border-[1px] border-[#dddddd] opacity-70 w-full mt-3 md:mt-10 lg:mt-8 xl:mt-12' />

                  <div className='flex items-center justify-between w-full mt-5 mb-3 md:mb-0 lg:mb-2 xl:mt-6 xl:mb-3'>
                      <div className='flex items-center justify-start w-[70%]'>
                         <div className='flex justify-start items-center'>
                             <IoTimeOutline className='text-base text-white md:text-lg xl:text-xl' />
                             <p className='text-[10px] text-white font-light text-start pl-1.5 pt-[2px] lg:text-xs xl:text-sm'>
                                  {moment(data.publishedAt).format('D MMMM, YYYY')}
                             </p>
                         </div>
                      </div>

                      <div className='flex justify-end items-center w-[35%]'>
                             <IoBookOutline className='text-base text-white xl:text-xl' />
                             <p className='text-[10px] text-white font-light pl-1.5 pt-[2px] lg:text-xs xl:text-sm'>
                                 {data.readngTime} read
                             </p>
                         </div>
                  </div>
             </div>
         </Link>

    </main>
  )
}

export default BlogPreview
