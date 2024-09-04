import React from 'react'
import img1 from '../assets/img16.jpg'
import logo from '../assets/logo.png'
import { MdKeyboardArrowRight, MdLocationOn, MdMail } from 'react-icons/md'
import { HiPhone } from 'react-icons/hi'
import { TiSocialFacebookCircular, TiSocialTwitterCircular, TiSocialLinkedinCircular } from 'react-icons/ti'
import { FiInstagram } from 'react-icons/fi'
import { AiOutlineCopyright } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate();

  return (
    <div className='bg-cover relative bg-center h-[41rem] w-screen md:h-[45em] lg:h-[26rem] xl:h-[31rem]' style={{backgroundImage: `url(${img1})`}}>
        <div className="absolute h-[41rem] top-0 left-0 w-full bg-black opacity-50 md:h-[45rem] lg:h-[26rem] xl:h-[31rem]"></div>
         

        <div className='flex flex-col items-start justify-center mx-5 lg:flex-row lg:items-start lg:justify-between lg:mx-12 lg:pt-5 xl:mx-28'>
            <div className='flex flex-col items-start justify-center mt-8'>
                <img onClick={()=>navigate('/')}
                className='w-40 z-50 md:w-52 xl:w-60' src={logo} alt="" />
                <p className='font-sans z-50 text-xs text-white font-[500] mt-5 w-72 md:text-sm md:w-96 lg:w-72 xl:text-base xl:w-[21rem]'>
                    A leading trans-border supply chain management organization. Our goal is to link Chinese suppliers with companies all over the world.
                </p>
            </div>

            <div className='flex flex-col items-start justify-center mt-6'>
                <h1 className='font-inter z-50 text-[#FFCF24] text-xl font-[600] xl:text-[28px] xl:font-[600] xl:mb-3'>
                   Quick Links
                </h1>
                <p className='flex flex-row items-center justify-center text-white my-2'>
                    <MdKeyboardArrowRight className='text-base z-50 xl:text-2xl' />
                    <Link to='/about'
                    className='text-sm z-50 font-[700] xl:text-lg hover:text-[#FFCF24]'>About Us</Link>
                </p>
                <p className='flex flex-row items-center justify-center text-white my-2'>
                    <MdKeyboardArrowRight className='text-base z-50 xl:text-2xl' />
                    <Link to='/services'
                    className='text-sm z-50 font-[700] xl:text-lg hover:text-[#FFCF24]'>Services</Link>
                </p>
                <p className='flex flex-row items-center justify-center text-white my-2'>
                    <MdKeyboardArrowRight className='text-base z-50 xl:text-2xl' />
                    <Link to='/blog'
                    className='text-sm z-50 font-[700] xl:text-lg hover:text-[#FFCF24]'>Blog</Link>
                </p>
                <p className='flex flex-row items-center justify-center text-white my-2'>
                    <MdKeyboardArrowRight className='text-base z-50 xl:text-2xl' />
                    <Link to={{ pathname: '/', search: '?sectionId=testimonials' }}
                    className='text-sm z-50 font-[700] xl:text-lg hover:text-[#FFCF24]'>Testimonials</Link>
                </p>
                <p className='flex flex-row items-center justify-center text-white my-2'>
                    <MdKeyboardArrowRight className='text-base z-50 xl:text-2xl' />
                    <Link className='text-sm z-50 font-[700] xl:text-lg hover:text-[#FFCF24]'>Contact Us</Link>
                </p>
            </div>

            <div className='flex flex-col items-start justify-center mt-6'>
                <h1 className='font-inter z-50 text-[#FFCF24] text-xl font-[600] xl:text-[28px] xl:font-[600] xl:mb-3'>
                    Contacts
                </h1>
                <p className='flex flex-row items-start justify-center text-white my-2'>
                    <MdLocationOn className='text-lg z-50 mr-1 xl:text-2xl xl:mr-3' />
                    <span className='text-xs z-50 font-[500] w-52 md:text-sm md:w-72 lg:w-60 xl:text-base xl:w-[18rem]'>
                      5, Yenusa Adeniji off John Olugbo Street, Ikeja, Lagos, Nigeria.
                    </span>
                </p>
                <p className='flex flex-row items-start justify-center text-white my-2'>
                    <MdMail className='text-lg z-50 mr-1 xl:text-2xl xl:mr-3' />
                    <span className='text-xs z-50 font-[500] w-52 md:text-sm xl:text-base'>
                       chinadojoprocurement@gmail.com
                    </span>
                </p>
                <p className='flex flex-row items-start justify-center text-white my-2'>
                    <HiPhone className='text-lg z-50 mr-1 xl:text-2xl xl:mr-3' />
                    <span className='text-xs z-50 font-[500] w-52 md:text-sm xl:text-base'>
                       +234 (0) 9124 741 646
                    </span>
                </p>
            </div>

        </div>

        <div className='flex flex-row items-center justify-center mt-6 mb-3 lg:justify-start lg:mx-12 lg:mt-4 xl:mx-28 xl:mt-0'>
            <div className='text-white z-50 text-4xl mx-2 md:text-5xl md:mx-3 lg:mx-0 lg:mr-1 lg:text-[45px] xl:text-[55px]'>
                <a href="https://www.facebook.com/chinadojo1688?mibextid=LQQJ4d" target="_blank">
                 <TiSocialFacebookCircular />
                </a>
            </div>
            <div className='text-white z-50 text-4xl mx-2 md:text-5xl md:mx-1 lg:text-[45px] xl:text-[55px]'>
                <a href="https://twitter.com/chinadojo1688?s=21&t=HGoX0yHzBN1HaRY7_0r9dw" target="_blank">
                 <TiSocialTwitterCircular />
                </a>
            </div>
            <div className='text-white z-50 text-4xl mx-2 md:text-5xl md:mx-1 lg:text-[45px] xl:text-[55px]'>
                <a href="https://www.linkedin.com/in/chinadojo1688" target="_blank">
                 <TiSocialLinkedinCircular />
                </a>
            </div>
            <div className='text-white z-50 text-2xl mx-2 md:text-4xl md:mx-1 lg:text-[32px] xl:text-[40px]'>
                <a href="https://instagram.com/chinadojo?igshid=YmMyMTA2M2Y=" target="_blank">
                 <FiInstagram />
                </a>
            </div>
        </div>

        <hr className='mx-5 lg:mx-12 lg:mt-10 xl:mx-28 xl:mt-16' />

        <div className='flex flex-row items-center justify-center mt-3 lg:mt-6'>
            <AiOutlineCopyright className='text-white z-50 text-2xl mr-1' />
            <p className='text-white z-50 text-xs font-[400] md:text-sm xl:text-base'>
               2023 Chinadojo is powered by <a href='https://www.linkedin.com/in/olajuwon-olalekan' target="_blank" className='text-[#FFCF24]'>Lexcr8t</a>
            </p>
        </div>

    </div>
  )
}

export default Footer