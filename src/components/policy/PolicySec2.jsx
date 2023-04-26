import React, { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'


const PolicySec2 = () => {
    const items = [
        {
            id: 0,
            title: "Air Shipping to Lagos",
            words: <p>
                1. <span className='ml-2'>
                     Dear Customer, please ensure your name+phone number+ method of shipping is clearly written on your goods, failure to do so, such items will be rejected on arrival to our warehouse.
                    </span>
                 <br />
                2. For small items 0-3kg, full payment must be made before items leave China.
                 <br />
                3. Air cargo shipment is twice per week, Tuesdays & Fridays, while Hong Kong Shipping and Express is every Friday.
                  <br />
                4. Packing Fee for goods above 9kg is $2.4/carton.
                  <br />
                5. Please note, we charge 1RMB/KG/Day plus transportation if you want to move your goods from our warehouse.
                  <br />
                6. Items are kept for free in the China warehouse for 14 days, if you are expecting more arrivals, however after 14 days, a warehouse charge of 5 RMB/Day applies.
                  <br />
                7. Dollar/Naira exchange rate is valid only for 24 Hours and demurrage of N1000/day applies if you fail to pick your items from our Nigeria warehouse 3 days after arrival.
                  <br />
                8. We follow the best industry standards for international freight forwarding, so safety and security of your goods is of great importance to us, however Chinadojo  shall not be held responsible for items damaged in transit, however for missing items, the company will provide a refund 50% of the item value, after the customer has proved beyond reasonable doubt that such items got missing while in the custody of Chinadojo.
                  <br />
                9. We shall take all necessary precautions to protect fragile items, however all such items shall be sent totally at owner’s risk.
                  <br />
               10. Payment Invoice for shipments is valid only for 24 hours and the prevailing USD/NGN rates apply on date of payment(Dollar Transfer or Cash Payments is not acceptable)
                  <br />
               11. Chinadojo shall not be held responsible for goods seized by customs or other relevant bodies or Government agency either in China or in Nigeria, and customers shall be responsible for fines if such arises, please ENSURE all items you buy are in line with rules and regulations of both countries.
                  <br />
               12. We are not responsible for errors made by the shipping carrier, such as delayed items or lost packages. We are not responsible for delays in shipping due to acts of God that are out of our control, such as epic snowstorms, natural disasters, or any other extraordinary circumstance that causes unforeseen interference with carrier routes.
            </p>,
        },
        {
            id: 1,
            title: "Shipping of Sensitive Items",
            words: <p>
                Items that contain battery, mobile phones, laptops, powder, liquid, chemical, food, serum, gas, cream, and paste are considered sensitive items, due to strict Government regulations for cargo and airplane safety, these items can only be sent through Hong Kong airport which has the necessary facility and manpower to handle such goods, however, airlines also have different polices, therefore there are two type of shipping methods for such items.
                <br />
                 Type A: Items that contain Battery of 10,000mAh and below (2-3 weeks)
                 <br />
                 Type B: Items that contain batteries bigger than 10,000mAh, Mobile phones, Laptops, Liquid, powder, chemical, food, serum, gas, cream, and paste (3-5 weeks)

            </p>,
        },
        {
            id: 2,
            title: "How do i find verified suppliers",
            words: "You can find suppliers on online stores, but for verified suppliers, you need to contact Us.",
        },
        {
            id: 3,
            title: "What are your payment options",
            words: "For Clients based in Nigeria, we accept bank deposit or cash transfers to our FirstBank, GTB or Wema accounts. For foreign clients we accepts online payments via paystack and payoneer.",
        },
        {
            id: 4,
            title: "Can you send me an invoice",
            words: "Yes!, you will get a signed and stamped PDF invoice for all your orders and shipping payments.",
        },
        {
            id: 5,
            title: "How do i send goods to you",
            words: "You just download our address card, send it to your suppliers and they send your goods to Us.",
        },
        {
            id: 6,
            title: "How do i send goods to you",
            words: "You just download our address card, send it to your suppliers and they send your goods to Us.",
        },
        {
            id: 7,
            title: "How do i send goods to you",
            words: "You just download our address card, send it to your suppliers and they send your goods to Us.",
        },
        {
            id: 8,
            title: "How do i send goods to you",
            words: "You just download our address card, send it to your suppliers and they send your goods to Us.",
        },
        {
            id: 9,
            title: "How do i send goods to you",
            words: "You just download our address card, send it to your suppliers and they send your goods to Us.",
        },
        {
            id: 10,
            title: "How do i send goods to you",
            words: "You just download our address card, send it to your suppliers and they send your goods to Us.",
        },
    ]

    const [arrow, setArrow] = useState(true)

    const handleClick = () => {
        setArrow((prevState)=> !prevState)
    }
  return (
    <div className='flex flex-col items-center justify-center bg-[#E0E6F0] px-7 pt-10 pb-0 lg:pt-20 lg:pb-5 xl:pt-24 xl:pb-10'>
        <h1 className='font-sans text-[#333333] text-[13px] font-[600] text-center md:text-[16px] md:px-20 lg:px-28 xl:text-[20px] xl:px-56'>
            Below is a list of our service policy, We strongly recommend going through them to understand how we work.
        </h1>

        <div className='flex flex-col items-center justify-center mt-7 mb-10 lg:mx-[50vw] xl:mt-11'>

        {items.map((item)=>{
                return(
        <Accordion className='border-none outline-none rounded-xl my-3 bg-white w-[75vw] lg:w-[55vw] lg:flex lg:flex-col lg:items-center lg:justify-center xl:my-5' allowZeroExpanded>
               <AccordionItem>
                   <AccordionItemHeading className='border-none'>
                       <AccordionItemButton onClick={handleClick}
                       className='flex flex-row items-center justify-between outline-none bg-white w-[75vw] h-11 text-left px-4 text-[#474040] text-[14px] font-[600] border-none rounded-2xl lg:w-[55vw] lg:rounded-lg lg:h-14 xl:h-20 xl:text-[22px] xl:px-8'>
                           {item.title}
                          {arrow ?
                           <MdKeyboardArrowDown className='text-[#181818] text-3xl w-5 h-5 bg-[#D9D9D9] rounded-full xl:w-8 xl:h-8' />
                                :
                          <MdKeyboardArrowUp className='text-[#181818] text-3xl w-5 h-5 bg-[#D9D9D9] rounded-full xl:w-8 xl:h-8' />
                          }
                       </AccordionItemButton>
                   </AccordionItemHeading>
                     <hr className='mx-3 text-[#474040]' />
                   <AccordionItemPanel>
                      <p className='text-left text-sm font-[500] text-[#474040] xl:text-lg'>
                           {item.words}
                      </p>
                   </AccordionItemPanel>
               </AccordionItem> 
            </Accordion>
              )
         })}

        </div>
    </div>
  )
}

export default PolicySec2