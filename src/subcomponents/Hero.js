import React from 'react'
import heroimage from "../assets/hero_image.png"
import handimage from "../assets/hand_icon.png"
import arrow from "../assets/arrow.png"

const Hero = () => {
  return (
    <div className='hero-section bg-pink-200 w-100 h-100 flex items-center pt-12'>
        <div className='left-hero flex flex-col ml-10 gap-5'>
            <span className=' font-bold text-xl '>NEW ARRIVALS ONLY</span>
            <div className='flex flex-row '>
            <span className='text-5xl '>new</span>
            <img className='hand-icon size-20' src={handimage} alt="hand image" />
            </div>
            <span className='text-5xl '>for everyone</span>
            <span className='text-5xl '>collections</span>
            <button className=' collection-button flex items-center justify-center text-md text-black bg-red-400 rounded-md p-2 gap-2 hover:bg-red-300'>Latest collection <img className='w-4 h-4' src={arrow} alt="arrow" /> </button>
      
        </div>
        <div className='right-hero flex flex-col justify-center items-center mx-auto'>
        <img className="hero-img w-[550px] h-[550px] ml-20" src={heroimage} alt="" />




        </div>





    </div>
  )
}

export default Hero