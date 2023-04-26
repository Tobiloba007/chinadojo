import React from 'react'

const ServicesSec3 = () => {
    const items = [
        {
            id: 0,
            title: "Timely and effective shipping is ensured by a skilled logistics crew.",
            words: "Your orders are shipped promptly and effectively by our knowledgeable logistics staff, guaranteeing that you receive your orders on time and in good condition.",
        },
        {
            id: 1,
            title: "Competitive rates for shipping to any destination",
            words: " We provide affordable shipping costs to every location, guaranteeing that you get the most for your money.",
        },
        {
            id: 2,
            title: "Customer Satisfaction",
            words: "Customer satisfaction is always our primary goal at Chinadojo. We put customers at the heart of every choice we make, and we go above and beyond to make sure they are satisfied with our goods and services. Our clients are the reason we are in business, so their pleasure is extremely important to us.",
        },
        {
            id: 3,
            title: "Excellent customer care is offered around-the-clock for all shipping-related questions",
            words: "Our customer service team is available 24/7 to answer any shipping-related inquiries and provide assistance whenever you need it. Whether you have questions about your order, need help with tracking, or have any other concerns, we’re here to help.",
        },
        {
            id: 4,
            title: "Full range of shipping options, including air, sea, and ground transportation",
            words: "We offer a full range of shipping options, including air, sea, and ground transportation, to meet the diverse needs of our customers. No matter what you’re shipping or where it needs to go, we have a solution that will work for you.",
        },
        {
            id: 5,
            title: "Internal customs brokerage for efficient shipping abroad",
            words: "Our internal customs brokerage facilitates seamless international shipping by managing all the paperwork and processes to assure easy customs clearance. By doing this, you can prevent delays and guarantee that your shipments get to their destination on time.",
        },
    ]

  return (
    <div className='flex flex-col items-center justify-center mt-16 mb-10'>
        <div className='flex flex-col items-center justify-center mx-7 md:mx-12 lg:mx-44 xl:mx-72'>
            <h1 className='font-sans text-[#1A8F98] text-xl text-center font-[600] md:text-2xl lg:text-[28px] lg:leading-9 xl:text-[34px] xl:leading-[46px]'>
                Why you should use our Shipping Services
            </h1>
            <p className='font-sans text-[#333333] text-[14px] font-[600] mt-4 text-center md:text-[15px] lg:text-[17px] xl:text-[20px]'>
                Here are a handful of the many factors that lead other business owners to share your level of faith in us.
            </p>
        </div>

        <div className='flex flex-col items-center justify-center mx-7 mt-7 md:flex-row md:flex-wrap md:items-start md:justify-between md:mx-12 md:mt-5 lg:mx-16 xl:mx-36'>
            {items.map((item)=>{
                return(
           <div className='flex flex-col items-start justify-start bg-[#F5F5F6] px-8 py-5 pb-7 w-[75vw] rounded-xl my-4 md:w-[40vw] md:h-[20rem] lg:w-[27vw] lg:my-5 lg:h-[23.5rem] xl:w-[25vw] xl:h-[27rem]'>
             <h1 className='font-sans text-[#333333] text-[17px] font-[800] lg:text-[18px] xl:text-[25px]'>
                  {item.title} 
             </h1>
             <p className='font-sans text-[#333333] text-[12px] font-[500] mt-3 leading-6 lg:text-[14px] xl:text-[16px] xl:font-[600]'>
                   {item.words}                  
             </p>
           </div>
           )
            })}

        </div>
    </div>
  )
}

export default ServicesSec3