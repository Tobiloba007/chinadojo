import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx'
import { Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [menu, setMenu] = useState(true);
  
  const handleClcik = () => {
    setMenu((prevState) => !prevState)
  }

  const items = [
    {
      label: <div className='flex flex-col justify-center'>
        <Link to='/'
        className='font-inter text-[12px] text-center pt-7 pb-2 font-[500] hover:text-[#1A8F98]'>HOME</Link>
        <hr className='mx-10' />
              </div>, 
      key: '0',
    },
    {
      label: <div className='flex flex-col justify-center'>
        <Link to='/about'
        className='font-inter text-[12px] text-center pt-5 pb-2 font-[500] hover:text-[#1A8F98]'>ABOUT US</Link>
        <hr className='mx-10' />
              </div>, 
      key: '1',
    },
    {
      label: <div className='flex flex-col justify-center'>
        <Link to='/services'
        className='font-inter text-[12px] text-center pt-5 pb-2 font-[500] hover:text-[#1A8F98]'>SERVICES</Link>
        <hr className='mx-10' />
              </div>, 
      key: '2',
    },
    {
      label: <div className='flex flex-col justify-center'>
        <Link className='font-inter text-[12px] text-center pt-5 font-[500] hover:text-[#1A8F98]'>TESTIMONIALS</Link>
              </div>, 
      key: '3',
    },
    {
      type: 'divider',
    },
    {
      label: <button className='flex flex-row items-center justify-center font-inter text-[12px] text-white bg-[#1A8F98] hover:bg-[#F8C605] hover:text-[#474545] text-center font-[500] h-10 w-[80vw]'>CONTACT US</button>,
      key: '4',
    },
  ];

  return (
    <div>
        {/* MOBILE NAVBAR */}
      <div className='flex flex-row items-center justify-between pt-8 mx-2 lg:hidden'>
        <img className='w-36' src={logo} alt="" />
        <Dropdown
             menu={{
               items,
             }}
             trigger={['click']}
           >
             <a onClick={(e) => e.preventDefault()}>
               <Space>
                  <button onClick={handleClcik}>
                      {menu ?
                       <RxHamburgerMenu className='text-white text-3xl' />
                            :
                       <RxCross2 className='text-white text-3xl' />
                      }
                    </button>
               </Space>
             </a>
        </Dropdown>
      </div>
            {/* DESKTOP SCREEN NAVBAR */}
      <div className='hidden md:hidden lg:flex lg:flex-row lg:items-center lg:justify-between pt-10 xl:pt-12'>
         <img className='w-48 xl:w-60' src={logo} alt="" />
         <div className='flex flex-row items-center justify-between'>
           <Link to='/'
           className='font-inter text-[12px] text-white font-[600] mx-5 xl:text-[16px] hover:text-[#F8C605]'>HOME</Link>
           <Link to='/about'
           className='font-inter text-[12px] text-white font-[600] mx-5 xl:text-[16px] hover:text-[#F8C605]'>ABOUT US</Link>
           <Link  to='/services'
           className='font-inter text-[12px] text-white font-[600] mx-5 xl:text-[16px] hover:text-[#F8C605]'>SERVICES</Link>
           <Link className='font-inter text-[12px] text-white font-[600] mx-5 xl:text-[16px] hover:text-[#F8C605]'>TESTIMONIALS</Link>
           <button className='font-inter text-[11px] text-white bg-[#1A8F98] hover:bg-[#F8C605] hover:text-[#474545] h-10 w-36 text-center font-[600] ml-7 xl:h-12 xl:w-40 xl:text-[14px] xl:ml-12'>
              CONTACT US
           </button>
         </div>
      </div>

    </div>
  )
}

export default Nav