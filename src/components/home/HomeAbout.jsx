import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { GoQuote } from 'react-icons/go'
import AboutImages from '../AboutImages'

const HomeAbout = () => {
  return (
    <div className='flex flex-col items-center justify-center mx-7 mt-7 md:mx-12 lg:flex-row-reverse lg:items-center lg:justify-center lg:w-[100%] lg:mx-0 xl:mt-16 xl:mx-12'>
        <div className='flex-col md:w-[85%] lg:w-[60%]'>
            <p className='font-Dm-sans text-[16px] font-[600] text-[#F8C605] md:text-[18px] md:font-[700] lg:font-[500] lg:text-[17px] xl:text-[21px] xl:font-[600]'>
                ABOUT US
            </p>
            <h1 className='font-sans text-2xl font-[700] text-[#181818] mt-1 md:font-[800] lg:text-3xl xl:text-[42px] xl:leading-[50px] xl:mt-2'>
               Experience World-wide <br /> Logistics Services
            </h1>
            <p className='font-sans text-[12px] mt-2 font-[500] leading-5 md:w-[85%] md:text-[14px] lg:text-[13px] xl:text-[16px] xl:w-[65%] xl:my-4'>
               A leading transborder supply chain management organization, Chinadojo’s goal is to link Chinese suppliers with companies all over the world.
            </p>

     
            <div className='flex items-center justify-between mt-3 w-[95%] mr-5 md:w-[75%] xl:w-[65%]'>

                <div className='flex-col items-center justify-between'>
                   <div className='flex items-center font-sans text-[13px] font-[500] text-[#616161] my-4 md:text-[15px] xl:text-[16px] xl:font-[600]'>
                     <BsFillCheckCircleFill className='mr-2 text-base text-[#1A8F98] md:text-lg lg:text-sm xl:text-2xl xl:mr-4' /> Fastest Delivery
                   </div>
                   <div className='flex items-center font-sans text-[13px] font-[500] text-[#616161] my-4 md:text-[15px] xl:text-[16px] xl:font-[600]'>
                     <BsFillCheckCircleFill className='mr-2 text-base text-[#1A8F98] md:text-lg lg:text-sm xl:text-2xl xl:mr-4' /> Secure & Safe
                   </div>
                   <div className='flex items-center font-sans text-[13px] font-[500] text-[#616161] my-4 md:text-[15px] xl:text-[16px] xl:font-[600]'>
                     <BsFillCheckCircleFill className='mr-2 text-base text-[#1A8F98] md:text-lg lg:text-sm xl:text-2xl xl:mr-4' /> Affordable Price
                   </div>
               </div>

                <div className='flex-col items-center justify-between'>
                   <div className='flex items-center font-sans text-[13px] font-[500] text-[#616161] my-4 md:text-[15px] xl:text-[16px] xl:font-[600]'>
                     <BsFillCheckCircleFill className='mr-2 text-base text-[#1A8F98] md:text-lg lg:text-sm xl:text-2xl xl:mr-4' /> Customer Support
                   </div>
                   <div className='flex items-center font-sans text-[13px] font-[500] text-[#616161] my-4 md:text-[15px] xl:text-[16px] xl:font-[600]'>
                     <BsFillCheckCircleFill className='mr-2 text-base text-[#1A8F98] md:text-lg lg:text-sm xl:text-2xl xl:mr-4' /> High Maintenance
                   </div>
                   <div className='flex items-center font-sans text-[13px] font-[500] text-[#616161] my-4 md:text-[15px] xl:text-[16px] xl:font-[600]'>
                     <BsFillCheckCircleFill className='mr-2 text-base text-[#1A8F98] md:text-lg lg:text-sm xl:text-2xl xl:mr-4' /> World-wide Shipping
                   </div>
               </div>

            </div>

            <div className='flex items-center justify-start mt-7'>
                <div className='w-[18rem] h-[8rem] px-7 py-4 bg-[#F8C605] relative lg:w-[19.5rem] lg:h-[10rem] lg:py-8 lg:px-8 xl:w-[25rem] xl:h-[12rem] xl:py-7 xl:px-10'>
                    <p className='font-sans text-[12px] font-[600] text-[#3C3B3B] leading-4 w-48 lg:text-[13px] lg:w-60 xl:w-72 xl:text-base xl:font-[700]'>
                      It is a long established fact that a reader will be distracted by the readable content of a page when looking 
                    </p>
                    <p className='font-sans text-base font-[600] text-[#1A8F98] mt-2 lg:mt-4 lg:text-lg xl:text-xl'>
                       Femi Akanbi
                    </p>
                </div>

                <div className='absolute flex items-center justify-center right-[33px] mr-7 bg-[#1A8F98] h-[60px] w-[60px] md:left-[22.5rem] lg:left-[49rem] lg:h-[70px] lg:w-[70px] xl:left-[69.5rem] xl:w-[90px] xl:h-[90px]'>
                    <GoQuote className='text-3xl text-white text-center font-[800] lg:text-4xl xl:text-5xl' />
                </div>
            </div>

            <div className='mt-7 lg:mt-8'>
                <button className='font-inter text-white bg-[#1A8F98] hover:bg-[#F8C605] hover:text-[#474545] text-[10px] font-[500] h-10 w-28 md:text-[12px] md:w-36 lg:h-11 lg:w-36 lg:text-[12px] xl:text-[13px] xl:h-14 xl:w-40'>
                    READ MORE
                </button>
            </div>

        </div>
        <AboutImages />
    </div>
  )
}

export default HomeAbout