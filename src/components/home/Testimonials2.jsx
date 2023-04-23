import React from 'react'
import { VscQuote } from 'react-icons/vsc'
import { AiTwotoneStar } from 'react-icons/ai'
import img1 from '../../assets/img14.png'

const Testimonials2 = () => {
  return (
    <div className='flex flex-row items-center justify-center pb-12 xl:pb-16'>
    <div className='flex flex-col  items-center justify-center relative rounded-xl bg-white mt-0 w-[80%] h-[23rem] md:w-[53%] lg:w-[43%] xl:mt-12 xl:w-[40%] xl:h-[31rem] xl:rounded-3xl'>
            <div className='flex flex-row items-center justify-center absolute top-[-50px] xl:top-[-75px]'>
                <img className='w-28 h-28 rounded-full md:h-32 md:w-32 xl:h-44 xl:w-44' src={img1} alt="..." />
            </div>

            <h1 className='font-inter text-lg text-[#333333] font-[700] text-center mt-12 md:text-xl lg:mt-16 xl:text-[30px] xl:mt-24'>
               Femi Adeogun
            </h1>

            <p className='font-sans text-[#C0C0C0] text-center text-xs font-[300] mt-1 md:text-sm xl:text-lg xl:font-[500] xl:mt-2'>
               CEO, Cityboy Collection
            </p>

            <div className='mt-8 mb-3 md:mt-6 xl:mt-8 xl:mb-5'>
              <VscQuote className='text-2xl text-[#198992] xl:text-4xl' />
            </div>

            <p className='font-inter text-[#333333] text-[13px] mx-7 text-center font-[500] lg:mx-10 lg:font-[600] lg:leading-6 xl:text-[17px] xl:leading-8 xl:mx-16'>
               It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem  
            </p>

            <div className='flex flex-row items-center justify-center mt-7 md:mt-8'>
                <AiTwotoneStar className='text-2xl mx-1 text-[#D27C2C] md:text-3xl xl:text-4xl xl:mx-2' />
                <AiTwotoneStar className='text-2xl mx-1 text-[#D27C2C] md:text-3xl xl:text-4xl xl:mx-2' />
                <AiTwotoneStar className='text-2xl mx-1 text-[#D27C2C] md:text-3xl xl:text-4xl xl:mx-2' />
                <AiTwotoneStar className='text-2xl mx-1 text-[#D27C2C] md:text-3xl xl:text-4xl xl:mx-2' />
                <AiTwotoneStar className='text-2xl mx-1 text-[#D27C2C] md:text-3xl xl:text-4xl xl:mx-2' />
            </div>
    </div>
</div>
  )
}

export default Testimonials2