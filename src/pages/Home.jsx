'use strict'
import React, { use, useState } from 'react'
import reactLogo from '../assets/react.svg'
// import '../App.css'
import Counter from '../components/Counter';
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../features/counters/countersSlice'
import Navbar from '../components/Navbar'
import { useTheme } from "../context/ThemeContext";
import { setName } from "../features/user/userSlice";
import Button from '../components/Button';

function Home() {
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

  const userData = useSelector(state => state.user);
  const handleClick = (name) => {
    dispatch(setName(name));
  }
  console.log('USER DATA IN NAVBAR', userData);

  return (
    <>
    
      <div className="w-3/5 mx-auto">
        <div className='my-10 flex justify-between items-center'>
          <h1 className="text-2xl font-bold">Hi, This is {userData.name}</h1>
          <Button type="danger" handler={() => handleClick('John')}>
            Update my name
          </Button>
        </div>
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
      </div>
    </>
  )
}

export default Home
