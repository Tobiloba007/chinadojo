import React from 'react'
import AboutImages from '../AboutImages'

const AboutSec2 = () => {
    const items = [
        {
            id: 0,
            title: 'Result Oriented',
            words: 'At Chinadojo, we are steadfast in our dedication to providing our customers with quick and dependable fulfillment of our promises. We are committed to providing the greatest level of service while constantly keeping the needs of our customers in mind. We are committed to consistently exceeding the expectations of our customers.',
        },
        {
            id: 1,
            title: 'Integrity',
            words: 'Our unshakable dedication to ethics serves as the cornerstone of everything we do. We are able to establish confidence with our clients and business partners and foster enduring relationships because of this devotion. In every facet of our business, we are committed to sustaining the greatest standards of integrity, decency, and openness.',
        },
        {
            id: 2,
            title: 'Customer Satisfaction',
            words: ' Customer satisfaction is always our primary goal at chinadojo. We put customers at the heart of every choice we make, and we go above and beyond to make sure they are satisfied with our goods and services. Our clients are the reason we are in business, so their pleasure is extremely important to us.',
        },
    ]
  return (
    <div className='flex flex-col items-center justify-center pt-14 pb-7 px-7 bg-[#E0E6F0] md:px-12 lg:pt-40 lg:px-12 xl:pt-52'>
                    {/* TOP */}
        <div className='flex flex-col items-start justify-center lg:flex-row-reverse lg:items-start lg:justify-between'>
            <div className='flex flex-col items-start justify-center lg:ml-[-250px] lg:mt-[-80px] xl:ml-[-450px]'>
                <h1 className='font-sans text-[#1A8F98] text-2xl font-[500] mb-2 lg:text-3xl lg:font-[600] xl:text-5xl xl:mb-3'>
                     Who We Are
                </h1>
                <p className='font-sans text-[#333333] text-xs font-[500] leading-5 my-2 md:w-[75vw] md:text-[13px] lg:w-[30rem] lg:text-[13px] lg:leading-5 xl:text-[18px] xl:w-[40rem] xl:leading-6 xl:my-5'>
                     A leading trans-border supply chain management organization, Chinadojo’s goal is to link Chinese suppliers with companies all over the world.
                </p>
                <p className='font-sans text-[#333333] text-xs font-[500] leading-5 my-2 md:w-[75vw] md:text-[13px] lg:w-[30rem] lg:text-[13px] lg:leading-5 xl:text-[18px] xl:w-[40rem] xl:leading-6 xl:my-5'>
                     We have the resources and know-how to streamline every stage of your supply chain, from sourcing to final doorstep delivery, with locations in Mainland China, Hong Kong, and Nigeria.
                </p>
                <p className='font-sans text-[#333333] text-xs font-[500] leading-5 my-2 md:w-[75vw] md:text-[13px] lg:w-[30rem] lg:text-[13px] lg:leading-5 xl:text-[18px] xl:w-[40rem] xl:leading-6 xl:my-5'>
                     For our clients, we want the process to proceed as smoothly, stress-free, and profitably as possible. We are dedicated to providing top-notch service and assisting our clients in succeeding.
                </p>
                <p className='font-sans text-[#333333] text-xs font-[500] leading-5 my-2 md:w-[75vw] md:text-[13px] lg:w-[30rem] lg:text-[13px] lg:leading-5 xl:text-[18px] xl:w-[40rem] xl:leading-6 xl:my-5'>
                     With our team of seasoned logistics experts and cutting-edge technology, we are committed to delivering excellence in every aspect of our service. We provide Procurement, Payment to Chinese suppliers, Supplier and product sourcing, Air cargo and sea cargo. 
                </p>
                <p className='font-sans text-[#333333] text-xs font-[500] leading-5 my-2 md:w-[75vw] md:text-[13px] lg:w-[30rem] lg:text-[13px] lg:leading-5 xl:text-[18px] xl:w-[40rem] xl:leading-6 xl:my-5'>             
                     We take care of the logistical intricacies, allowing you to focus on your core business objectives. A leading trans-border supply chain management organization, Chinadojo’s goal is to link Chinese suppliers with companies all over the world. 
                </p>
                <p className='font-sans text-[#333333] text-xs font-[500] leading-5 my-2 md:w-[75vw] md:text-[13px] lg:w-[30rem] lg:text-[13px] lg:leading-5 xl:text-[18px] xl:w-[40rem] xl:leading-6 xl:my-5'>
                     Whether you are a small business or a multinational corporation, we are committed to providing you with exceptional shipping services that surpass your expectations. Contact us today and experience the reliable, efficient, and customer-focused shipping solutions that drive your success.
                </p>
            </div>

            <div className='w-[97%] flex flex-row items-center justify-center md:w-[75vw] lg:justify-start lg:ml-[-150px] xl:w-[80vw]'>
                <AboutImages />
            </div>
        </div>
                    {/* BOTTOM */}
        <div className='flex flex-col items-center justify-center mt-16 lg:mt-20 lg:mb-12 xl:mt-24'>
            <h1 className='font-sans text-[#1A8F98] text-2xl font-[500] mb-1 text-center md:mb-3 lg:text-3xl lg:font-[600] xl:text-4xl xl:mb-5'>
                 Our Values
            </h1>

            <div className='flex flex-col items-center justify-start md:flex-row md:items-center md:justify-center'>
                {items.map((item) => {
                    return(
                <div key={item.id} 
                className='flex flex-col items-start justify-start bg-white rounded-2xl w-[75vw] px-7 py-7 my-3 md:h-[25rem] md:w-[28vw] md:px-4 md:mx-3 lg:h-[22rem] xl:px-7 xl:h-[25rem] xl:pt-10'>
                    <h1 className='font-sans text-xl font-[700] mb-3 lg:text-[22px] xl:text-[25px]'>
                        {item.title}
                    </h1>
                    <p className='font-sans text-xs font-[700] leading-6 lg:text-[13px] xl:text-[16px] xl:leading-7'>
                       {item.words}
                    </p>
                </div>
                )
                })}

            </div>

        </div>
    </div>
  )
}

export default AboutSec2