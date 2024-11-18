import React from 'react'

function Copyright() {
  return (
    <div className='flex justify-around p-2'>
      <img src="fixfy-logo.png" alt="" width="60px" className='cursor-pointer' />
        <p className='flex items-center justify-center md:text-xl'>&copy; Copyright 2022 Fixfy(pvt) Ltd.</p>
        <p className='flex items-center justify-center md:text-xl'>Developed by<span className='text-cyan-800 p-3 '><a href="#" className='hover:text-cyan-500'>Misbah Ur Rehman</a></span></p>
        
    </div>
  )
}

export default Copyright