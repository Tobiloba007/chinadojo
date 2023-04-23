import React from 'react'
import img1 from '../assets/img3.png'
import img2 from '../assets/img4.png'
import img3 from '../assets/img5.png'
import img4 from '../assets/img6.png'
import img5 from '../assets/img7.png'
import img6 from '../assets/img8.png'


const AboutImages = () => {
  return (
    <div className='flex-col my-12 mx-6 w-[83%] md:w-[60%] lg:w-[40%] lg:mt-[-50px] lg:mx-20 xl:mx-28 xl:[-75px] '>  
        <div className='flex justify-between xl:mx-5'>
            <img className='w-24 h-24 mt-8 rounded-full lg:ml-10 xl:w-28 xl:h-28 xl:ml-20' src={img1} alt="" />
            <img className='w-28 h-28 rounded-full xl:w-32 xl:h-32' src={img2} alt="" />
        </div>
        <div className='flex justify-end mr-[60px] my-[-40px] md:mr-[100px] lg:mr-[65px] lg:my-[-35px] xl:my-[-25px] xl:mr-[80px]'>
            <img className='w-24 h-24 mt-8 rounded-full lg:w-24 lg:h-24 xl:w-32 xl:h-32' src={img3} alt="" />
        </div>
        <div className='flex justify-between my-[50px] xl:mr-11'>
            <img className='w-32 h-32 rounded-full mt-[-30px] lg:ml-10 xl:w-36 xl:h-36 xl:ml-20 xl:mt-[-50px]' src={img4} alt="" />
            <img className='w-28 h-28 rounded-full xl:w-32 xl:h-32' src={img5} alt="" />
        </div>
        <div className='flex justify-center my-[-40px]'>
            <img className='w-28 h-28 rounded-full lg:ml-8 xl:w-32 xl:h-32' src={img6} alt="" />
        </div>
    </div>
  )
}

export default AboutImages