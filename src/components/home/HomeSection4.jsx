import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";;
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import img1 from '../../assets/img17.png'
import img2 from '../../assets/img18.png'
import img3 from '../../assets/img19.png'
import img4 from '../../assets/img20.png'
import img12 from '../../assets/img12.png'

const HomeSection4 = () => {

    const items = [
        {
            id: 1,
            number: <h1 className='font-sans text-2xl text-[#282727] font-[600] mr-3 lg:text-3xl xl:text-[40px]'>01</h1>,
            title: 'Seamless delivery Service',
            words: 'Your orders are shipped promptly and effectively by our knowledgeable logistics staff, guaranteeing that you receive your orders on time and in good condition.',
        },
        {
            id: 2,
            number: <h1 className='font-sans text-2xl text-[#F8C605] font-[600] mr-3 lg:text-3xl xl:text-[40px]'>02</h1>,
            title: 'Affordable Price',
            words: 'We provide affordable shipping costs to every location, guaranteeing that you get the most for your money.',
        },
        {
            id: 3,
            number: <h1 className='font-sans text-2xl text-[#282727] font-[600] mr-3 lg:text-3xl xl:text-[40px]'>03</h1>,
            title: 'Professionalism',
            words: 'Our staff members have undergone extensive training to handle your services using the most recent technology and the best standards in the business.',
        },
        {
            id: 4,
            number: <h1 className='font-sans text-2xl text-[#F8C605] font-[600] mr-3 lg:text-3xl xl:text-[40px]'>04</h1>,
            title: 'Excellent Customer Service',
            words: 'The satisfaction of our customers is crucial to us because they are the reason we are in business.',
        },
    ]

  return (
    <div className='flex flex-col justify-center px-7 py-12 mt-12 bg-[#F5F5F6] md:px-16 lg:px-20 lg:pb-24 xl:pb-36'>
                 {/* TOP */}
        <div className='lg:flex lg:flex-row'>
        <div className='flex flex-col items-start justify-center'>
            <div className=''>
                <p className='font-sans text-[#1A8F98] text-[16px] font-[600] md:text-[18px] md:font-[700] lg:w-[50%] xl:text-[21px] xl:font-[600]'>
                    WHY CHOOSE US
                </p>
                <h1 className='font-sans text-2xl font-[700] text-[#181818] mt-1 md:font-[800] xl:text-[42px] xl:leading-[50px] xl:mt-2'>
                   Trusted by more <span className='text-[#1A8F98]'>150+</span> <br /> Partners in China
                </h1>
                <p className='font-sans text-[12px] mt-2 font-[500] leading-5 md:w-[85%] md:text-[14px] xl:text-[19px] xl:my-7'>
                    Our unshakable dedication to ethics serves as the cornerstone of everything we do. We are able to establish confidence with our clients and business partners and foster enduring relationships because of this devotion.
                </p>
            </div>
        </div>
            {/* CAROUSEL */}
        <div className='flex flex-row items-center justify-center mt-8 md:mt-12'>
           <Swiper 
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
             className="w-screen h-[20rem] lg:w-[400px] xl:w-[40rem] xl:h-[30rem]">
               <SwiperSlide className='flex flex-row items-center justify-center text-center'>
                   <img src={img1} alt="" />
               </SwiperSlide>
               <SwiperSlide className='flex flex-row items-center justify-center text-center'>
                   <img src={img2} alt="" />
               </SwiperSlide>
               <SwiperSlide className='flex flex-row items-center justify-center text-center'>
                   <img src={img3} alt="" />
               </SwiperSlide>
               <SwiperSlide className='flex flex-row items-center justify-center text-center'>
                   <img src={img4} alt="" />
               </SwiperSlide>
           </Swiper>
        </div>
        </div>

                      {/* BOTTOM */}
        <div className='flex flex-col items-center justify-center mt-10 md:flex-row md:items-center md:justify-between lg:mt-10 lg:mx-8 xl:mt-16 xl:mx-12'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='font-sans text-2xl text-[#5F5F5F] font-[600] lg:text-2xl lg:font-[800] xl:text-[42px] xl:mb-8'>
                   We are known for
                </h1>
                <div className='flex flex-row items-center justify-center mt-5 h-[22rem] w-[18rem] bg-[#F8C605] relative lg:h-[25rem] lg:w-[20rem] xl:h-[34rem] xl:w-[26rem]'>
                    <img className='absolute h-[22rem] w-[18rem] top-4 right-4 lg:h-[25rem] lg:w-[20rem] xl:h-[34rem] xl:w-[26rem] xl:top-7 xl:right-7' 
                    src={img12} alt="..." />
                </div>
            </div>

            <div className='flex flex-col items-start justify-center mt-16 md:w-[50%]'>
                {items.map((item) => {
                    return(
                <div key={item.id} className='flex flex-row items-start justify-between my-3 xl:my-5'>
                      {item.number}
                    <div>
                        <h1 className='font-sans text-xl text-[#282727] font-[600] md:text-lg lg:text-2xl xl:text-[36px]'>
                           {item.title}
                        </h1>
                        <p className='font-sans text-[14px] text-[#333333] md:text-[13px] md:w-[17rem] lg:w-[23rem] xl:w-[35rem] xl:text-[20px] xl:mt-2'>
                           {item.words}
                        </p>
                    </div>
                </div>
                  )
                })}
            </div>
        </div>

    </div>
  )
}

export default HomeSection4