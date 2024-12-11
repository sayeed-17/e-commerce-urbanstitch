import React from 'react'
import logo from "../assets/logo.png"
import whatsapplogo from "../assets/whatsapp_icon.png"
import pintrestlogo from "../assets/pintester_icon.png"
import instalogo from "../assets/instagram_icon.png"
const Footer = () => {
  return (
    <div className='footer-sec flex flex-col gap-3 justify-center items-center'>
        <div className='flex flex-row justify-center items-center gap-5'>
        <img src={logo} alt="logo" />
        <span><h1 className='name font-bold text-4xl'>URBANSTITCH</h1></span>
        </div>
        <div className='list-none flex flex-row gap-10 font-semibold '>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
        </div>
        <div className='logos flex flex-row gap-5 '>
        <img className=" bg-slate-200 p-1 rounded-md hover:cursor-pointer" src={whatsapplogo} alt="wp logo" />
        <img className=" bg-slate-200 p-1 rounded-md hover:cursor-pointer" src={pintrestlogo} alt="pin logo" />
        <img className=" bg-slate-200 p-1 rounded-md hover:cursor-pointer" src={instalogo} alt="ig logo" />
        </div>
        <hr className="w-full border-t-2 border-gray-500 my-2" />
    <span className='my-2 mb-4'>Copyright @ 2024 -All Rights Reserved.</span>






    </div>
  )
}

export default Footer