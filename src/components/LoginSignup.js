import React from 'react'


const LoginSignup = () => {
  return (
    <div className='  bg-pink-300  w-3/5 mx-auto my-4/5' >
        <div className='logincontainer flex flex-col gap-3 w-3/5 h-3/5 mt-20 justify-center items-center mx-auto ' >
            <span className='font-bold text-xl'>Sign Up</span>
            <input className="rounded-xl border-2 border-blue-300 p-2 w-full" type="text" placeholder='Enter Your Name'/>
            <input className="rounded-xl border-2 border-blue-300 p-2 w-full" type="email" placeholder='Enter Your Email Id' />
            <input className="rounded-xl border-2 border-blue-300 p-2 w-full" type="password" placeholder='Enter Your Password' />
            <button className='button p-2 bg-red-600 hover:bg-red-400 text-white w-full'>Continue</button>
            <p>Already have an account?</p>
            <a href="" className='text-red-500 underline'>Login here</a>
            <div className='flex flex-row gap-2 pb-7'>
            <input type="checkbox" /><span>By continuing, i agree to the terms of use & privacy policy.</span>
            </div>
        </div>




    </div>
  )
}

export default LoginSignup