import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('Andre');
  const [isError, setIsError] = useState(false);

  // return the first true value
  const firstValue = text || 'hello world';

  //if true return second value
  const secondValue = text && 'hello world';

  return (
    <>
      <h1>{firstValue}</h1>
      <h1>Value: {secondValue}</h1>
      {/* {if(){console.log('hello world')}} */}

      <h1>{text || 'John Doe'}</h1>
      {text && <h1>Hello World</h1>}
      {!text && <h1>Hello World</h1>}

      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>there is an error...</p>
      ) : (
        <div>
          <h2>there is no error</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
