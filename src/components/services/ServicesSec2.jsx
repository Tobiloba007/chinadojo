import React from 'react'
import { BsCheckCircleFill } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import img1 from '../../assets/img22.png'

const ServicesSec2 = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-[#E0E6F0] py-12 md:py-16 xl:py-20'>
        <div className='mx-5 lg:mx-20 xl:mx-48'>
            <h1 className='font-sans text-[#1A8F98] text-xl text-center font-[600] md:text-2xl lg:text-[28px] lg:leading-9 xl:text-[34px] xl:leading-[46px]'>
                With our excellent services, you can expect quick and dependable shopping and shipping solutions from China
            </h1>
        </div>

        <div className='flex flex-col items-center justify-center mt-10 md:flex-row lg:items-start lg:justify-center lg:mt-16 xl:mt-20'>

            <div className='flex flex-col items-start justify-center mx-6 md:mx-0 md:ml-7'>
                <h1 className='font-sans text-[#333333] font-[600] text-base md:w-96 lg:text-xl xl:text-2xl xl:w-[30rem]'>
                   At Chinadojo, we take pride in offering excellent shopping and shipping services at competitive prices. Thank you for considering Chinadojo Procurement as your logistics partner. 
                </h1>

                <p className='font-sans text-[#333333] text-base font-[600] mt-4 md:mt-2 md:w-96 lg:text-xl lg:mt-4 xl:w-[30rem] xl:text-2xl xl:mt-6'>
                    Because we are aware of how crucial timely and dependable shipment is for our clients. To meet your needs, we provide a range of delivery choices
                </p>

                <div className='flex flex-col items-start justify-center mt-5 ml-2 md:mt-8 lg:mt-8 lg:ml-0 xl:mt-10'>
                    <div className='flex flex-row items-center justify-start my-2 md:my-1 lg:my-[7px]'>
                        <BsCheckCircleFill className='mr-2 text-[#FFD233] text-lg lg:text-xl lg:mr-3 xl:text-2xl xl:mr-4' />
                        <span className='font-sans text-[#333333] text-base font-[700] md:font-[600] lg:text-xl xl:text-2xl'>
                           Procurement
                        </span>
                    </div>
                    <div className='flex flex-row items-center justify-start my-2 md:my-1 lg:my-[7px]'>
                        <BsCheckCircleFill className='mr-2 text-[#FFD233] text-lg lg:text-xl lg:mr-3 xl:text-2xl xl:mr-4' />
                        <span className='font-sans text-[#333333] text-base font-[700] md:font-[600] lg:text-xl xl:text-2xl'>
                            Product & Supplier Sourcing 
                        </span>
                    </div>
                    <div className='flex flex-row items-center justify-start my-2 md:my-1 lg:my-[7px]'>
                        <BsCheckCircleFill className='mr-2 text-[#FFD233] text-lg lg:text-xl lg:mr-3 xl:text-2xl xl:mr-4' />
                        <span className='font-sans text-[#333333] text-base font-[700] md:font-[600] lg:text-xl xl:text-2xl'>
                            Payment to Chinese suppliers
                        </span>
                    </div>
                    <div className='flex flex-row items-center justify-start my-2 md:my-1 lg:my-[7px]'>
                        <BsCheckCircleFill className='mr-2 text-[#FFD233] text-2xl lg:text-xl lg:mr-3 xl:text-2xl xl:mr-4' />
                        <span className='font-sans text-[#333333] text-base font-[700] md:font-[600] lg:text-xl xl:text-2xl'>
                            Air & Sea Cargo
                        </span>
                    </div>
                </div>
                
                <div className='ml-2 mt-5 lg:ml-0 xl:mt-8'>
                    <a href='https://wa.me/message/DKLMJG655GNBM1' target="_blank"
                    className='flex flex-row items-center justify-between font-inter text-[10px] font-[500] bg-[#1A8F98] hover:bg-[#F8C605] hover:text-[#474545]
                     text-white h-10 w-40 px-4 md:h-11 md:w-44 md:text-[11px] lg:w-44 lg:text-[12px] lg:px-2 xl:text-[14px] xl:w-52 xl:h-14 xl:px-3'>
                        <IoLogoWhatsapp className='text-2xl md:text-3xl lg:text-3xl xl:text-3xl' />
                        <span>
                           +234(0) 8142154108
                        </span>
                    </a>
                </div>
            </div>
                       {/* IMAGE */}
            <div className='flex flex-row items-center justify-center mt-7 mx-6 md:mt-0 xl:mx-10 xl:mt-[-15px]'>
                <img className='w-screen md:h-[28rem] lg:w-[37vw] lg:h-[34rem]  xl:h-[41rem]' src={img1} alt="" />
            </div>
        </div>

    </div>
  )
}

export default ServicesSec2