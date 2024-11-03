import React from 'react'
import Buttons from './Button/buttons'
function header() {
  return (
    <>
    <div className="flex items-center justify-between w-full border-b py-2 md:justify-around">
  <div className="hidden md:flex items-center md:w-[25%] md:gap-6 md:p-1 text-xl">
    <a className="cursor-pointer w-32 p-2" href="#">Why Fixfy</a>
    <a className="cursor-pointer w-32 p-2" href="#">Contact us</a>
  </div>
  <div className='p-3'> 
    <img src="fixfy-logo.png" alt="" width="70px" height="70px" className="cursor-pointer" />
  </div>
  <div className="hidden md:flex">
    <Buttons />
  </div>
  <div className="md:hidden text-right p-3">
    <i class="fa-solid fa-bars text-3xl cursor-pointer text-cyan-600"></i>
  </div>
</div>
    {/* -----------lower header----------- */}
    <div className='hidden md:flex md:items-center md:justify-center md:py-4 md:px-4 md:border-b md:gap-2'>
        <select name="Home Maintenance" id="">
            <option value="Home Maintenance">Home Maintenance</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Electrician">Electrician</option>
            <option value="Painter">Painter</option>
        </select>
        <select name="Building Maintenance" id="">
            <option value="Remodling">Remodling</option>
            <option value="Roofing">Roofing</option>
            <option value="Construction">Construction</option>
        </select>
        <select name="Emergency Service" id="">
            <option value="Emergency Service">Emergency Service</option>
            <option value="Support">24/7 Plumbing</option>
            <option value="Electrical">Electrical Emergencies</option>
            <option value="Lockout">Lockout Services</option>
        </select>
        
    </div>
   
        
    </>
  )
}

export default header