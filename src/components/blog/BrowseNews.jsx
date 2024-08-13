import React from 'react'
import newsImg1 from '../../assets/blog1.jpg'
import newsImg2 from '../../assets/blog1.jpg'
import newsImg3 from '../../assets/blog1.jpg'
import { IoTimeOutline } from 'react-icons/io5'
import { PiDiamondsFourFill } from 'react-icons/pi'
import { BsChatSquareText } from "react-icons/bs";
import { Link } from 'react-router-dom'


const BrowseNews = () => {

    const news = [
        {
            id: 1,
            image: newsImg1,
            newType: 'IT news',
            date: 'July 29, 2024',
            title: 'All New Windows 10 Has A Massive, Unfixable Problem',
            desc: 'Stores mail accounts in your favourite backend: OpenDAP',
            timeToRead: '5 mins read',
            comment: '(4)'
        },
        {
            id: 2,
            image: newsImg2,
            newType: 'IT news',
            date: 'July 29, 2024',
            title: 'All New Windows 10 Has A Massive, Unfixable Problem',
            desc: 'Stores mail accounts in your favourite backend: OpenDAP',
            timeToRead: '5 mins read',
            comment: '(4)'
        },
        {
            id: 3,
            image: newsImg3,
            newType: 'IT news',
            date: 'July 29, 2024',
            title: 'All New Windows 10 Has A Massive, Unfixable Problem',
            desc: 'Stores mail accounts in your favourite backend: OpenDAP',
            timeToRead: '5 mins read',
            comment: '(4)'
        },
    ]

  return (
    <main className='flex flex-col items-start justify-start w-full font-sans mb-9 px-5 mt-5 md:px-10 md:mb-0 lg:px-11 lg:mt-8 xl:px-24 xl:mt-12 xl:mb-14 max-w-[1440px]'>
         <div className='flex items-center justify-start w-full mt-8 md:mt-12 xl:mt-10'>
             <p className='text-sm text-[#1A8F98] font-medium font-sans text-start w-full md:text-[15px] lg:text-[17px] xl:text-[21px]'>
                   Browse Our must-read news and update
             </p>
         </div>


         <div className='flex flex-col items-start w-full mt-5 md:flex-row md:items-start md:justify-between md:flex-wrap'>
              {news.map((item) => (
               <Link to='/newsPreiew' key={item.id} className={`flex flex-col items-start w-full mb-8 md:w-[32%] lg:w-[32.2%]`}>
                   <img className='h-[224px] w-full rounded-t-xl object-cover md:h-40 lg:h-[180px] xl:h-72 xl:rounded-t-2xl'
                   src={item.image} alt='news_image' />

                   <div className='flex flex-col items-start w-full px-3 mt-2 md:px-1.5'>
                      <div className='flex items-center justify-start w-full font-inter mt-2.5'>
                         <div className='flex justify-start items-center'>
                             <IoTimeOutline className='text-lg text-[#7B8794] md:text-base xl:text-xl' />
                             <p className='text-[11px] text-[#7B8794] font-light text-start pl-1.5 pt-[2px] md:font-normal md:text-[10px] xl:text-xs'>
                                 {item.date}
                             </p>
                         </div>
                      </div>

                      <p className='text-lg font-semibold text-[#130F26] mt-3.5 w-[90%] md:text-sm md:leading-[22px] lg:mt-2.5 lg:text-xl'>
                          {item.title}
                      </p>

                      <p className='text-xs font-normal text-[#7B8794] mt-2 leading-5 text-start overflow-hidden text-overflow-ellipsis break-words max-w-[50ch] 
                                    md:text-[10px] md:mt-1.5 xl:text-[12px]'>
                          {item.desc.split(' ').slice(0, 50).join(' ') + '...'}
                          <span className='text-xs text-[#F8C605] font-medium md:text-[10px] xl:text-xs'>Read more</span>
                      </p>

                      <hr className='border-[0.5px] border-[#D0D5DD] opacity-40 w-full mt-3 md:mt-2.5' />

                      <div className='flex items-center justify-between w-full mt-3.5 md:mt-2 xl:mt-3.5'>
                          <p className='text-[11px] text-[#7B8794] font-light md:text-[9px] lg:text-[9.5px] lg:font-normal xl:text-[11px]'>
                              {item.timeToRead}
                          </p>

                          <div className='flex items-center justify-end'>
                              <BsChatSquareText className='text-sm md:text-xs lg:text-base' />
                              <p className='text-[11px] text-[#7B8794] font-light pl-2 md:text-[9px] lg:text-[9.5px] lg:font-normal xl:text-[11px]'>
                                  {item.comment}
                              </p>
                          </div>
                      </div>

                   </div>
               </Link>
               ))}

         </div>

    </main>
  )
}

export default BrowseNews
