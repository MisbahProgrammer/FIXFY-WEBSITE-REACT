import React from 'react'

function Why() {
  return (
    <div className='overflow-hidden  '>
        <h2 className='text-center text-3xl font-extrabold text-cyan-600 my-5'>Why You Choose Us?</h2>
        <div className='flex w-full md:justify-center flex-col md:flex-row'>
            <div className='md:w-2/4 md:p-6 text-center'>
                <img src="maintenance1.webp" alt="" className='rounded-lg'/>
            </div>
            <div className='md:w-2/5 md:p-8 flex flex-col md:inline'>
                <span className='flex items-center p-2 gap-4 mb-1'><i class="fa-solid fa-square-check text-4xl text-cyan-600"></i><p className='text-2xl'>Our team of highly qualified technicians delivers exceptional service and results.</p></span>
                <span className='flex items-center p-2 gap-4 mb-1' ><i class="fa-regular fa-clock text-4xl text-cyan-600"></i><p className='text-2xl'>We understand your time is valuable. Book your appointment today and enjoy fast, reliable service.</p></span>
                <span className='flex items-center p-2 gap-4 mb-1'><i class="fa-solid fa-headset text-4xl text-cyan-600"></i><p className='text-2xl'>We're always here to help. Contact our friendly customer support team for assistance anytime.</p></span>
                <span className='flex items-center p-2 gap-4 mb-1'><i class="fa-solid fa-hand-holding-dollar text-cyan-600 text-4xl"></i><p className='text-2xl'>We offer competitive rates and upfront pricing for all our services.</p></span>
                <span className='flex items-center p-2 gap-4 mb-1'><i class="fa-regular fa-handshake text-cyan-600 text-4xl"></i><p className='text-2xl'>We're committed to exceeding your expectations. If you're not completely satisfied, we'll make it right</p></span>
                <span className='flex items-center p-2 gap-4 mb-1'><i class="fa-solid fa-award text-cyan-600 text-4xl"></i><p className='text-2xl'>Enjoy peace of mind with our warranties on eligible repairs and installations.</p></span>
                <div className='text-center my-3'>
              <button className='text-2xl border rounded-lg py-2 px-4 bg-cyan-600 text-white roboto'>Get a Price Estimate</button>
            </div>
            </div>
            
        </div>
    </div>
    
  )
}

export default Why