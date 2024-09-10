import React from 'react'

function Copyright() {
  return (
    <div className='flex justify-around p-2'>
        <p className='flex items-center justify-center text-xl'>&copy; Copyright 2022 Fixfy(pvt) Ltd.</p>
        <img src="fixfy-logo.png" alt="" width="40px" className='cursor-pointer' />
    </div>
  )
}

export default Copyright