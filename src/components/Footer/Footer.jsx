import React from 'react'

function Footer() {
  return (
    <div className='w-full  bg-cyan-600 flex flex-wrap  md:flex-row md:justify-between p-5 overflow-hidden'>
        <div className='w-[80%] flex flex-wrap mx-auto md:gap-24'>
        <div className='flex flex-col p-5'>
            <h3 className='md:text-2xl font-bold text-white my-5'>Services</h3>
            <ul className='flex flex-row flex-wrap md:flex-col text-white md:text-xl gap-2 '>
                <a href="#"><li className='hover:text-cyan-800'>Plumber</li></a>
                <a href="#"><li className='hover:text-cyan-800'>Electrician</li></a>
                <a href="#"><li className='hover:text-cyan-800'>Carpenter</li></a>
                <a href="#"><li className='hover:text-cyan-800'>Painter</li></a>
                <a href="#"><li className='hover:text-cyan-800'>AC Service</li></a>
                <a href="#"><li className='hover:text-cyan-800'>Geyser Service</li></a>
                <a href="#"><li className='hover:text-cyan-800'>Pest Control</li></a>
                <a href="#"><li className='hover:text-cyan-800'>Handy Man</li></a>
            </ul>
        </div>
        <div className='p-5'>
            <h3 className='md:text-2xl font-bold text-white my-5'>Available In</h3>
            <ul className='flex flex-row md:flex-col text-white text-xl gap-2'>
                <a href=""><li className='hover:text-cyan-800'>Dubai</li></a>
                <a href=""><li className='hover:text-cyan-800'>Sharjah</li></a>
                <a href=""><li className='hover:text-cyan-800'>Abu Dhabi</li></a>
                <a href=""><li className='hover:text-cyan-800'>Ajman</li></a>
            </ul>
        </div>
        <div className='p-5'>
            <h3 className='md:text-2xl font-bold text-white my-5'>Main Menu</h3>
            <ul className='flex flex-col text-white cursor-pointer md:text-xl'>
                <a href=""><li className='hover:text-cyan-800'>Home</li></a>
                <a href=""><li className='hover:text-cyan-800'>About us</li></a>
                <a href=""><li className='hover:text-cyan-800'>Services</li></a>
                <a href=""><li className='hover:text-cyan-800'>Contact us</li></a>
                <a href=""><li className='hover:text-cyan-800'>FAQs</li></a>
                <a href=""><li className='hover:text-cyan-800'>Terms & Conditions</li></a>
                <a href=""><li className='hover:text-cyan-800'>Privacy Policy</li></a>
            </ul>
        </div>
        <div className='p-5'>
            <h3 className='md:text-2xl font-bold text-white my-5'>Connect with us</h3>
            <ul className='flex flex-col text-white gap-2'>
                <li className='flex items-center gap-3'><i class="fa-solid fa-phone md:text-2xl p-1 cursor-pointer"></i><p className='cursor-pointer md:text-xl'><a href="" className='hover:text-cyan-800'>+97123456789</a></p></li>
                <li className='flex items-center gap-3'><i class="fa-solid fa-envelope md:text-2xl p-1 cursor-pointer"></i><p className='cursor-pointer md:text-xl'><a href="" className='hover:text-cyan-800'>contact@fixfy.com</a></p></li>
                <li className='flex items-center gap-3'><i class="fa-brands fa-instagram md:text-2xl p-1 cursor-pointer"></i><p className='cursor-pointer md:text-xl'><a href="" className='hover:text-cyan-800'>Instagram</a></p></li>
                <li className='flex items-center gap-3'><i class="fa-brands fa-square-x-twitter md:text-2xl p-1 cursor-pointer"></i><p className='cursor-pointer md:text-xl'><a href="" className='hover:text-cyan-800'>X-Twitter</a></p></li>
                <li className='flex items-center gap-3'><i class="fa-brands fa-square-facebook md:text-2xl p-1 cursor-pointer"></i><p className='cursor-pointer md:text-xl'><a href="" className='hover:text-cyan-800'>Facebook</a></p></li>
            </ul>
        </div>
        <div className='flex flex-col p-5 '>
            <h3 className='md:text-2xl font-bold text-white my-5'>New Letter</h3>
            <p className='md:text-xl text-white'>Just for New Product Updates</p>
            <input type="email" required className='p-3 rounded-lg mt-2' placeholder='Email'/>
            <input type="Submit" value="Subscribe" className='py-3 px-4 border-white bg-cyan-800 rounded-lg mt-3 cursor-pointer text-white font-bold hover:bg-slate-500'/>
        </div>
        </div>
    </div>
  )
}

export default Footer