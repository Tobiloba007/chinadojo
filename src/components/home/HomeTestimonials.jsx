import React from 'react'
import classes from './global.module.css'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import 'swiper/swiper.min.css';
import { Navigation, Pagination, Autoplay } from "swiper";
import Testimonials1 from './Testimonials1'
import Testimonials2 from './Testimonials2'
import Testimonials3 from './Testimonials3'

const HomeTestimonials = () => {
  return (
    <div className={classes.testimonyCon}>
        <div className='h-[43rem] lg:h-[44rem] xl:h-[58rem]'>
        <div className='flex flex-col items-center justify-center py-12 lg:py-16 xl:py-20'>
            <p className='font-sans text-[#F8C605] text-[16px] font-[600] md:text-[18px] md:font-[700] lg:font-[500] lg:text-[17px] xl:text-[21px] xl:font-[600]'>
                TESTIMONIALS
            </p>
            <h1 className='font-sans text-2xl font-[700] text-white mt-2 mb-[-25px] text-center md:font-[800] md:text-3xl lg:mb-[-50px] xl:text-[42px] xl:leading-[50px] xl:mt-2 xl:mb-[-50px]'>
               What Our Clients say <br /> About Us
            </h1>
        </div>

        <div className='flex flex-row items-center justify-center'>
        <Swiper
          spaceBetween={50}
          centeredSlides={true}
         //  autoplay={{
         //    delay: 1500,
         //    disableOnInteraction: false,
         //  }}
         //  pagination={{
         //    clickable: true,
         //  }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="h-[35rem] w-[100vw] md:w-[85%] lg:h-[37rem] lg:w-[75%] xl:h-[45rem] xl:w-[70%]">
               <SwiperSlide className='flex flex-row items-center justify-center text-center'>
                  <Testimonials1 />
               </SwiperSlide>
               <SwiperSlide className='flex flex-row items-center justify-center text-center'>
                  <Testimonials2 />
               </SwiperSlide>
               <SwiperSlide className='flex flex-row items-center justify-center text-center'>
                  <Testimonials3 />
               </SwiperSlide>
           </Swiper>
        </div>

        </div>
    </div>
  )
}

export default HomeTestimonials