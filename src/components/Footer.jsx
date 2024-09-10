import React from 'react'

function Footer() {
  return (
    <div className='w-full bg-cyan-800 flex justify-between'>
        <div className='flex flex-col p-5'>
            <h3 className='text-2xl font-bold'>Services</h3>
            <ul className='flex flex-col'>
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
            <h3 className='text-2xl font-bold'>Available In</h3>
            <ul className='flex flex-col'>
                <li>Dubai</li>
                <li>Sharjah</li>
                <li>Abu Dhabi</li>
                <li>Ajman</li>
            </ul>
        </div>
        <div className='p-5'>
            <h3 className='text-2xl font-bold'>Main Menu</h3>
            <ul className='flex flex-col'>
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
            <h3 className='text-2xl font-bold'>Connect with us</h3>
            <ul className='flex flex-col'>
                <li className='flex items-center'><i class="fa-solid fa-phone"></i><p>+97123456789</p></li>
                <li className='flex items-center'><i class="fa-solid fa-envelope"></i><p>contact@fixfy.com</p></li>
                <li className='flex items-center'><i class="fa-solid fa-instagram"></i><p>Instagram</p></li>
                <li className='flex items-center'><i class="fa-brands fa-square-x-twitter"></i><p>X-Twitter</p></li>
                <li className='flex items-center'><i class="fa-brands fa-square-facebook"></i><p>Facebook</p></li>
            </ul>
        </div>
        <div className='flex flex-col p-5'>
            <h3 className='text-2xl font-bold '>New Letter</h3>
            <p className='text-xl'>Just for New Product Updates</p>
            <input type="email" required className='p-3 rounded-lg' placeholder='Email'/>
            <input type="Submit" value="Subscribe" className='py-3 px-4 border-cyan-400'/>
        </div>
    </div>
  )
}

export default Footer