import React, { useEffect } from 'react'
import { IoBookOutline, IoTimeOutline } from 'react-icons/io5'
import imageUrlBuilder from '@sanity/image-url';
import moment from 'moment';
import sanityClient from '../../../blogClient'
import BlockContent from "@sanity/block-content-to-react"



const NewsDetails = ({data}) => {

    useEffect(()=>{
        console.log(data, 'CONTENTs'); 
    },[])

    const builder = imageUrlBuilder(sanityClient);


  return (
    <main className='flex flex-col items-start w-full font-inter px-5 mt-10 md:px-10 lg:px-12 lg:items-center xl:px-24 max-w-[1440px]'>
         <p className='text-[16px] text-[#130F26] font-medium text-start w-full font-sans pt-2 md:pt-3 md:text-[18px] lg:text-[22px] xl:text-[28px] xl:pt-4'>
              {data.title}
         </p>

         <img className='mt-7 rounded-xl h-[250px] object-cover w-full md:h-[325px] md:rounded-[20px] lg:h-[425px] lg:rounded-[22px] xl:h-[600px] xl:rounded-[26px] xl:mt-10' 
         src={builder.image(data.mainImage.asset._ref).url()} alt='news_image' loading='lazy' />

         <hr className='border-[1px] border-[#D0D5DD] opacity-50 w-full mt-5 md:mt-6 lg:mt-7 lg:w-[90%] xl:mt-8' />

         <div className='flex items-center justify-between w-full text-[#7B8794] mt-4 mb-3 md:mb-0 lg:mb-2 lg:mt-7 lg:w-[90%] xl:mt-9 xl:mb-3'>
             <div className='flex items-center justify-start w-[70%] md:w-[50%]'>
                <div className='flex justify-start items-center'>
                    <IoTimeOutline className='text-base md:text-lg xl:text-xl' />
                    <p className='text-[10px] font-normal text-start pl-1.5 pt-[2px] lg:text-[11px] xl:text-sm'>
                         {moment(data.publishedAt).format('D MMMM, YYYY')}
                    </p>
                </div>
             </div>

             <div className='flex justify-end items-center w-[35%] md:w-[50%]'>
                 <div className='flex justify-end items-center'>
                     <IoBookOutline className='text-base xl:text-xl' />
                     <p className='text-[10px] font-normal pl-1.5 pt-[2px] lg:text-[11px] xl:text-sm'>
                         {data.readngTime} read
                     </p>
                 </div>

                 {/* <div className='hidden md:flex items-center justify-start py-1.5 md:pl-3.5 lg:pl-4 xl:pl-5'>
                      <PiArrowBendUpLeftBold className='text-[#77C214] text-base xl:text-xl' />
                      <p className='text-[10px] font-medium text-[#77C214] pl-2  lg:text-xs xl:text-sm'>
                          Share news and update
                     </p>
                 </div> */}
             </div>

         </div>

         {/* <div className='flex items-center justify-start py-1.5 md:hidden'>
                <PiArrowBendUpLeftBold className='text-[#77C214] text-base' />
                <p className='text-[10px] font-medium text-[#77C214] pl-2'>
                     Share news and update
                </p>
         </div> */}


         {/* BACKGROUND */}
         <div className='flex flex-col items-start w-full mt-6 font-sans md:mt-9 md:items-center lg:mt-10 xl:mt-14'>
             {/* <p className='text-[16px] text-[#130F26] font-medium font-sans text-start w-full md:text-[18px] lg:text-[22px] xl:text-[28px]'>
                 Background
             </p> */}

             {/* <p className='text-[11px] text-[#7B8794] font-normal leading-6 pt-1.5 text-start w-full md:leading-[23px] lg:text-xs lg:leading-6 xl:pt-2 xl:text-[15px] xl:leading-8'>
                 {data.body[0].children[0].text}
             </p> */}

             <BlockContent
              blocks={data.body}
              projectId="5dpr21dm"
              dataset="blog"
              serializers={{
                types: {
                  heading: (props) => (
                    <h2 className="text-2xl font-bold">{props.children}</h2>
                  ),
                },
                mark: {
                  bold: (props) => (
                    <span className="font-bold text-red-500">{props.children}</span>
                  ),
                },
                text: (props) => (
                  <span className="text-[11px] text-[#7B8794] leading-6 pt-1.5 text-start md:leading-[23px] lg:text-xs lg:leading-6 
                                   xl:pt-2 xl:text-base xl:leading-8">
                    {props.children}
                    </span>
                ),
                list: ({ children }) => (
                  <ul className="text-[11px] text-[#7B8794] font-normal list-decimal leading-6 ml-4 pt-1.5 text-start w-full md:leading-[23px] lg:text-xs lg:leading-6 
                                 xl:pt-2 xl:text-base xl:leading-8">
                    {children}
                  </ul>
                ),
                listItem: ({ children }) => (
                  <li className="text-[11px] text-[#7B8794] font-normal leading-6 pt-1.5 text-start w-full md:leading-[23px] lg:text-xs lg:leading-6 
                                  xl:pt-2 xl:text-base xl:leading-8">
                    {children}
                  </li>
                ),
                types: {
                  link: ({ children, href }) => {
                    return <a href={href}className='text-red-600'>{children}</a>;
                  },
                },
                types: {
                  link: (props) => {
                    const href = props.node.url;
                    return (
                      <a href={href} target="_blank" rel="noopener noreferrer">
                        <span style={{ textDecoration: 'underline' }}>
                          {props.node.children[0].text}
                        </span>
                      </a>
                    );
                  },
                },
                
               }}
               imageOptions={{
                fit: 'max',
                w: 650, 
                h: 650,
                [window.innerWidth < 768]: {
                  w: 200,
                  h: 200,
                },
               }}
            />

             {/* <img className='c w-full md:w-[75%] md:my-5 md:h-[285px] md:rounded-2xl lg:w-[70%] lg:h-[350px] xl:w-[65%] xl:h-[500px] xl:rounded-3xl'
             src={mainImg} alt='news_img' />

             <p className='text-[11px] text-[#7B8794] font-normal leading-6 pt-1.5 text-start w-full lg:text-xs lg:leading-[24px] xl:text-[15px] xl:leading-8'>
                 However, you can skip many of configuration problems and setup complete email solution for privacy and security reasons. So, I am going to list 
                 software that can turn any Linux, FreeBSD, OpenBSD or Unix-powered into mail server out of a box with the following goals:
             </p>

             <p className='text-[11px] text-[#7B8794] font-normal leading-6 pt-4 text-start w-full lg:text-xs lg:leading-[24px] xl:text-[15px] xl:leading-8 xl:pt-6'>
                 1. The software must be open source
                 <br />
                 2. The software must run on Linux or Unix-like server
                 <br />
                 3. The software must deploy quickly
                 <br />
                 4. The software setup must be easy for new sysadmin
                 <br />
                 5. The software must support multiple users and multiple domain names
                 <br />
                 6. Must promote privacy and decentralization
             </p> */}
             
         </div>

         
    </main>
  )
}

export default NewsDetails
