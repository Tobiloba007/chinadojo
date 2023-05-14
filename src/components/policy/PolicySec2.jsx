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
                   Dear customer, Please ensure your Name and phone number is marked on the package. Our warehouse would reject failure to do so. 

                    </span>
                 <br />
                2. Our air cargo shipment is twice every week, every Tuesday and Friday. Normal goods are shipped every Tuesday and Friday and Hong kong shipping is every Friday 
                 <br />
                3. Packing fee is ₦1000/Carton. 
                  <br />
                4. Our goods consolidation services allow you to optimise your shipping process and minimise costs. Your Items can be stored and compiled together at our china warehouse and we can ship when it's complete. Our consolidation service is free. 
                  <br />
                5. Dollar/Naira exchange rate is valid only for 24 Hours and demurrage of ₦1000/day applies if you fail to pick your items from our Nigeria warehouse after 7 days of arrival.
                  <br />
                6. We follow the best industry standards for international freight forwarding, so safety and security of your goods is of great importance to us, however Chinadojo shall not be held responsible for items damaged in transit, however for missing items, the company will provide a refund 50% of the item value, after the customer has proved beyond reasonable doubt that such items got missing while in the custody of Chinadojo. 
                  <br />
                7. We shall take all safety measure to safeguard fragile items, Fragile goods, please make sure your supplier packages it well with extra packaging material. However all such items shall be sent totally at owner’s risk.
                  <br />
                8.  Payment for shipments is valid only for 24 hours and the prevailing USD/NGN rates apply on date of payment(USD Transfer or Cash Payments is not acceptable) We only accept payment in Naira.
                  <br />
                9. Chinadojo will not be held responsible for goods seized by customs or Government agencies either in China or Nigeria, and customers shall be responsible for fines if such arises, please ENSURE all items you buy are in line with rules and regulations of both countries. At Chinadojo Procurement Agency, we are committed to providing excellent Air cargo services and ensuring your satisfaction throughout the shipping journey. By adhering to our service policy, we aim to build lasting relationships based on trust, reliability, and exceptional customer service. Should you have any questions or require further clarification regarding our service policy, please do not hesitate to contact our dedicated customer service team. We look forward to serving you.
                  <br />
            </p>,
        },
        {
            id: 1,
            title: "Shipping of HK & Sensitive Items",
            words: <p>
              Items such as wristwatches, bluetooth, led flash light, flash shoes, bluetooth speakers, ring light, powder, liquid, chemical, food, serum, gas, cream, items that contain battery such as laptop, phones are considered sensitive items and are shipped through Hong Kong airport which has the necessary facility to handle such goods. The duration is 2-3 weeks.
            </p>,
        },
        {
            id: 2,
            title: "Sea Cargo",
            words: <div>
              <h1 className='font-[800]'>Sea Shipping to Lagos</h1>
              <br />
              <b> Cargo Booking: </b>
              <span>
              We accept sea cargo bookings through our designated channels, including our website, email or whatsapp. Our team will promptly assist you in securing a booking based on your requirements. Dear customer, Please ensure your Name and phone number is marked on the package and also ensure your receipt number is marked on the goods. Our warehouse would reject if failure to do so. We offer free consolidation of packages for Sea cargo.
              </span>
              <br />
              <br />
              <b>Cargo Packaging and Labelling: </b>
              <span>
              Proper packaging and labelling of your cargo are crucial to ensure safe transportation. Please ensure that your cargo is adequately packaged, labelled, and secured to withstand the rigours of sea transportation. We recommend using sturdy packaging materials, appropriate labelling, and following any specific packaging guidelines or regulations for hazardous materials, fragile items, or perishable goods. Chinadojo shall not be held responsible for items damaged in transit 
              </span>
              <br />
              <br />
              <b>Cargo Handling and Storage: </b>
              <span>
              We handle your cargo with the utmost care and professionalism throughout the loading, unloading, and storage processes. Our trained personnel will ensure proper handling techniques are employed to minimise the risk of damage or loss. We maintain secure and well-monitored storage facilities to safeguard your cargo during transit or when awaiting further transportation arrangements. We shall take all necessary precautions to protect fragile items, however all such items shall be sent totally at the owner's risk. 
              </span>
              <br />
              <br />
              <b>Delivery and Distribution: </b>
              <span>
              We strive to deliver your sea cargo in a timely manner, adhering to the agreed-upon schedule and routing. Our team will coordinate with reliable carriers, agents, and partners to ensure efficient delivery to the designated destination. Delivery times may vary depending on factors such as distance, weather conditions, customs clearance, or unforeseen events beyond our control. We will keep you informed of any significant changes or delays affecting your delivery. 
              </span>
              <br />
              <br />
              <p>
              At Chinadojo Procurement Agency, we are committed to providing excellent sea cargo services and ensuring your satisfaction throughout the shipping journey. By adhering to our service policy, we aim to build lasting relationships based on trust, reliability, and exceptional customer service. Should you have any questions or require further clarification regarding our service policy, please do not hesitate to contact our dedicated customer service team. We look forward to serving you.
              </p>
            </div>
        },
        {
            id: 3,
            title: "Procurement Policy",
            words: <p>
              1. It’s essential customers submit well arranged and detailed links quantities, descriptions and colour. Customers are required to pay a deposit fee of ₦5000, which would be refunded or deducted after the order is placed. Our customer representative will prepare and send an invoice within 24 hours.
              <br />
              2.  Rates are calculated based on daily exchange rates and invoice is valid for 24 hours only. 
              <br />
              3.  Orders are processed within 24hrs after payment for the invoice. 
              <br />
              4.  Our Procurement duration takes 10 days, Our customer representative would keep you updated during the whole procurement process. 
              <br />
              5. We would not be responsible for low quality products delivered by suppliers, please choose your suppliers wisely
              <br />
              6. In the event of incomplete goods when you receive your order. Please notify us immediately. We will guide you through the claims process and work diligently to resolve the issue in a fair and timely manner. 
              <br />
              7. All payments should be made to account details: <b>UBA 1023673196 Chinadojo Procurement Agency</b>
              <br />
              8. Procurement service charge 1688 website Procurement service charge is 7.5% of total order if order above 1000rmb or 75rmb flat rate for orders below 1000rmb. Alibaba, aliexpress, taobao and rest Procurement service charge is 10% of total order if order above 1000rmb or 100rmb flat rate for orders below 1000rmb. Consolidation is 1.5rmb/Parcel and Carton fee of ₦1000
              <br />
             </p>,
        },
        {
            id: 4,
            title: "Fragile Goods & Insurance",
            words: <p>
              1. At Chinadojo, we take outmost care of all your goods, however we cannot guarantee safety of goods during transit. It is in your best interest to insure fragile and highly valuable goods to ensure you get a full refund in any case of loss or damage, insurance cost is 10% of declared value of your items.
            </p>,
        },
        {
            id: 5,
            title: "Shipping of GZ & Normal goods",
            words: <p>
              Items such as clothes, shoes , bags, jewellery are considered as normal goods and are shipped through Guangzhou airport. The duration is 7-10 days.
            </p>,
        },
        {
            id: 6,
            title: "Refund Policy",
            words: <p>
              Refunds for incomplete items shall be communicated to the customer instantly and you can either use the refund to reorder, refund cash, or deduct from the shipping
            </p>,
        },
        {
            id: 7,
            title: "Payment to Chinese Supplier Policy",
            words: <p>
              Payments to Chinese suppliers are done within 2-5hours after payment of naira is confirmed. A transaction fee of 50rmb will be charged. This fee covers all the payment or multiple payment you make within 24hrs, that is if you are paying different suppliers, the service charge covers all. We will do our best to verify all suppliers before payments, however, we will not be held responsible for any loss, therefore customers are advised to deal only with trusted suppliers.
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