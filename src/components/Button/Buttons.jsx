import React from 'react'
import Getquote from '../GetQuote/Getquote'

function buttons() {
  return (
    <>
    <button className='py-3 px-5 border-2 mx-3 rounded-xl hover:bg-cyan-600 hover:text-white font-bold font-sans'>Customer HUB</button>
    <button className='py-3 px-5 border-2 font-sans bg-cyan-600 text-white rounded-xl hover:bg-slate-200 hover:text-gray-600 font-bold'><a href="@">Get Quotation</a></button>
    </>
  )
}

export default buttons