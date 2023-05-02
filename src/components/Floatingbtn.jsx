import React from 'react'
import { IoLogoWhatsapp } from 'react-icons/io'

const Floatingbtn = () => {
  return (
    <div className='fixed bottom-[40px] right-[30px] flex flex-col items-center justify-center md:bottom-[50px] md:right-[50px]'>
    <a href='https://wa.me/message/DKLMJG655GNBM1' target="_blank">
      <IoLogoWhatsapp className='text-5xl text-[#33a05d] md:text-6xl lg:text-7xl xl:text-8xl' />
    </a>
    <p className='text-xs font-[600] md:text-sm xl:text-lg'>
     Chat with us
    </p>
 </div>
  )
}

export default Floatingbtn