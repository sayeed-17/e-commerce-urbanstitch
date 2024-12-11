import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import shoppingBagLogo from "../assets/shoppingnavbar.jpg"
import { Link } from 'react-router-dom'
import carticon from "../assets/cart_icon.png"

import Cart from './Cart'
import { ShopContext } from '../Context/ShopContext'
const Navbar = () => {
    const[menu,setMenu]=useState("shop")
     const navigate = useNavigate();
     const {getTotalCartItems}=useContext(ShopContext)
  return (
    <nav className='bg-violet-400 p-2 h-[60px] m-0 flex flex-row  items-center justify-evenly fixed top-0 left-0 w-full z-10' >
        <img className='w-10 h-10' src={shoppingBagLogo} alt="logo" />
        <span className=' font-sans font-bold text-white italic text-lg ' >Urbanstitch</span>
        <li className='list-none cursor-pointer  text-lg font-bold text-white' onClick={()=>{setMenu("shop")}}><Link to="/">Shop{menu==="shop"?<hr/>:<></>}</Link></li>
        <li className='list-none cursor-pointer  text-lg font-bold text-white'onClick={()=>{setMenu("men")}}><Link to="/men">Men {menu==="men"?<hr/>:<></>}</Link></li>
        <li className='list-none cursor-pointer  text-lg font-bold text-white'onClick={()=>{setMenu("women")}}><Link to="/women">Women {menu==="women"?<hr/>:<></>}</Link></li>
        <li className='list-none cursor-pointer  text-lg font-bold text-white'onClick={()=>{setMenu("kids")}}><Link to="/kids">Kids {menu==="kids"?<hr/>:<></>}</Link></li>
        <button className='bg-blue-400 rounded-md  hover:bg-blue-600 p-1' onClick={()=>{setMenu("login")}}><Link to="/login">Log In {menu==="login"?<hr/>:<></>}</Link></button>
       <div className='relative '> <img onClick={()=>navigate("/cart")}className="w-9 h-9 hover:cursor-pointer" src={carticon} alt="carticon" />
        <div className='  nav-cart-count absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center'>{getTotalCartItems()}</div></div>

    </nav>
  )
}

export default Navbar

