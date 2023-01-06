import React, { useState, useEffect } from 'react';
// by default useEffect runs after every re-render
// cleanup function
// second parameter
// can have as many use effects as you want
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
    // can not call hooks conditionally
    // so you put if inside of the callback function:
    if (value > 1) {
      document.title = `New Messages(${value})`;
    }
  /*
    second parameter
    if left blank: []
    only runs on initial render

    if there is a value than changing the value will 
    trigger useEffect
  */
  }, [value]);
  
  useEffect(() => {
    console.log('Second Effect');
  }, [])

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
