import React from 'react'

function Complain() {
  return (
    <>
    <h2 className='text-center text-cyan-700 text-3xl font-extrabold'>Submit a Complaint</h2>
    <div className='flex justify-center w-4/5  text-clip bg-slate-200 m-auto rounded-lg'>
        <div className='w-2/5'>
            <h3>Resolving your complaints!</h3>
            <p>Leave your complaint here to help us make our services better for you.</p>
        </div>
        <div className='w-3/5'>
            <form action="submit" className='p-5 '>
                <input type="text" placeholder='Name *' required className='p-3 border rounded-lg m-3' />
                <input type="tel" placeholder='Phone Number *' required className='p-3 border rounded-lg m-3'/>
                <input type="email" placeholder='Email *' className='p-3 border rounded-lg m-3' />
                <input type="text" placeholder='Address *' required className='p-3 border rounded-lg m-3'/>
                <textarea name="complain" rows="5" id="complain" placeholder='Message' required className='w-3/5 p-3 border rounded-lg m-5'></textarea>
                <input type="submit" className='text-center '/>
            </form>
        </div>
    </div>
    </>
  )
}

export default Complain