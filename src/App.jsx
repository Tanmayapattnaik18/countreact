import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {

  const [count1, setCount1] = useState(0);

  useEffect(() => {
    console.log(count1);
  }, [count1]);

  const handleClick1 = () => {
    setCount1(count1 + 1);
  };
  const [count2, setCount2] = useState(0);

  const handleClick2 = () => {
    setCount2(prevCount => prevCount + 1);
    setCount2(prevCount => prevCount + 1);
    setCount2(prevCount => prevCount + 1);
    console.log(count2); 
  };

  return (
    <>
      {}
      <div>
        <p>Button 1 is clicked {count1} times</p>
        <button onClick={handleClick1}>Click Me for Code 1</button>
      </div>

      <div>
        <p>Button 2 is clicked {count2} times</p>
        <button onClick={handleClick2}>Click Me for Code 2</button>
      </div>
    </>
  );
}

export default App;
