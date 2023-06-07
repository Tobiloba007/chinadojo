import React from 'react'

const Meter = () => {
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [result, setResult] = useState('');
  
    const calculateCubicMeter = () => {
      const cubicMeter = length * width * height;
      setResult(cubicMeter);
    };
  return (
    <div className='text-black'>
        <h1>Hello world</h1>
    <h1 className='text-black'>Cubic Meter Calculator</h1>
    <div>
      <label htmlFor="length">Length:</label>
      <input
        type="number"
        id="length"
        value={length}
        onChange={(e) => setLength(parseFloat(e.target.value))}
      />
    </div>
    <div>
      <label htmlFor="width">Width:</label>
      <input
        type="number"
        id="width"
        value={width}
        onChange={(e) => setWidth(parseFloat(e.target.value))}
      />
    </div>
    <div>
      <label htmlFor="height">Height:</label>
      <input
        type="number"
        id="height"
        value={height}
        onChange={(e) => setHeight(parseFloat(e.target.value))}
      />
    </div>
    <button onClick={calculateCubicMeter}>Calculate</button>
    {result && <p>The cubic meter is: {result}</p>}
    <h1 className='text-red-600'>Hello world</h1>
  </div>
  )
}

export default Meter