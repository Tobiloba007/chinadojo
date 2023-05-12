import React from 'react'
import img1 from '../../assets/img9.png'
import { GiShoppingCart, GiBoxUnpacking, GiTakeMyMoney } from 'react-icons/gi'
import { SlPlane, SlSettings } from 'react-icons/sl'
import { VscVerified } from 'react-icons/vsc'
import { useNavigate } from 'react-router-dom'


const HomeServices = () => {

    const navigate = useNavigate();

    const serviceItems = [
        {
            id: 1, 
            icon: <GiShoppingCart className='text-3xl text-white text-center mt-2 ml-3 xl:text-4xl xl:ml-4 xl:mt-3' />,
            title: 'Procurement',
            words: 'Through our platform, we provide procurement services for all Chinese Online Stores, including AliExpress, Alibaba, Taobao, 1688, JD, and many others. Our services go beyond  procurement. We handle the end-to-end logistics and shipping processes and ensure smooth transportation of your goods. We take care of the intricate details, allowing you to focus on your core business activities.',
        },
        {
            id: 2,
            icon: <GiBoxUnpacking className='text-3xl text-white text-center mt-2 ml-3 xl:text-4xl xl:ml-4 xl:mt-3' />,
            title: 'Product Sourcing',
            words: 'We provide professional sourcing services to help companies of all sizes find and obtain high-quality items from reputable and recognized Chinese suppliers. Unsure of what you want to buy or where to shop from, just send us the picture and specifications of what you want and we would handle the rest.',
        },
        {
            id: 3,
            icon: <SlPlane className='text-3xl text-white text-center mt-2 ml-3 xl:text-4xl xl:ml-4 xl:mt-3' />,
            title: 'Air & Sea Freight',
            words: 'We are dedicated to delivering your package where it needs to go, regardless of its size. And we handle the delivery of your packages with the same care and professionalism that no other logistics business can.',
        },
        {
            id: 4,
            icon: <VscVerified className='text-3xl text-white text-center mt-2 ml-3 xl:text-4xl xl:ml-4 xl:mt-3' />,
            title: 'Supplier Verification',
            words: 'Before entering into financial agreements and contracts with Chinese manufacturers and suppliers, we provide Supplier verification so that businesses may check them out and confirm their competency.',
        },
        {
            id: 5,
            icon: <GiTakeMyMoney className='text-3xl text-white text-center mt-2 ml-3 xl:text-4xl xl:ml-4 xl:mt-3' />,
            title: 'Payment to Chinese Suppliers',
            words: 'No matter the amount, we offer the best rates and lowest costs. We assist businesses in making rapid payments to their Chinese suppliers via bank transfers, WeChat, AliPay, and even QQ while receiving payment in Naira.',
        },
        {
            id: 6,
            icon: <SlSettings className='text-3xl text-white text-center mt-2 ml-3 xl:text-4xl xl:ml-4 xl:mt-3' />,
            title: 'Manufacturing',
            words: <p> Private label production is a service we offer for all market segments. <br />
                      Whether it's for personal, organizational, or commercial applications, we ensure that you receive the best quality that meets with international industry standards from reputable suppliers located throughout China.
                   </p>
        },
    ]


  return (
    <div className='flex flex-col items-center justify-center mt-12 mb-7 mx-7 md:mx-5 lg:mx-16 lg:mt-16'>
                                 {/* T O P */}
        <div className='flex flex-col items-start justify-center md:mx-12 lg:flex-row lg:items-end lg:justify-between lg:mx-7'>
            <div className='lg:w-[50%]'>
                <p className='font-sans text-[#F8C605] text-[16px] font-[600] md:text-[18px] md:font-[700] lg:font-[500] lg:text-[17px] xl:text-[21px] xl:font-[600]'>
                    OUR SERVICES
                </p>
                <h1 className='font-sans text-2xl font-[700] text-[#181818] mt-1 md:font-[800] lg:text-3xl xl:text-[42px] xl:leading-[50px] xl:mt-2'>
                   We provide the best <br /> Logistics Services
                </h1>
                <p className='font-sans text-[12px] mt-2 font-[500] leading-6 md:w-[85%] md:text-[14px] md:leading-7 lg:text-[13px] lg:leading-6 xl:text-[18px] xl:my-4 xl:leading-8'>
                   At Chinadojo, we are steadfast in our dedication to providing our customers with quick and dependable fulfillment of our promises. 
                </p>
            </div>
            <div className='my-5 lg:w-[47%] xl:w-[47%]'>
                <img className='h-[10rem] md:w-screen md:h-[13rem] lg:h-[10rem] lg:mb-[-15px] xl:h-[13rem] xl:mb-[-5px]' src={img1} alt="" />
            </div>
        </div>

                              {/* BOTTOM */}
        <div className='flex flex-row flex-wrap items-center justify-center mx-0 mt-3 md:w-[100%] lg:mt-10'>
            {serviceItems.map((item)=>{ 
                return(
            <div key={item.id} className='flex flex-col items-start justify-start bg-[#F4F4F4] hover:bg-[#F8C605] h-[15.5rem] w-[20rem] my-3 mx-5 md:w-[20rem] md:h-[15.5rem] lg:w-[24rem] lg:h-[17rem] lg:mx-3 xl:w-[33rem] xl:h-[24.5rem] xl:mx-10 xl:my-7'>
                <div className='flex flex-row items-center justify-between mx-5 mt-5 xl:ml-12 xl:mt-10'>
                    <div className='bg-[#1A8F98] h-11 w-14 xl:h-14 xl:w-[70px]'>
                       {item.icon}
                    </div>
                    <h1 className='font-sans text-xl text-[#181818] font-semibold ml-5 w-44 xl:w-80 xl:text-[30px] xl:leading-8'>
                        {item.title}
                    </h1>
                </div>
                <div className='flex flex-row items-center justify-center mx-5 mt-5 xl:mx-12'>
                    <p className='text-xs text-[#333333] lg:text-sm xl:text-lg'>
                        {item.words}
                    </p>
                </div>
            </div>
            )})}
        </div>

        <div className='flex flex-row items-center justify-center mt-7'>
            <button onClick={()=>navigate('/policy')}
            className='font-inter text-white bg-[#1A8F98] hover:bg-[#F8C605] hover:text-[#474545] h-10 w-40 text-xs font-[500] md:h-12 lg:w-48 lg:text-sm xl:h-20 xl:w-60 xl:text-base'>View  Service Policy</button>
        </div>

    </div>
  )
}

export default HomeServices