import React from 'react'
import offersimg from "../assets/exclusive_image.png"

const Offers = () => {
  return (
    <div className='offers-container flex   h-[500px] w-3/5 mx-auto mt-8 bg-zinc-300 '>
        <div className='left-offer-container flex flex-col justify-center items-center gap-4 mx-auto'>
            <span className='text-5xl font-bold '>Exclusive</span>
            <span className='text-5xl font-bold'>Offers For You</span>
            <span className='text-md font-sans'>ONLY ON BEST SELLER PRODUCTS</span>
            <button className='bg-red-700 text-white p-2 rounded-lg '>Check Now</button>




        </div>
        <div className='right'>

        <img  className="w-[250px] h-[300px] flex  items-center justify-center mt-16 " src={offersimg} alt="offers img" />




        </div>
    </div>
  )
}

export default Offers