import React from 'react'
import img1 from '../assets/img16.jpg'
import logo from '../assets/logo.png'
import { MdKeyboardArrowRight, MdLocationOn, MdMail } from 'react-icons/md'
import { HiPhone } from 'react-icons/hi'
import { TiSocialFacebookCircular, TiSocialTwitterCircular, TiSocialLinkedinCircular } from 'react-icons/ti'
import { AiOutlineCopyright } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-cover bg-center h-[39rem] w-screen md:h-[42rem] lg:h-[24rem] xl:h-[28rem]' style={{backgroundImage: `url(${img1})`}}>

        <div className='flex flex-col items-start justify-center mx-5 lg:flex-row lg:items-start lg:justify-between lg:mx-12 lg:pt-5 xl:mx-28'>
            <div className='flex flex-col items-start justify-center mt-8'>
                <img className='w-40 md:w-52 xl:w-60' src={logo} alt="" />
                <p className='font-sans text-xs text-white font-[500] mt-5 w-72 md:text-sm md:w-96 lg:w-72 xl:text-base xl:w-[21rem]'>
                    A leading trans-border supply chain management organization. Our goal is to link Chinese suppliers with companies all over the world.
                </p>
            </div>

            <div className='flex flex-col items-start justify-center mt-6'>
                <h1 className='font-inter text-[#FFCF24] text-xl font-[600] xl:text-[28px] xl:font-[600] xl:mb-3'>
                   Quick Links
                </h1>
                <p className='flex flex-row items-center justify-center text-white my-2'>
                    <MdKeyboardArrowRight className='text-base xl:text-2xl' />
                    <Link to='/about'
                    className='text-sm font-[700] xl:text-lg hover:text-[#FFCF24]'>About Us</Link>
                </p>
                <p className='flex flex-row items-center justify-center text-white my-2'>
                    <MdKeyboardArrowRight className='text-base xl:text-2xl' />
                    <Link to='/services'
                    className='text-sm font-[700] xl:text-lg hover:text-[#FFCF24]'>Services</Link>
                </p>
                <p className='flex flex-row items-center justify-center text-white my-2'>
                    <MdKeyboardArrowRight className='text-base xl:text-2xl' />
                    <Link className='text-sm font-[700] xl:text-lg hover:text-[#FFCF24]'>Testimonials</Link>
                </p>
                <p className='flex flex-row items-center justify-center text-white my-2'>
                    <MdKeyboardArrowRight className='text-base xl:text-2xl' />
                    <Link className='text-sm font-[700] xl:text-lg hover:text-[#FFCF24]'>Contact Us</Link>
                </p>
            </div>

            <div className='flex flex-col items-start justify-center mt-6'>
                <h1 className='font-inter text-[#FFCF24] text-xl font-[600] xl:text-[28px] xl:font-[600] xl:mb-3'>
                    Contacts
                </h1>
                <p className='flex flex-row items-start justify-center text-white my-2'>
                    <MdLocationOn className='text-lg mr-1 xl:text-2xl xl:mr-3' />
                    <span className='text-xs font-[500] w-52 md:text-sm md:w-72 lg:w-60 xl:text-base xl:w-[18rem]'>
                      5, Yenusa Adeniji off John Olugbo Street, Ikeja, Lagos, Nigeria.
                    </span>
                </p>
                <p className='flex flex-row items-start justify-center text-white my-2'>
                    <MdMail className='text-lg mr-1 xl:text-2xl xl:mr-3' />
                    <span className='text-xs font-[500] w-52 md:text-sm xl:text-base'>
                       addyouremail.com
                    </span>
                </p>
                <p className='flex flex-row items-start justify-center text-white my-2'>
                    <HiPhone className='text-lg mr-1 xl:text-2xl xl:mr-3' />
                    <span className='text-xs font-[500] w-52 md:text-sm xl:text-base'>
                        +234 (0) 9124 741 646
                    </span>
                </p>
            </div>

        </div>

        <div className='flex flex-row items-center justify-center mt-6 mb-3 lg:justify-start lg:mx-12 lg:mt-4 xl:mx-28 xl:mt-0'>
            <div className='text-white text-4xl mx-2 md:text-5xl md:mx-3 lg:mx-0 lg:mr-1 lg:text-[45px] xl:text-[55px]'>
                <TiSocialFacebookCircular />
            </div>
            <div className='text-white text-4xl mx-2 md:text-5xl md:mx-1 lg:text-[45px] xl:text-[55px]'>
                <TiSocialTwitterCircular />
            </div>
            <div className='text-white text-4xl mx-2 md:text-5xl md:mx-1 lg:text-[45px] xl:text-[55px]'>
                <TiSocialLinkedinCircular />
            </div>
        </div>

        <hr className='mx-5 lg:mx-12 lg:mt-10 xl:mx-28 xl:mt-16' />

        <div className='flex flex-row items-center justify-center mt-3 lg:mt-6'>
            <AiOutlineCopyright className='text-white text-2xl mr-1' />
            <p className='text-white text-xs font-[400] md:text-sm xl:text-base'>
               2023 Chinadojo is powered by <span className='text-[#FFCF24]'>Lexcr8t</span>
            </p>
        </div>
    </div>
  )
}

export default Footer