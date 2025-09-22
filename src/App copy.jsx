'use strict'
import React, { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter';

const initCounters = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
]
function App() {
  const [counters, setCounters] = useState(initCounters)
  const hadnleIncrement = (counterId) => {  
    console.log('here click');
    const updatedCounters = counters.map((counter) => {
      if (counter.id === counterId) {         
        return { ...counter, value: counter.value + 1 }
      }
      return counter;
    });
    setCounters(updatedCounters);
  } 

  const handleDecrement = (counterId) => {  
    const updatedCounters = counters.map((counter) => {
      if (counter.id === counterId) {         
        return { ...counter, value: counter.value - 1 }
      }
      return counter;
    });
    setCounters(updatedCounters);
  }         

  return (
    <>
      {
        counters.map((counter) => (
          <Counter
            key={counter.id}
            counterId={counter.id}
            count = {counter.value}
            onIncrement= {hadnleIncrement}
            onDeccrement= {handleDecrement}
          />
        ))
      }
    </>
  )
}

export default App
