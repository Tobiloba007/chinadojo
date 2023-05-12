import React from 'react'
import img2 from '../../assets/img2.png'
import HomeAbout from './HomeAbout'

const HomeSection2 = () => {
  return (
    <div className='bg-cover bg-center flex-col justify-start py-5 md:py-8 lg:py-8 xl:py-10' style={{backgroundImage: `url(${img2})`}}>
        <div className='flex items-center justify-between mx-10 md:mx-36 lg:mx-44 xl:mx-60'>
            <div className='text-[#b9bcc2] ml-4 md:ml-0'>
                <h1 className='font-inter text-[23px] font-semibold md:text-[27px] lg:text-[40px] xl:text-[50px]'>
                    1,845+
                </h1>
                <p className='font-Dm-sans text-xs font-[400] w-28 md:text-[13px] md:font-medium md:w-32 lg:text-[16px] lg:w-44 lg:leading-6 xl:text-[21px] xl:w-60 xl:leading-7'>
                    Client Satisfaction with our Service
                </p>
            </div>

            <div className='text-[#b9bcc2]'>
                <h1 className='font-inter text-[23px] font-semibold md:text-[27px] lg:text-[40px] font-bol xl:text-[50px]'>
                    300+
                </h1>
                <p className='font-Dm-sans text-xs font-normal w-28 md:text-[13px] md:font-medium md:w-28 lg:text-[16px] lg:w-44 lg:leading-6 xl:text-[21px] xl:w-60 xl:leading-7'>
                Project Completed by our service
                </p>
            </div>
        </div>
            <hr className='my-5 mx-7 md:mx-20 lg:mx-24 lg:my-6 xl:my-7 xl:mx-36 xl:border-[1px]'/>
            <HomeAbout />
    </div>
  )
}

export default HomeSection2