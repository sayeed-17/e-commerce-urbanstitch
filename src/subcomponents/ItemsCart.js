import React, { useContext } from 'react'
import cartcrossicon from "../assets/cart_cross_icon.png"

import { ShopContext } from '../Context/ShopContext'

const ItemsCart = () => {
    const{all_products,cartItems,RemoveFromCart}=useContext(ShopContext)
    const shippingFee=0;
    const subtotal=all_products.reduce((sum,product)=>{
        const quantity= cartItems[product.id]||0
        return sum + product.new_price *quantity
},0)
const total=subtotal+shippingFee;
  return (
    <>
    <div className='headings flex flex-row justify-evenly items-center pl-2'>
        <span className='font-semibold m-2 flex justify-center items-center'>Products</span>
        <span className='font-semibold m-2 flex justify-center items-center'>Title</span>
        <span className='font-semibold m-2 flex justify-center items-center'>Price</span>
        <span className='font-semibold m-2 flex justify-center items-center'>Quantity</span>
        <span className='font-semibold m-2 flex justify-center items-center'>Total</span>
        <span className='font-semibold m-2 flex justify-center items-center'>Remove</span>
    </div>
    <hr className='m-3 h-0.5 bg-black'/>
    { 
    all_products.map(e=>{

        if(cartItems[e.id]>0){
            return ( 

                <div className='cart-items-format flex flex-row justify-evenly items-center w-full' key={e.id}>
                    
                    <img className="image   w-10 h-10" src={e.image} alt="" />
                    <span className='name-of-the-product w-10 '>{e.name}</span>
                    <span className=''>{e.new_price}</span>
                    <button className='border border-1 bg-slate-300 m-2 p-2'>{cartItems[e.id]}</button>
                    <span className=''>{e.new_price*cartItems[e.id]}</span>
                    <img className='removeicon hover:cursor-pointer h-4 w-4 font-bold flex  border border-1 border-black m-1 bg-red-400  ' onClick={()=>RemoveFromCart(e.id)} src={cartcrossicon} alt="removeicon" />
                </div>
                )
            
        }
        return null;
    }
    )
    }
    <div className='flex flex-row '>
    <div className='totals flex flex-col w-2/3 m-5'>
        <div className='font-bold  text-3xl'>
            Cart Totals 
        </div>
        <div className='w-1/2 flex justify-between'>
        <span className='font-semibold m-1'>SubTotal</span>
        <p>{subtotal}</p></div>
        <hr className=' h-0.5 bg-black w-1/2'/>
        <div className='w-1/2 flex justify-between'>
        <span className='font-semibold m-1'>Shipping Fee</span>
        <p>{shippingFee}</p></div>
        <hr className=' h-0.5 bg-black w-1/2'/>
        <div className='w-1/2 flex justify-between'>
        <span className='font-semibold m-1'>Total</span>
        <p>{total}</p></div>
        <hr className=' h-0.5 bg-black w-1/2'/>

        <button className='w-[250px] bg-red-700 text-white mt-2 hover:bg-red-100 hover:cursor-pointer flex justify-center'>Proceed To Checkout</button>
    </div>
        <div className='flex w-1/2 flex-col justify-center '>
            <span>if you have a promo code,Enter it here</span>
            <div className='flex justify-between '>
            <input className='flex justify-between bg-slate-300 border border-1 border-black w-full '  type="text" placeholder='Promo Code' />
            <button className='bg-black text-white'>submit</button></div>
        </div>
        </div>
    </>
  )
}

export default ItemsCart