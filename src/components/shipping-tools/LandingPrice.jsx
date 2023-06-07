import React, { useState } from 'react'

const LandingPrice = () => {
    const [goods, setGoods] = useState('');
    const [weight, setWeight] = useState('');
    const [shipping, setShipping] = useState('');
    const [clearing, setClearing] = useState('');
    const [rate, setRate] = useState('');
    const [result, setResult] = useState(false);

    const shippingFee =  (weight * shipping) * rate
    const clearingFee =  weight * clearing
    const landingCost = goods + shippingFee + clearingFee

    const calculate = () => {
        setResult(true)
    }

  return (
    <div className='flex flex-col items-center justify-center w-full mt-7 mb-10'>

                    {/* SUB-TITLE */}
       <div className='flex items-center justify-center w-full'>
         <h1 className='text-xs text-[#474545] font-semibold bg-[#F8C605] py-2 px-8 rounded-md hover:bg-[#1A8F98] 
         hover:text-[#ffff] md:text-[14px] md:py-3 md:px-12 lg:text-[16px] lg:py-4 xl:text-[24px] xl:mb-5 xl:px-20 xl:py-5'>
           LANDING COST CALCULATOR
         </h1>
       </div>

       <div className='flex flex-col items-start justify-center w-full mt-8 md:mt-5 lg:flex-row lg:mt-12'>
                     {/* CALCULATOR */}
        <div className='flex flex-col items-start justify-start h-[31rem] rounded-md w-[75vw] bg-[#f1f1f1] px-5 pt-5 md:px-20 lg:w-[43vw] 
        lg:h-[26rem] lg:mr-5 lg:px-7 xl:w-[41vw] xl:h-[28rem]'>
                         {/* Price of Goods */}
            <div className='flex flex-col items-center justify-start w-full my-2 lg:flex-row lg:justify-between'>
                <label 
                className='text-start w-full pb-1 text-[13px] lg:w-24 lg:text-[14px] xl:text-[16px]'
                htmlFor="goods">
                    Price of Goods (₦)
                </label>
                <input 
                className='border-[0.1em] border-[#bebdbd] rounded-md outline-[#1A8F98] h-10 w-full pl-5 xl:h-12 xl:ml-5'
                type="number" 
                placeholder='Price of Goods'
                id="goods"
                value={goods}
                onChange={(e) => setGoods((e.target.value))}
               />
            </div>
                               {/* Weight */}
            <div className='flex flex-col items-center justify-start w-full my-2 lg:flex-row lg:justify-between'>
                <label 
                className='text-start w-full pb-1 text-[13px] lg:w-24 lg:text-[14px] xl:text-[16px]'
                htmlFor="weight">
                    Weight (kg)
                </label>
                <input 
                className='border-[0.1em] border-[#bebdbd] rounded-md outline-[#1A8F98] h-10 w-full pl-5 xl:h-12 xl:ml-5'
                type="number" 
                placeholder='Weight'
                id="weight"
                value={weight}
                onChange={(e) => setWeight((e.target.value))}
               />
            </div>
                                  {/* Shipping Fee */}             
            <div className='flex flex-col items-center justify-start w-full my-2 lg:flex-row lg:justify-between'>
                <label 
                className='text-start w-full pb-1 text-[13px] lg:w-24 lg:text-[14px] xl:text-[16px]'
                htmlFor="shipping">
                    Shipping Fee ($)
                </label>
                <input 
                className='border-[0.1em] border-[#bebdbd] rounded-md outline-[#1A8F98] h-10 w-full pl-5 xl:h-12 xl:ml-5'
                type="number" 
                placeholder='Shipping Fee'
                id="shipping"
                value={shipping}
                onChange={(e) => setShipping((e.target.value))}
               />
            </div>
                                    {/* Clearing Fee */}
            <div className='flex flex-col items-center justify-start w-full my-2 lg:flex-row lg:justify-between'>
                <label 
                className='text-start w-full pb-1 text-[13px] lg:w-24 lg:text-[14px] xl:text-[16px]'
                htmlFor="clearing">
                    Clearing Fee (₦)
                </label>
                <input 
                className='border-[0.1em] border-[#bebdbd] rounded-md outline-[#1A8F98] h-10 w-full pl-5 xl:h-12 xl:ml-5'
                type="number" 
                placeholder='Clearing Fee'
                id="clearing"
                value={clearing}
                onChange={(e) => setClearing((e.target.value))}
               />
            </div>
                                     {/* Exchange Rate */}
            <div className='flex flex-col items-center justify-start w-full my-2 lg:flex-row lg:justify-between'>
                <label 
                className='text-start w-full pb-1 text-[13px] lg:w-24 lg:text-[14px] xl:text-[16px]'
                htmlFor="rate">
                    Exchange Rate
                </label>
                <input 
                className='border-[0.1em] border-[#bebdbd] rounded-md outline-[#1A8F98] h-10 w-full pl-5 xl:h-12 xl:ml-5'
                type="number" 
                placeholder='Exchange Rate'
                id="rate"
                value={rate}
                onChange={(e) => setRate((e.target.value))}
               />
            </div>
                          {/* BUTTON */}     
            <div className='flex items-start justify-start mt-3 lg:mx-20 xl:mx-24'>
                <button onClick={calculate}
                className='text-center text-[13px] font-normal outline-none border-none py-2 px-5 bg-[#1A8F98] text-[#ffff]
                 hover:bg-[#F8C605] hover:text-[#474545] rounded-md lg:px-6 xl:text-[15px]'>
                    CALCULATE
                </button>
            </div>

        </div>
                      {/* LANDING COST */}
        {result ? 
        <div className='flex flex-col items-start justify-start h-64 rounded-md w-[75vw] bg-[#f1f1f1] mt-4 px-5 pt-4 md:px-20 md:pt-6
        lg:w-[35vw] lg:mt-0 lg:pt-5 lg:ml-5 lg:px-5 lg:h-72 xl:w-[40vw] xl:pt-7 xl:h-64'>
            <h1 className='font-semibold pb-2 text-lg text-[#1A8F98] md:pb-2 md:text-xl xl:text-xl'>
                Landing Cost
            </h1>

            <div className='flex items-center justify-start flex-wrap my-1 md:my-2'>
                <h1 className='text-[14px] lg:text-[15px] xl:text-[17px]'>
                    Price of Goods :
                </h1>
                <h1 className='text-[12px] font-bold ml-3 md:text-[13px] lg:text-[14px] xl:text-[16px]'>
                    {goods}
                </h1>
            </div>

            <div className='flex items-center justify-start flex-wrap my-1 md:my-2'>
                <h1 className='text-[14px] lg:text-[15px] xl:text-[17px]'>
                    Shipping in (₦) :
                </h1>
                <h1 className='text-[12px] font-bold ml-3 md:text-[13px] lg:text-[14px] xl:text-[16px]'>
                    ({weight} * {shipping}) * {rate} = {shippingFee} ₦
                </h1>
            </div>

            <div className='flex items-center justify-start flex-wrap my-1 md:my-2'>
                <h1 className='text-[14px] lg:text-[15px] xl:text-[17px]'>
                    Clearing Total :
                </h1>
                <h1 className='text-[12px] font-bold ml-5 md:text-[13px] lg:text-[14px] xl:text-[16px]'>
                    {weight} * {clearing} = {clearingFee} ₦
                </h1>
            </div>

            <div className='flex items-center justify-start flex-wrap my-1 md:my-2'>
                <h1 className='text-[14px] lg:text-[15px] xl:text-[17px]'>
                    Landing Cost :
                </h1>
                <h1 className='text-[12px] font-bold ml-6 md:text-[13px] lg:text-[14px] xl:text-[16px]'>
                    {goods} + {shippingFee} + {clearingFee} = {landingCost} ₦
                </h1>
            </div>
        </div> : ''
            }

       </div>

    </div>
  )
}

export default LandingPrice