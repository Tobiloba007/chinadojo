import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx'
import { Dropdown, Space } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
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
        <Link to={{ pathname: '/', search: '?sectionId=rate'}}
        className='font-inter z-50 text-[12px] text-center pt-5 pb-2 font-[500] hover:text-[#1A8F98]'>
          RATE</Link>
        <hr className='mx-10' />
              </div>, 
      key: '3',
    },
    {
      label: <div className='flex flex-col justify-center'>
        <Link to={{ pathname: '/blog',}}
        className='font-inter z-50 text-[12px] text-center pt-5 pb-2 font-[500] hover:text-[#1A8F98]'>
          BLOG</Link>
        <hr className='mx-10' />
              </div>, 
      key: '4',
    },
    {
      label: <div className='flex flex-col justify-center'>
         <Link to='/shipping-tools'
        className='font-inter z-50 text-[12px] text-center pt-5 pb-2 font-[500] hover:text-[#1A8F98]'>
          SHIPPING TOOLS</Link> 
        <hr className='mx-10' />
              </div>, 
      key: '5',
    },
    {
      label: <div className='flex flex-col justify-center'>
         <Link to={{ pathname: '/', search: '?sectionId=testimonials' }} 
        className='font-inter z-50 text-[12px] text-center pt-5 font-[500] hover:text-[#1A8F98]'>
          TESTIMONIALS</Link>
              </div>, 
      key: '6',
    },
    {
      type: 'divider',
    },
    {
      label: <Link to={{ pathname: '/', search: '?sectionId=footer' }}
      className='flex flex-row items-center z-50 justify-center font-inter text-[12px] text-[#ffffff] bg-[#1A8F98] hover:bg-[#F8C605]
       hover:text-[#474545] text-center font-[500] h-10 w-[80vw]'>CONTACT US</Link>,
      key: '7',
    },
  ];


  return (
    <div>

        {/* MOBILE NAVBAR */}
      <div className='flex flex-row items-center justify-between pt-8 mx-2 lg:hidden'>
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
      <div className='hidden md:hidden lg:flex lg:flex-row lg:items-center lg:justify-between pt-10 xl:pt-12'>
         <img onClick={()=>navigate('/')}
         className='z-50 w-48 xl:w-60' src={logo} alt="" />
         <div className='flex flex-row items-center justify-between'>
           <Link to='/'
           className='z-50 font-inter text-[10px] text-white font-[600] mx-3 xl:text-[14px] hover:text-[#F8C605]'>HOME</Link>
           <Link to='/about'
           className='z-50 font-inter text-[10px] text-white font-[600] mx-3 xl:text-[14px] hover:text-[#F8C605]'>ABOUT US</Link>
           <Link  to='/services'
           className='z-50 font-inter text-[10px] text-white font-[600] mx-3 xl:text-[14px] hover:text-[#F8C605]'>SERVICES</Link>
           <Link  to='/blog'
           className='z-50 font-inter text-[10px] text-white font-[600] mx-3 xl:text-[14px] hover:text-[#F8C605]'>BLOG</Link>
           <Link  to={{ pathname: '/', search: '?sectionId=rate'}}
           className='z-50 font-inter text-[10px] text-white font-[600] mx-3 xl:text-[14px] hover:text-[#F8C605]'>RATE</Link>
           <Link  to='/shipping-tools'
           className='z-50 font-inter text-[10px] text-white font-[600] mx-3 xl:text-[14px] hover:text-[#F8C605]'>SHIPPING TOOLS</Link>
           <Link  to={{ pathname: '/', search: '?sectionId=testimonials' }}
           className='z-50 font-inter text-[10px] text-white font-[600] mx-3 xl:text-[14px] hover:text-[#F8C605]'>TESTIMONIALS</Link>
           <Link to={{ pathname: '/', search: '?sectionId=footer' }}
           className='z-50 flex items-center justify-center font-inter text-[10px] text-white bg-[#1A8F98] hover:bg-[#F8C605] hover:text-[#474545]
            h-9 w-24 text-center font-[600] ml-6 xl:h-11 xl:w-36 xl:text-[13px] xl:ml-6'>
              CONTACT US
           </Link>
         </div>
      </div>

    </div>
  )
}

export default Nav