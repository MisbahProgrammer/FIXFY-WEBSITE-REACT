import React from 'react'
import Buttons from './Button/buttons'
function header() {
  return (
    <>
    <div className="flex items-center justify-between w-full border-b py-2 md:justify-around">
  <div className="hidden md:flex items-center md:w-1/6 md:gap-6 md:p-1">
    <a className="cursor-pointer w-24 p-2" href="#">Why Fixfy</a>
    <a className="cursor-pointer w-24 p-2" href="#">Contact us</a>
  </div>
  <div>
    <img src="fixfy-logo.png" alt="" width="50px" height="50px" className="cursor-pointer" />
  </div>
  <div className="hidden md:flex">
    <Buttons />
  </div>
  <div className="md:hidden text-right">
    <i class="fa-solid fa-bars text-3xl cursor-pointer text-cyan-600"></i>
  </div>
</div>
    {/* -----------lower header----------- */}
    <div className='hidden md:flex md:items-center md:justify-center md:py-4 md:px-4 md:border-b md:gap-2'>
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