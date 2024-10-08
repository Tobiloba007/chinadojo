import React from 'react'
import logo from '../../assets/whiteLogo.png'
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx'
import { Dropdown, Space } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ShippingNav = () => {
  const [menu, setMenu] = useState(true);
  
  const handleClcik = () => {
    setMenu((prevState) => !prevState)
  }

  const navigate = useNavigate();

  const items = [
    {
      label: <div className='flex flex-col justify-center'>
        <Link to='/'
        className='font-inter z-50 text-[12px] text-center pt-7 pb-2 font-[500] hover:text-[#1A8F98]'>HOME</Link>
        <hr className='mx-10' />
              </div>, 
      key: '0',
    },
    {
      label: <div className='flex flex-col justify-center'>
        <Link to='/about'
        className='font-inter z-50 text-[12px] text-center pt-5 pb-2 font-[500] hover:text-[#1A8F98]'>ABOUT US</Link>
        <hr className='mx-10' />
              </div>, 
      key: '1',
    },
    {
      label: <div className='flex flex-col justify-center'>
        <Link to='/services'
        className='font-inter z-50 text-[12px] text-center pt-5 pb-2 font-[500] hover:text-[#1A8F98]'>SERVICES</Link>
        <hr className='mx-10' />
              </div>, 
      key: '2',
    },
    {
      label: <div className='flex flex-col justify-center'>
        <Link to='/blog'
        className='font-inter z-50 text-[12px] text-center pt-5 pb-2 font-[500] hover:text-[#1A8F98]'>BLOG</Link>
        <hr className='mx-10' />
              </div>, 
      key: '3',
    },
    {
      label: <div className='flex flex-col justify-center'>
        <Link to={{ pathname: '/', search: '?sectionId=rate'}}
        className='font-inter z-50 text-[12px] text-center pt-5 pb-2 font-[500] hover:text-[#1A8F98]'>RATE</Link>
        <hr className='mx-10' />
              </div>, 
      key: '4',
    },
    {
      label: <div className='flex flex-col justify-center'>
        <Link to='/shipping-tools'
        className='font-inter z-50 text-[12px] text-center pt-5 pb-2 font-[500] hover:text-[#1A8F98]'>SHIPPING TOOLS</Link>
        <hr className='mx-10' />
              </div>, 
      key: '5',
    },
    {
      label: <div className='flex flex-col justify-center'>
        <Link to={{ pathname: '/', search: '?sectionId=testimonials' }} 
        className='font-inter z-50 text-[12px] text-center pt-5 font-[500] hover:text-[#1A8F98]'>TESTIMONIALS</Link>
              </div>, 
      key: '6',
    },
    {
      type: 'divider',
    },
    {
      label: <button 
      className='flex flex-row items-center z-50 justify-center font-inter text-[12px] text-white bg-[#1A8F98] hover:bg-[#F8C605]
       hover:text-[#474545] text-center font-[500] h-10 w-[80vw]'>CONTACT US</button>,
      key: '7',
    },
  ];
  return (
    <div>

        {/* MOBILE NAVBAR */}
      <div className='flex flex-row items-center justify-between h-20 px-4 bg-[#1A8F98] lg:hidden'>
        <img onClick={()=>navigate('/')}
        className='w-36 z-50' src={logo} alt="..." />

                           {/* DROPDOWN */}
        <div className='z-50'>
        <Dropdown
             menu={{
               items,
             }}
             trigger={['click']}
           >
             <a className='z-50'
             onClick={(e) => e.preventDefault()}>
               <Space>
                  <button className='z-50' onClick={handleClcik}>
                      {menu ?
                       <RxHamburgerMenu className='text-white z-50 text-3xl' />
                            :
                       <RxCross2 className='text-white z-50 text-3xl' />
                      }
                    </button>
               </Space>
             </a>
        </Dropdown>
        </div>

      </div>

            {/* DESKTOP SCREEN NAVBAR */}
      <div className='hidden md:hidden lg:flex lg:flex-row lg:items-center lg:justify-between bg-[#1A8F98] h-20 px-10'>
         <img onClick={()=>navigate('/')}
         className='z-50 w-48 xl:w-60' src={logo} alt="" />
         <div className='flex flex-row items-center justify-between'>
           <Link to='/'
           className='z-50 font-inter text-[11px] text-white font-[600] mx-3 xl:text-[15px] hover:text-[#F8C605]'>HOME</Link>
           <Link to='/about'
           className='z-50 font-inter text-[11px] text-white font-[600] mx-3 xl:text-[15px] hover:text-[#F8C605]'>ABOUT US</Link>
           <Link  to='/services'
           className='z-50 font-inter text-[11px] text-white font-[600] mx-3 xl:text-[15px] hover:text-[#F8C605]'>SERVICES</Link>
           <Link  to='/blog'
           className='z-50 font-inter text-[11px] text-white font-[600] mx-3 xl:text-[15px] hover:text-[#F8C605]'>BLOG</Link>
           <Link  to={{ pathname: '/', search: '?sectionId=rate'}}
           className='z-50 font-inter text-[11px] text-white font-[600] mx-3 xl:text-[15px] hover:text-[#F8C605]'>RATE</Link>
           <Link  to='/shipping-tools'
           className='z-50 font-inter text-[11px] text-white font-[600] mx-3 xl:text-[15px] hover:text-[#F8C605]'>SHIPPING TOOLS</Link>
           <Link  to={{ pathname: '/', search: '?sectionId=testimonials' }}
           className='z-50 font-inter text-[11px] text-white font-[600] mx-3 xl:text-[15px] hover:text-[#F8C605]'>TESTIMONIALS</Link>
           <Link to={{ pathname: '/', search: '?sectionId=footer' }}
           className='z-50 flex items-center justify-center font-inter text-[11px] text-[#474545] bg-[#F8C605]
            h-10 w-36 text-center font-[600] ml-7 xl:h-12 xl:w-40 xl:text-[14px] xl:ml-12'>
              CONTACT US
           </Link>
         </div>
      </div>

    </div>
  )
}

export default ShippingNav