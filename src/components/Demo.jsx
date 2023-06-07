import React from 'react'
import { useState } from 'react';

const Demo = () => {
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [result, setResult] = useState('');
  
    const calculateCubicMeter = () => {
      const calculate = length * width * height / 1000000;
      const cubicMeter =  (Math.ceil(calculate * 10) / 10).toFixed(1)
      const cubicFeet = cubicMeter * 35.3147 
      setResult(cubicFeet);
    };
  return (
    <div className='px-5 mt-8'>
    <h1 className='text-black'>Cubic Meter Calculator</h1>
    <div>
      <label className='mr-2'
       htmlFor="length">Length:</label>
      <input
        className='border-2 border-red-400 rounded-md my-2'
        type="number"
        id="length"
        value={length}
        onChange={(e) => setLength(parseFloat(e.target.value))}
      />
    </div>
    <div>
      <label className='mr-2' htmlFor="width">Width:</label>
      <input
        className='border-2 border-red-400 rounded-md my-2 ml-1'
        type="number"
        id="width"
        value={width}
        onChange={(e) => setWidth(parseFloat(e.target.value))}
      />
    </div>
    <div>
      <label className='mr-2' htmlFor="height">Height:</label>
      <input
        className='border-2 border-red-400 rounded-md my-2'
        type="number"
        id="height"
        value={height}
        onChange={(e) => setHeight(parseFloat(e.target.value))}
      />
    </div>
    <div className='flex justify-betweeen items-center w-96'>
      <button className='text-white bg-[#4a795ddd] rounded-md px-5 py-1 mt-2'
      onClick={calculateCubicMeter}>Calculate</button>
      {result && <p className='ml-2'>{result}</p>}
    </div>
    </div>
  )
}

export default Demo