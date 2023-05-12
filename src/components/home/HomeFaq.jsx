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

const HomeFaq = () => {
    const items = [
        {
            title: "What is the shipping rate",
            words: "You can reach out to any of our amazing customer representative for current exchange and shipping rates.",
        },
        {
            title: "How long does it get to Nigeria",
            words: "Normal goods will take 10 days and Hong Kong and sensitive items (battery liquid and powder items) would take 20 days delivery.(Not working days), Sea cargo duration is within 2-3 months.",
        },
        {
            title: "Do you pickup package in China",
            words: "We don’t offer this service yet, But your supplier can deliver the goods to our China warehouse, Kindly reach out to our customer representative to get our address card.",
        },
        {
            title: "Do you consolidate",
            words: "Yes, we always consolidate and guess what, it is free. Our consolidation services saves you cost and also helps optimize and maximize your shipping experience.",
        },
        {
            title: "How do i  know if a supplier is legit",
            words: "You can check the store profile, reviews from previous buyers, ask for real time picture or video of the items and most important, try the supplier with a sample order first to see the supplier reliability.",
        },
        {
            title: "Their calculation is different from ours",
            words: "The prices on the website are mostly just the price, local logistics to deliver it to your agent are not included.",
        },
    ]
    
    const [arrow, setArrow] = useState(true)

    const handleClick = () => {
        setArrow((prevState)=> !prevState)
    }

  return (
    <div className='flex flex-col items-center justify-center bg-[#E0E6F0]'>
        <div className='flex flex-col items-center justify-center mt-12'>
            <p className='font-sans text-[#F8C605] text-[16px] font-[600] md:font-[700] lg:font-[500] lg:text-[20px] xl:text-[27px] xl:font-[600]'>
                FAQ
            </p>
            <h1 className='font-sans text-2xl font-[700] text-[#333333] mt-1 text-center md:font-[800] md:text-2xl lg:text-3xl xl:text-[42px] xl:leading-[50px] xl:mt-2'>
                Frequently Asked Questions
            </h1>
        </div>

        <div className='flex flex-col items-center justify-center mt-7 mb-10 lg:flex-row lg:items-center lg:justify-center lg:flex-wrap lg:w-[100vw] xl:px-12 xl:mt-11'>

            {items.map((item)=>{
                return(
            <Accordion className='border-none outline-none rounded-xl my-2 bg-white w-[75vw] lg:w-[33vw] lg:mx-10 lg:my-[10px] xl:w-[27vw] xl:mx-20 xl:my-[12px]' allowZeroExpanded>
               <AccordionItem>
                   <AccordionItemHeading className='border-none'>
                       <AccordionItemButton onClick={handleClick}
                       className='flex flex-row items-center justify-between outline-none bg-white w-[75vw] h-11 text-left px-4 text-[#474040] text-[14px] font-[600] border-none rounded-2xl lg:w-[33vw] xl:w-[27vw] xl:h-[52px] xl:text-[17px]'>
                           {item.title}
                          {arrow ?
                           <MdKeyboardArrowDown className='text-[#181818] text-3xl w-5 h-5 bg-[#D9D9D9] rounded-full' />
                                :
                          <MdKeyboardArrowUp className='text-[#181818] text-3xl w-5 h-5 bg-[#D9D9D9] rounded-full' />
                          }
                       </AccordionItemButton>
                   </AccordionItemHeading>
                     <hr className='mx-3 text-[#474040]' />
                   <AccordionItemPanel>
                      <p className='text-left text-sm font-[500] text-[#474040]'>
                           {item.words}
                      </p>
                   </AccordionItemPanel>
               </AccordionItem> 
            </Accordion>
               )
            })}
            
        </div>

        <div className='flex flex-col items-center justify-center mt-3 mb-12 lg:mt-10 lg:mb-16'>
            <p className='font-sans text-[#F8C605] text-[16px] font-[600] w-60 text-center md:font-[700] lg:font-[500] lg:text-[20px] lg:w-96 xl:text-[27px] xl:font-[500] xl:w-[35rem]'>
               Don't Miss Important Updates, News and Freebies
            </p>
            <h1 className='font-sans text-2xl font-[700] text-[#333333] mt-2 text-center md:font-[800] md:text-2xl lg:text-3xl xl:text-[35px] xl:mt-5'>
               Join our Mailing List Today
            </h1>
            <div className='mt-8'>
                <form action="" className='flex flex-col items-center justify-center lg:flex-row lg:items-center lg:justify-center'>
                    <div className='flex flex-row items-center justify-between'>
                        <input className='w-[40vw] h-9 pl-4 mx-3 placeholder:text-xs md:w-[30vw] md:placeholder:text-sm lg:h-12 lg:w-[22vw] lg:pl-7 lg:mx-3 lg:placeholder:text-[13px] xl:h-[55px] xl:placeholder:text-[16px]' type="text" placeholder='First Name' />
                        <input className='w-[40vw] h-9 pl-4 mx-3 placeholder:text-xs md:w-[30vw] md:placeholder:text-sm lg:h-12 lg:w-[22vw] lg:pl-7 lg:mx-3 lg:placeholder:text-[13px] xl:h-[55px] xl:placeholder:text-[16px]' type="text" placeholder='Your Email' />
                    </div>

                    <button className='bg-[#1A8F98] hover:bg-[#F8C605] hover:text-[#474545] text-white border-none h-10 w-[50vw] text-center text-[11px] font-[500] mt-7 md:w-[30vw] lg:mt-0 lg:h-12 lg:w-[20vw] lg:ml-8 lg:font-[600] xl:h-[55px] xl:text-[14px]'>
                        PUSH GOOD THINGS MY WAY
                    </button>
                </form>
            </div>
        </div>

    </div>
  )
}

export default HomeFaq