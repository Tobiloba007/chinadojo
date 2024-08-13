import React from 'react'
import { useState, useEffect } from 'react'
import sanityClient from '../../../sanity';


const Rate = () => {
    const [getRates, setGetRates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => { 
        sanityClient.fetch(
            `
            *[_type == 'section']{
                ...,
                content[]->{
                    ...,
                }
              }
            `
        )
        .then((data) => {
            setGetRates(data);
            setLoading(false);
            console.log(data);
          })
          .catch((err) => {
            setError(err);
            console.log(err);
            setLoading(false);
          });
    },[])

    if (loading) {
        return <p>Loading...</p>;
      }
    
      if (error) {
        return <p>Error: {error.message}</p>;
      }
    

    const first = getRates[0]

    const second = getRates[1]

    const third = getRates[2]

    const fourth = getRates[3]


  return (
    <div className='flex flex-col items-center justify-start w-full bg-white mb-10 md:mb-14'>
        <div className='mt-8 md:mt-12 xl:mt-20'>
            <h1 className='font-sans text-2xl font-[700] text-[#1A8F98] text-center md:font-[800] md:text-3xl xl:text-[42px]'>
               Our Rates Today
            </h1>
            <p className='text-xs text-center w-[80vw] font-medium mt-1 md:text-[13px] md:w-[53vw] lg:text-[14px] lg:w-[45vw] 
            xl:mt-4 xl:w-[30vw] xl:text-[16px] xl:leading-6'>
              Although rates are variable and may differ from published rates, they are updated daily.
            </p>
        </div>

        <table className='flex flex-col items-center justify-start w-[90vw] mt-5 md:w-full xl:mt-10'>
            <thead>
                <tr className='w-[80vw] bg-[#F8C605] h-14 lg:h-16 xl:h-20'>
                    <th className='text-center text-xs w-24 md:w-40 lg:w-44 xl:w-60 rounded-l-lg xl:text-[16px]' scope='col'>Type</th>
                    <th className='text-center text-xs w-24 md:w-40 lg:w-44 xl:w-60 xl:text-[16px]' scope='col'>Rate</th>
                    <th className='text-center text-xs w-24 md:w-40 lg:w-44 xl:w-60 xl:text-[16px]' scope='col'>Clearing Fee</th>
                    <th className='text-center text-xs w-24 md:w-40 lg:w-44 xl:w-60 rounded-r-lg xl:text-[16px]' scope='col'>Duration</th>
                </tr>
            </thead>
            <tbody>
                <tr className='h-2'>
                    <td></td>
                    <td></td>
                </tr>
                
                <tr className='w-[80vw] bg-[#c0bebe] h-10 mt-5 lg:h-16 xl:h-20'>
                    <td className='text-center text-[16px] font-bold w-24 md:w-40 lg:w-44 xl:w-60 rounded-l-lg md:text-[18px] lg:text-[20px] lg:font-bold xl:text-[25px]'>{fourth.sectionName}</td>
                    <td className='text-center text-[10px] w-24 md:w-40 lg:w-44 xl:w-60 md:text-[12px] lg:font-bold xl:text-[16px]'></td>
                    <td className='text-center text-[10px] w-24 md:w-40 lg:w-44 xl:w-60 md:text-[12px] lg:font-bold xl:text-[16px]'></td>
                    <td className='text-center text-[10px] w-24 md:w-40 lg:w-44 xl:w-60 rounded-r-lg md:text-[12px] lg:font-bold xl:text-[16px]'></td>
                </tr>
                
                {fourth.content.map((item) => {
                    return(
                        <tr key={item.id} className='w-[80vw] h-14 odd:bg-white even:bg-[#efefef] lg:h-16 xl:h-20'>
                            <td className='text-center text-[10px] w-24 pl-3 md:text-[12px] md:w-40 lg:w-44 xl:w-60 rounded-l-lg lg:font-bold xl:text-[16px]'>{item.type}</td>
                            <td className='text-center text-[10px] w-24 md:text-[12px] md:w-40 lg:w-44 xl:w-60 lg:font-bold xl:text-[16px]'>{item.rate}</td>
                            <td className='text-center text-[10px] w-24 md:text-[12px] md:w-40 lg:w-44 xl:w-60 lg:font-bold xl:text-[16px]'>{item.clearingFee}</td>
                            <td className='text-center text-[10px] w-24 md:text-[12px] md:w-40 lg:w-44 xl:w-60 rounded-r-lg lg:font-bold xl:text-[16px]'>{item.duration}</td>
                        </tr>
                    )
                })}


                <tr className='h-2'>
                    <td></td>
                    <td></td>
                </tr>
                
                <tr className='w-[80vw] bg-[#c0bebe] h-10 mt-5 lg:h-16 xl:h-20'>
                    <td className='text-center text-[16px] font-bold w-24 md:w-40 lg:w-44 xl:w-60 rounded-l-lg md:text-[18px] lg:text-[20px] lg:font-bold xl:text-[25px]'>{second.sectionName}</td>
                    <td className='text-center text-[10px] w-24 md:w-40 lg:w-44 xl:w-60 md:text-[12px] lg:font-bold xl:text-[16px]'></td>
                    <td className='text-center text-[10px] w-24 md:w-40 lg:w-44 xl:w-60 md:text-[12px] lg:font-bold xl:text-[16px]'></td>
                    <td className='text-center text-[10px] w-24 md:w-40 lg:w-44 xl:w-60 rounded-r-lg md:text-[12px] lg:font-bold xl:text-[16px]'></td>
                </tr>

                {second.content.map((item) => {
                    return (
                        <tr key={item.id} className='w-[80vw] h-14 odd:bg-white even:bg-[#efefef] lg:h-16 xl:h-20'>
                            <td className='text-center text-[10px] w-24 md:w-40 lg:w-44 xl:w-60 rounded-l-lg md:text-[12px] lg:font-bold xl:text-[16px]'>{item.type}</td>
                            <td className='text-center text-[10px] w-24 md:w-40 lg:w-44 xl:w-60 md:text-[12px] lg:font-bold xl:text-[16px]'>{item.rate}</td>
                            <td className='text-center text-[10px] w-24 md:w-40 lg:w-44 xl:w-60 md:text-[12px] lg:font-bold xl:text-[16px]'>{item.clearingFee}</td>
                            <td className='text-center text-[10px] w-24 md:w-40 lg:w-44 xl:w-60 rounded-r-lg md:text-[12px] lg:font-bold xl:text-[16px]'>{item.duration}</td>
                        </tr>
                    )
                })}



                <tr className='h-2'>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='w-[80vw] bg-[#c0bebe] h-10 mt-5 lg:h-16 xl:h-20'>
                    <td className='text-center text-[16px] font-bold w-24 pl-3 md:w-40 lg:w-44 xl:w-60 rounded-l-lg md:text-[18px] lg:text-[20px] lg:font-bold xl:text-[25px]'>{third.sectionName}</td>
                    <td className='text-center text-[10px] w-24 md:w-40 lg:w-44 xl:w-60 md:text-[12px] lg:font-bold xl:text-[16px]'></td>
                    <td className='text-center text-[10px] w-24 md:w-40 lg:w-44 xl:w-60 md:text-[12px] lg:font-bold xl:text-[16px]'></td>
                    <td className='text-center text-[10px] w-24 md:w-40 lg:w-44 xl:w-60 rounded-r-lg md:text-[12px] lg:font-bold xl:text-[16px]'></td>
                </tr>

                {third.content.map((item) => {
                    return(
                        <tr key={item.id} className='w-[80vw] h-14 even:bg-white odd:bg-[#efefef] lg:h-16 xl:h-20'>
                            <td className='text-center text-[10px] w-24 md:w-40 lg:w-44 xl:w-60 rounded-l-lg md:text-[12px] lg:font-bold xl:text-[16px]'>{item.type}</td>
                            <td className='text-center text-[10px] w-24 md:w-40 lg:w-44 xl:w-60 md:text-[12px] lg:font-bold xl:text-[16px]'>{item.rate}</td>
                            <td className='text-center text-[10px] w-24 md:w-40 lg:w-44 xl:w-60 md:text-[12px] lg:font-bold xl:text-[16px]'>{item.clearingFee}</td>
                            <td className='text-center text-[10px] w-24 md:w-40 lg:w-44 xl:w-60 rounded-r-lg md:text-[12px] lg:font-bold xl:text-[16px]'>{item.duration}</td>
                        </tr>
                    )
                })}



                <tr className='h-2'>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='w-[80vw] bg-[#c0bebe] h-10 mt-5 lg:h-16 xl:h-20'>
                    <td className='text-center text-[16px] font-bold w-28 pl-3 md:w-40 lg:w-44 xl:w-60 rounded-l-lg md:text-[18px] lg:font-bold lg:text-[20px] xl:text-[25px]'>{first.sectionName}</td>
                    <td className='text-center text-[10px] w-24 md:w-40 lg:w-44 xl:w-60 md:text-[12px] lg:font-bold xl:text-[16px]'></td>
                    <td className='text-center text-[10px] w-24 md:w-40 lg:w-44 xl:w-60 md:text-[12px] lg:font-bold xl:text-[16px]'></td>
                    <td className='text-center text-[10px] w-24 md:w-40 lg:w-44 xl:w-60 rounded-r-lg md:text-[12px] lg:font-bold xl:text-[16px]'></td>
                </tr>

                {first.content.map((item) => {
                    return(
                        <tr key={item.id} className='w-[80vw] h-14 odd:bg-white even:bg-[#D9D9D9] lg:h-16 xl:h-20'>
                            <td className='text-center text-[10px] w-24 md:w-40 lg:w-44 xl:w-60 rounded-l-lg md:text-[12px] lg:font-bold xl:text-[16px]'>{item.type}</td>
                            <td className='text-center text-[10px] w-24 md:w-40 lg:w-44 xl:w-60 md:text-[12px] lg:font-bold xl:text-[16px]'>{item.rate}</td>
                            <td className='text-center text-[10px] w-24 md:w-40 lg:w-44 xl:w-60 md:text-[12px] lg:font-bold xl:text-[16px]'>{item.clearingFee}</td>
                            <td className='text-center text-[10px] w-24 md:w-40 lg:w-44 xl:w-60 rounded-r-lg md:text-[12px] lg:font-bold xl:text-[16px]'>{item.duration}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>

    </div>
  )
}

export default Rate