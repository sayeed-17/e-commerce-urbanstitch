import React from 'react'

const Newsletter = () => {
  return (
    <div className='border border-1 border-grey-200 rounded-md mt-5 h-[300px] flex flex-col mx-auto justify-center items-center w-4/5  bg-pink-100  gap-2'>
        <span className='newsletter font-bold  text-5xl my-5'>Get Exclusive Offers On Yor Email</span>
        <p className='font-semibold  my-5'>Subscribe to our newsletter and stay updated</p>
        <div className='emaildiv flex flex-row '>
        <input className="rounded-xl pr-9 p-2 bg-slate-300 w-full" type="email" name="email" placeholder='Your Email id' />
        <button className='button bg-black text-white flex items-center justify-end rounded-xl p-2  hover:bg-slate-700 '>subscribe</button>

        </div>

    </div>
  )
}

export default Newsletter