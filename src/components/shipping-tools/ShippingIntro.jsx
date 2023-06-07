import React from 'react'
import { Tabs } from 'antd';
import CBM from './CBM';
import './shipping.css'
import LandingPrice from './LandingPrice';

const ShippingIntro = () => {
    const onChange = (key) => {
        // console.log(key);
      };
      const items = [
        {
          key: '1',
          label: <p className='mb-[-8px] xl:text-lg text-[#1A8F98]'>CBM Calculator</p>,
          children: <CBM />,
        },
        {
          key: '2',
          label: <p className='mb-[-8px] xl:text-lg text-[#1A8F98]'>Landing Price Calculator</p>,
          children: <LandingPrice />,
        },
      ];
  return (
    <div className='flex items-center justify-center w-[100vw] mt-7'>
       <Tabs defaultActiveKey="1" items={items} left onChange={onChange} />
    </div>
  )
}

export default ShippingIntro