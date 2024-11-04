import React from 'react'

function Complain() {
  return (
    <>
    <h2 className='text-center text-cyan-700 text-3xl font-extrabold m-4'>Submit a Complaint</h2>
    <div className='flex flex-col md:flex-row md:justify-center w-[87%] md:h-[60vh] text-clip bg-slate-200 m-auto rounded-lg md:mt-4 md:mb-5 overflow-hidden'>
        <div className='md:w-2/5 flex md:flex-col flex-wrap items-center md:justify-around'>
            <h3 className='md:text-3xl font-extrabold text-cyan-700 md:p-3 p-2'>Resolving your complaints!</h3>
            <p className='md:text-xl font-bold text-slate-400 md:p-5 p-2'>Leave your complaint here to help us make our services better for you.</p>
        </div>
        <div className='md:w-2/4 h-fit md:h-[100%]'>
            <form action="submit" className='p-5 h-[80%] bg-zinc-300 m-6 relative flex flex-wrap justify-center items-center rounded-lg'>
                <input type="text" placeholder='Name *' required className='md:p-3 p-2 border rounded-lg m-3' />
                <input type="tel" placeholder='Phone Number *' required className='md:p-3 p-2 border rounded-lg m-3'/>
                <input type="email" placeholder='Email *' className='md:p-3 p-2 border rounded-lg m-3' />
                <input type="text" placeholder='Address *' required className='md:p-3 p-2 border rounded-lg m-3'/>
                <textarea name="complain" rows="5" id="complain" placeholder='Message' required className='md:w-[80%] md:ml-[1%] md:p-3 border rounded-lg  '></textarea>
                <input type="submit" className=' border-black bg-cyan-500 text-white font-bold rounded-lg md:py-3 p-2 md:px-4 md:m-4 md:h-11 md:ml-[1%] cursor-pointer '/>
            </form>
        </div>
    </div>
    </>
  )
}

export default Complain