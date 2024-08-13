import React from 'react'
import img1 from '../../assets/img21.png'
import Nav from '../Nav'

const BlogIntro = () => {
  return (
    <div className='bg-cover bg-center h-[15rem] px-5 md:px-10 md:h-[16rem] lg:h-[19rem] lg:px-12 xl:h-[22rem] xl:px-20 xl:w-[100vw]' style={{backgroundImage: `url(${img1})`}}>
        <Nav />
        <div className='flex flex-row items-end justify-center mt-28 md:mt-32 lg:mt-36 xl:mt-40'>
            <h1 className='font-sans text-[#FFCF24] font-[500] text-3xl md:text-4xl lg:text-[43px] xl:text-5xl'>
                News and Updates
            </h1>
        </div>
    </div>
  )
}

export default BlogIntro
