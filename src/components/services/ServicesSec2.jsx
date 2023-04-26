import React from 'react'
import { BsCheckCircleFill } from 'react-icons/bs'
import { CgPhone } from 'react-icons/cg'
import img1 from '../../assets/img22.png'

const ServicesSec2 = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-[#E0E6F0] py-12 md:py-16 xl:py-20'>
        <div className='mx-5 lg:mx-20 xl:mx-48'>
            <h1 className='font-sans text-[#1A8F98] text-xl text-center font-[600] md:text-2xl lg:text-[28px] lg:leading-9 xl:text-[34px] xl:leading-[46px]'>
               With our excellent services, you can expect quick and dependable shipping from China.
            </h1>
        </div>

        <div className='flex flex-col items-center justify-center mt-10 md:flex-row lg:items-start lg:justify-center lg:mt-16 xl:mt-20'>

            <div className='flex flex-col items-start justify-center mx-6 md:mx-0 md:ml-7'>
                <h1 className='font-sans text-[#333333] font-[600] text-base md:w-96 lg:text-xl xl:text-2xl xl:w-[30rem]'>
                    At Chinadojo, we take pride in offering excellent shipping services at competitive prices. We appreciate you selecting Chinadojo for all of your shipping concerns.
                </h1>

                <p className='font-sans text-[#333333] text-[13px] font-[500] mt-4 md:mt-2 md:font-[400] md:w-96 lg:text-[14px] lg:font-[500] lg:mt-4 xl:w-[30rem] xl:text-[17px] xl:mt-6'>
                     Because we are aware of how crucial timely and dependable shipment is for our clients. To meet your needs, we provide a range of delivery choices.
                </p>

                <div className='flex flex-col items-start justify-center mt-5 ml-2 md:mt-3 lg:mt-4 lg:ml-0 xl:mt-6'>
                    <div className='flex flex-row items-center justify-start my-2 md:my-1 lg:my-[7px]'>
                        <BsCheckCircleFill className='mr-2 text-[#FFD233] text-lg lg:text-xl lg:mr-3 xl:text-2xl xl:mr-4' />
                        <span className='font-sans text-[#333333] text-base font-[700] md:font-[600] lg:text-xl xl:text-2xl'>
                            Air Cargo 
                        </span>
                    </div>
                    <div className='flex flex-row items-center justify-start my-2 md:my-1 lg:my-[7px]'>
                        <BsCheckCircleFill className='mr-2 text-[#FFD233] text-lg lg:text-xl lg:mr-3 xl:text-2xl xl:mr-4' />
                        <span className='font-sans text-[#333333] text-base font-[700] md:font-[600] lg:text-xl xl:text-2xl'>
                            Sea Cargo 
                        </span>
                    </div>
                    <div className='flex flex-row items-center justify-start my-2 md:my-1 lg:my-[7px]'>
                        <BsCheckCircleFill className='mr-2 text-[#FFD233] text-lg lg:text-xl lg:mr-3 xl:text-2xl xl:mr-4' />
                        <span className='font-sans text-[#333333] text-base font-[700] md:font-[600] lg:text-xl xl:text-2xl'>
                             Door Step Delivery
                        </span>
                    </div>
                    <div className='flex flex-row items-center justify-start my-2 md:my-1 lg:my-[7px]'>
                        <BsCheckCircleFill className='mr-2 text-[#FFD233] text-lg lg:text-xl lg:mr-3 xl:text-2xl xl:mr-4' />
                        <span className='font-sans text-[#333333] text-base font-[700] md:font-[600] lg:text-xl xl:text-2xl'>
                              Local Pickups
                        </span>
                    </div>
                </div>
                
                <div className='ml-2 mt-5 lg:ml-0'>
                    <button className='
                    flex flex-row items-center justify-between font-inter text-[10px] font-[500] bg-[#1A8F98] hover:bg-[#F8C605] hover:text-[#474545]
                     text-white h-10 w-36 px-4 md:h-11 md:w-40 md:text-[11px] lg:w-44 lg:text-[12px] lg:px-5 xl:text-[14px] xl:w-52 xl:h-14 xl:px-6'>
                        <CgPhone className='text-base lg:text-lg xl:text-xl' />
                        <span>
                           +234(0) 04050505
                        </span>
                    </button>
                </div>
            </div>
                       {/* IMAGE */}
            <div className='flex flex-row items-center justify-center mt-7 mx-6 md:mt-0 xl:mx-10'>
                <img className='h-[23rem] w-screen lg:w-[37vw] lg:h-[29rem] xl:h-[34.5rem]' src={img1} alt="" />
            </div>
        </div>

    </div>
  )
}

export default ServicesSec2