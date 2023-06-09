import React from 'react'
import img1 from '../../assets/img23.png'

const ServicesSec4 = () => {
  return (
    <div className='flex flex-col items-center justify-center mx-6 my-12 md:flex-row md:items-center md:px-5 xl:px-32'>

        <div className='flex flex-col items-start justify-center w-[85vw] md:w-[50vw] md:mr-5 lg:justify-end'>
            <h1 className='font-sans text-[#1A8F98] text-xl font-[600] md:text-2xl lg:text-[28px] lg:leading-9 xl:text-[34px] xl:leading-[46px]'>
                Got Questions?
            </h1>
            <p className='font-sans text-[#F8C605] text-base font-[500] mt-1 md:text-lg lg:text-xl xl:text-2xl'>
                We are always at your service
            </p>
            <p className='font-sans text-[#333333] text-xs font-[600] mt-3 leading-5 md:text-[13px] md:leading-6 lg:text-[14px] lg:w-[40vw] xl:text-[16px] xl:leading-7'>
            Do you need more explanation or you have some questions? Our Highly trained procurement experts are always there to attend 
            to all your procurement needs. <span className='text-[#1A8F98] underline underline-offset-2'> Contact Us today</span>
            </p>
            <div className='mt-7 lg:mt-12'>
                <a  href='https://forms.gle/7DVNuXE7RXMrXXST7' target="_blank"
                className='font-inter text-white bg-[#1A8F98] hover:bg-[#F8C605] py-4 px-6 hover:text-[#474545] h-12 w-44 text-[10px] font-[500] md:py-5 md:font-[600] lg:text-[11px] lg:h-11 xl:text-[14px] xl:h-14 xl:w-56'>
                    BOOK YOUR SHIPPING
                </a>
            </div>
        </div>

        <div className='flex flex-col items-center justify-center mt-12 md:w-[50vw] md:mx-7 lg:w-[50vw] lg:justify-end'>
            <img className='w-[85vw] h-[18rem] md:w-[50vw] md:h-[20rem] lg:w-[40vw] lg:h-[23rem] xl:w-[50vw] xl:h-[28rem]' src={img1} alt="" />
        </div>

    </div>
  )
}

export default ServicesSec4