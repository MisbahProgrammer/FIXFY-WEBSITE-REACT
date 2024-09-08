import React from 'react'

function Why() {
  return (
    <div>
        <h2 className='text-center text-3xl font-extrabold text-cyan-600 my-5'>Why You Choose Us?</h2>
        <div className='flex'>
            <div className='w-2/4 p-6'>
                <img src="maintenance1.webp" alt="" />
            </div>
            <div className='w-2/4 p-8'>
                <span className='flex items-center p-3'><i class="fa-solid fa-square-check text-2xl text-cyan-600"></i><p className='text-2xl'>Connects you to Verified and Trained Technicians.</p></span>
                <span className='flex items-center p-3' ><i class="fa-regular fa-clock text-2xl text-cyan-600"></i><p className='text-2xl'>Saves Your Time through an easy and efficient booking process.</p></span>
            </div>
        </div>
    </div>
    
  )
}

export default Why