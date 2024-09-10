import React from 'react'

function Complain() {
  return (
    <>
    <h2 className='text-center text-cyan-700 text-3xl font-extrabold m-4'>Submit a Complaint</h2>
    <div className='flex justify-center w-4/5 h-[60vh] text-clip bg-slate-200 m-auto rounded-lg mt-4'>
        <div className='w-2/5 flex flex-col flex-wrap items-center justify-around'>
            <h3 className='text-3xl font-extrabold text-cyan-700 p-3'>Resolving your complaints!</h3>
            <p className='text-xl font-bold text-slate-400 p-5'>Leave your complaint here to help us make our services better for you.</p>
        </div>
        <div className='w-2/4 h-[80%]'>
            <form action="submit" className='p-5 bg-zinc-300 m-6 relative flex flex-wrap justify-center items-center rounded-lg'>
                <input type="text" placeholder='Name *' required className='p-3 border rounded-lg m-3' />
                <input type="tel" placeholder='Phone Number *' required className='p-3 border rounded-lg m-3'/>
                <input type="email" placeholder='Email *' className='p-3 border rounded-lg m-3' />
                <input type="text" placeholder='Address *' required className='p-3 border rounded-lg m-3'/>
                <textarea name="complain" rows="5" id="complain" placeholder='Message' required className='w-[86%] ml-[1%] p-3 border rounded-lg  '></textarea>
                <input type="submit" className=' border-black bg-cyan-500 text-white font-bold rounded-lg py-3 px-4 m-4 h-11 ml-[1%] cursor-pointer '/>
            </form>
        </div>
    </div>
    </>
  )
}

export default Complain