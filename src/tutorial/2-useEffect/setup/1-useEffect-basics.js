import React, { useState, useEffect } from 'react';
// by default useEffect runs after every re-render
// cleanup function
// second parameter
/*
  think:
    * data fetching
    * listening for events
    * signing up for subscriptions  
*/
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('call use effect');
    document.title = `New Messages(${value})`;
  });

  console.log('render component');
  return (
    <>
      <h2 h2>{value}</h2>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click me
      </button>
    </>
  );
};

export default UseEffectBasics;
