import React from 'react'

function Footer() {
  return (
    <div className='w-full bg-cyan-600 flex justify-between p-5'>
        <div className='flex flex-col p-5'>
            <h3 className='text-2xl font-bold text-white'>Services</h3>
            <ul className='flex flex-col text-white text-xl gap-2 '>
                <li>Plumber</li>
                <li>Electrician</li>
                <li>Carpenter</li>
                <li>Painter</li>
                <li>AC Service</li>
                <li>Geyser Service</li>
                <li>Pest Control</li>
                <li>Handy Man</li>
            </ul>
        </div>
        <div className='p-5'>
            <h3 className='text-2xl font-bold text-white'>Available In</h3>
            <ul className='flex flex-col text-white text-xl'>
                <li>Dubai</li>
                <li>Sharjah</li>
                <li>Abu Dhabi</li>
                <li>Ajman</li>
            </ul>
        </div>
        <div className='p-5'>
            <h3 className='text-2xl font-bold text-white'>Main Menu</h3>
            <ul className='flex flex-col text-white cursor-pointer text-xl'>
                <li>Home</li>
                <li>About us</li>
                <li>Services</li>
                <li>Contact us</li>
                <li>FAQs</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className='p-5'>
            <h3 className='text-2xl font-bold text-white mb-2'>Connect with us</h3>
            <ul className='flex flex-col text-white gap-2'>
                <li className='flex items-center gap-3'><i class="fa-solid fa-phone text-2xl p-1 cursor-pointer"></i><p className='cursor-pointer text-xl'>+97123456789</p></li>
                <li className='flex items-center gap-3'><i class="fa-solid fa-envelope text-2xl p-1 cursor-pointer"></i><p className='cursor-pointer text-xl'>contact@fixfy.com</p></li>
                <li className='flex items-center gap-3'><i class="fa-brands fa-instagram text-2xl p-1 cursor-pointer"></i><p className='cursor-pointer text-xl'>Instagram</p></li>
                <li className='flex items-center gap-3'><i class="fa-brands fa-square-x-twitter text-2xl p-1 cursor-pointer"></i><p className='cursor-pointer text-xl'>X-Twitter</p></li>
                <li className='flex items-center gap-3'><i class="fa-brands fa-square-facebook text-2xl p-1 cursor-pointer"></i><p className='cursor-pointer text-xl'>Facebook</p></li>
            </ul>
        </div>
        <div className='flex flex-col p-5'>
            <h3 className='text-2xl font-bold text-white '>New Letter</h3>
            <p className='text-xl text-white'>Just for New Product Updates</p>
            <input type="email" required className='p-3 rounded-lg mt-2' placeholder='Email'/>
            <input type="Submit" value="Subscribe" className='py-3 px-4 border-white bg-slate-400 rounded-lg mt-3 cursor-pointer text-white font-bold'/>
        </div>
    </div>
  )
}

export default Footer