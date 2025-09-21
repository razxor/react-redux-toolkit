'use strict'
import React from 'react'
import Button from './Button'

export default function Counter({ counterId, count, onIncrement, onDeccrement }) {
    console.log(count);
    return (
        <>
            <div className='mt-10 shadow-lg p-10'>
                <p>The text is : {count}</p>
                <div className='flex justify-center items-center'>
                    <Button handler={() => onIncrement(counterId)}>Increment</Button>
                    <Button handler={() => onDeccrement(counterId)} type='red'>Decrement</Button>
                </div>
            </div>
        </>
    )
}
