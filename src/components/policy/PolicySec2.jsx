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
            title: "Sea Cargo",
            words: <p>1. Dear Customer, please ensure your name+phone number+ sea is clearly written on your goods, failure to do so, such items will be rejected on arrival to our warehouse.
              <br />
              2. We offer consolidation of many packages for Sea cargo.
              <br />
              3.  Sea cargo leaves every 10 days.
              <br />
              4.  We follow the best industry standards for international freight forwarding, so safety and security of your goods is of great importance to us, however Chinadojo shall not be held responsible for items damaged in transit, however for missing items, the company will offer shipping discount for 100% of items value, after the customer has proved beyond reasonable doubt that such items got missing while in the custody of Chinadojo.
              <br />
              5. We shall take all necessary precautions to protect fragile items, however all such items shall be sent totally at owner’s risk.
              <br />
              6. Items are kept for free in the China warehouse for 14 days, if you are expecting more arrivals, however after 14 days, a warehouse charge of 35 RMB/Day applies.
              <br />
              7. Please note, we charge 15 RMB/Carton plus transportation and loading charge if you want to move your goods from our warehouse.
              <br />
              8. Chinadojo shall not be held responsible for goods seized by customs or other relevant bodies or Government agency either in China or in Nigeria, and customers shall be responsible for fines if such arises, please ensure all items you buy are in line with rules and regulations of both countries. Payment Invoice for shipments is valid only for 24 hours and the prevailing USD/NGN rates apply on date of payment.",
            </p>
        },
        {
            id: 3,
            title: "Procurement Policy",
            words: <p>
              1. Customers are required to submit well arranged links stating quantities descriptions and colour.
              <br />
              2. Customers are required to make a deposit of N3,000 refunded ONLY after order is placed.
              <br />
              3. Our procurement agents will prepare and send a pdf invoice within 24 hours.
              <br />
              4. Rates are calculated based on daily exchange rates and invoice is valid for 24 hours only.
              <br />
              5. Payment is made for invoice.
              <br />
              6. Orders are placed after payment has been made for invoice.
              <br />
              7. Procurement takes 7 days.
              <br />
              8. We have the right to reject procurement orders if any of our conditions are not met.
              <br />
              9. Chinadojo is not responsible for low quality products or incomplete goods delivered by suppliers, please choose your suppliers wisely.
              <br />
              10. For incomplete or unavailable items, refunds are processed immediately, the Naira equivalent will be subtracted from your shipping bill or refunded back to you within 7 working days.
            </p>,
        },
        {
            id: 4,
            title: "Alibaba Procurement Policy",
            words: <p>
              1. For Alibaba.com orders.
              <br />
              2. Customer submits well arranged links stating quantities descriptions and colour.
              <br />
              3. Customer makes a deposit of N5,000 refunded ONLY after order is placed.
              <br />
              4. Our procurement agents will prepare and send a pdf invoice within 24 hours.
              <br />
              5. Payment is made for invoice.
              <br />
              6. Orders are placed.
              <br />
              7. Procurement takes 7 days.
              <br />
              8. Our service charge is 5% of total order or 100 RMB for orders below N50,000.
            </p>,
        },
        {
            id: 5,
            title: "Sourcing Policy",
            words: <p>
              1. Customer sends clear picture and description of items needed.
              <br />
              2. Customer makes a service charge payment of N3,000/item refunded ONLY if items are not found.
              <br />
              3. Our sourcing agents will prepare and send a proforma invoice with all details within 24 hours.
            </p>,
        },
        {
            id: 6,
            title: "Fees & Charges",
            words: <p>
              1. FEES & CHARGES FOR AIR FREIGHT (No Hidden Charges)
              <br />
              2. Consolidation = N200/Package
              <br />
              3. Packing Fee = $2.4 /Carton
              <br />
              4. Wood Packing = 100 RMB/Carton
              <br />
              5. Shipping Fee (From China – Lagos, Abuja, Kano)
              <br />
              6. Custom Duties = N 500/KG (normal goods) N500/KG (Hong Kong Cargo)
              <br />
              7. Waybill outside Lagos = N300/KG, Minimum Charge = 3,000
              <br />
              8. Items 4 & 5 are applicable in all instances.
              <br />
              9. Item 2 is applicable when goods above 10kg
              <br />
              10. Item 3 is applicable where items are fragile
              <br />
              11. Item 1 is applicable when you buy from more than 1 supplier.
            </p>,
        },
        {
            id: 7,
            title: "Fragile Goods & Insurance",
            words: <p>
              1. At Chinadojo, we take outmost care of all your goods, however we cannot guarantee safety of goods during transit. It is in your best interest to insure fragile and highly valuable goods to ensure you get a full refund in any case of loss or damage, insurance cost is 10% of declared value of your items.
            </p>,
        },
        {
            id: 8,
            title: "OEM Manufacturing",
            words: <p>
              1. We accept links and pictures for OEM manufacturing.
              <br />
              2. Service charge for OEM is non-refundable.
              <br />
              3. Customers must provide all necessary logos, designs, specifications, and order details.
              <br />
              4. We shall provide a comprehensive quote within 48 hours after payments.
              <br />
              5. Service Charge for 1 item is N10,000 however this amount is negotiable when customer is manufacturing many types of items.
            </p>,
        },
        {
            id: 9,
            title: "Refund Policy",
            words: <p>
              1. 1688 & Alibaba.com refunds.
              <br />
              2. Refunds for incomplete or out of stock items are communicated to customers immediately .
              <br />
              3. We do not offer Naira refunds, all refund can be carried over for shipping or for next orders.
            </p>,
        },
        {
            id: 10,
            title: "Payment Policy",
            words: <p>
              1. All payments to Chinese suppliers are completed within 2-24 hours after payment depending on the amount involved.
              <br />
              2. For Bank Account, Alipay & WeChat Payments, a transaction fee of 3% will be charged.
              <br />
              3. We will do our best to verify all suppliers before payments, however, Naiyuan Mart shall not be held responsible for any loss, therefore customers are advised to deal only with trusted suppliers.
              <br />
              4. We shall not make any fraudulent payments, and customers who try such will be reported to the police and prosecuted.
            </p>,
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