'use strict'
import React, { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter';
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './features/counters/countersSlice'
import Navbar from './components/Navbar'
import { useTheme } from "./context/ThemeContext";


function App() {  
    // const { theme, setTheme } = useTheme();
  const counters = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const hadnleIncrement = (counterId) => {        
    dispatch(increment(counterId));
  }

  const handleDecrement = (counterId) => {    
    dispatch(decrement(counterId));
  }
  
  // console.log(theme);

  return (
    <>
    <Navbar />
      {
        counters.map((counter) => (
          <Counter
            key={counter.id}
            counterId={counter.id}
            count={counter.value}
            onIncrement={hadnleIncrement}
            onDeccrement={handleDecrement}
          />
        ))
      }
    </>
  )
}

export default App
