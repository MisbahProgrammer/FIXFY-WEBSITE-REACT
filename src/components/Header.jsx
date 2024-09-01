import React from 'react'
import Buttons from './Button/buttons'
function header() {
  return (
    <>
    <div className='flex items-center justify-around border-b'>
      <div className='w-1/6 flex justify-center gap-6 p-1  '>
        <a className='cursor-pointer w-24  p-2' href="#">Why Fixfy</a>
        <a className=' w-24 p-2' href="#">Contact us</a>
      </div>
      <div>
        <img src="fixfy1.png" alt="" width="100px" height="100px" className='cursor-pointer'/>
      </div>
      <div>
        <Buttons/>
      </div>
    </div>
    <div className='flex items-center justify-center p-8 border-b gap-2'>
        <select name="Home Maintenance" id="">
            <option value="Home Maintenance">Home Maintenance</option>
            <option value="">Plumbing</option>
            <option value="">Electrician</option>
            <option value="">Painter</option>
        </select>
        <select name="Building Maintenance" id="">
            <option value="">Remodling</option>
            <option value="">Roofing</option>
            <option value="">Construction</option>
        </select>
        <select name="Emergency Service" id="">
            <option value="">Emergency Service</option>
            <option value="">24/7 Plumbing</option>
            <option value="">Electrical Emergencies</option>
            <option value="">Lockout Services</option>
        </select>
    </div>
    </>
  )
}

export default header