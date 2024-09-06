import React from 'react'
import '../App.css'
function Landing() {
  return (
    <>
    <div className='flex justify-between w-full h-full border-b'>
        <div className='p-2 text-wrap text-center w-2/5'>
            <p className='text-8xl font-extrabold roboto p-2'>Your Home, Our Care</p>
            <p className='text-5xl roboto p-4 my-4'>Expert Maintenance, Peace of Mind</p>
            <p className='text-2xl font-sans text-cyan-600'>Need a quick fix or routine maintenance?</p>
            <button className='text-2xl font-bold border-2 p-3 rounded-lg bg-cyan-600 my-4 text-white hover:bg-white hover:text-black'>Schedule Maintenance</button>
        </div>
        <div className='h-4/5 w-3/5'>
            <video src="video.mp4" className='object-cover' width="100%" height="100%" autoPlay muted loop></video>
        </div>
    </div>
    </>
  )
}

export default Landing