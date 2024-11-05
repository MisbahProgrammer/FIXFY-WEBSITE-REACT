import React from 'react'
import '../../App.css'
function Landing() {
  return (
    <>
    <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full h-full border-b mx-auto">
  {/* Text Section */}
  <div className="p-4 text-center w-full md:w-2/5">
    <p className="text-4xl sm:text-5xl md:text-8xl font-extrabold roboto my-4">
      Your Home, Our Care
    </p>
    <p className="text-2xl sm:text-3xl md:text-5xl roboto my-4">
      Expert Maintenance, Peace of Mind
    </p>
    <p className="text-xl md:text-2xl text-cyan-600 my-2 cursor-pointer">
      Need a quick fix or routine maintenance?
    </p>
    <button className="text-lg md:text-2xl font-bold border-2 p-3 rounded-lg bg-cyan-600 text-white hover:bg-white hover:text-black my-4">
      Schedule Maintenance
    </button>
  </div>

  {/* Video Section */}
  <div className="w-full md:w-3/5">
    <video
      src="video.mp4"
      className="object-cover w-full h-auto"
      autoPlay
      muted
      loop
    ></video>
  </div>
</div>


    </>
  )
}

export default Landing