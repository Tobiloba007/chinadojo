import React from 'react'
import img1 from '../../assets/img1.jpg'
import Nav from '../Nav'
import { useNavigate } from 'react-router-dom'

const HomeIntro = () => {

  const navigate = useNavigate();
  
  return (
    <div className="bg-cover bg-center h-[33.5rem] px-5 md:px-10 md:h-[34.5rem] lg:h-[35.5rem] lg:px-12 xl:h-[48.5rem] xl:px-20 xl:w-[100vw]" style={{backgroundImage: `url(${img1})`}}>
          <div className="absolute h-[33.5rem] top-0 left-0 w-full bg-black opacity-50 md:h-[34.5rem] lg:h-[35.5rem] xl:h-[48.5rem]"></div>
        <Nav />
        <div className='flex-col items-start justify-end mt-36 xl:mt-44'>
           <div className='flex justify-start items-center'>
               <h1 className='text-white z-50 text-4xl font-inter font-[800] md:text-5xl md:font-[700] lg:text-5xl xl:text-7xl xl:leading-[5.3rem]'>
                  Your China <br /> Supply <span className='text-[#F8C605]'>Comrade</span>
               </h1>
           </div>

           <div className='flex justify-start items-center my-5 w-[100%] md:w-[75%] lg:my-6 lg:w-[65%] xl:w-[55%] xl:my-10'>
             <p className='font-Dm-sans z-50 text-white text-[14px] md:text-[16px] md:font-[400] lg:text-[16px] lg:font-[500] xl:text-[20px]'>
               Welcome to Chinadojo Procurement Agency, where efficiency meet reliability in the world of supply chain management.  We are dedicated to providing seamless logistics solutions tailored to meet your specific needs, no matter the size or complexity of your operations.
             </p>
           </div>

           <div className='flex items-center z-50 justify-start my-8 md:my-5 xl:my-10'>
             <a className='z-50' href='https://forms.gle/7DVNuXE7RXMrXXST7' target="_blank" rel="noopener noreferrer">
              <button className='bg-[#1A8F98] hover:bg-[#F8C605] hover:text-[#474545] text-white z-50 h-10 px-5 text-[11px] font-semibold md:text-[12px] lg:text-[13px] lg:h-12 lg:px-6 xl:text-[15px] xl:font-bold xl:h-16 xl:px-8'>
                  BOOK YOUR SHIPPING
              </button>
             </a>
              <button onClick={()=>navigate('/about')}
              className='border-2 hover:border-[#F8C605] hover:text-[#F8C605] text-white h-10 z-50 px-5 mx-5 text-[11px] font-semibold md:text-[12px] lg:text-[13px] lg:h-12 lg:px-6 lg:mx-8 xl:text-[15px] xl:font-bold xl:h-16 xl:px-8 xl:mx-12'>
                   LEARN MORE
              </button>
           </div>
        </div>
    </div>
  )
}

export default HomeIntro
