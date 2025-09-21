'use strict'
import React, { Children } from 'react'

export default function Button({handler, children, type = 'blue'}) {     
    return (
        <>
            <div className='flex justify-center items-center pt-3'>
                <button className={`${type=='blue' ? 'bg-blue-300' : 'bg-red-500'} text-white px-4 py-2 rounded mx-4`} onClick={handler}>{children}</button>                
            </div>
        </>
    )
}
