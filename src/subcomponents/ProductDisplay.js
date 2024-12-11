import React, { useContext } from 'react'

import staricon from "../assets/star_icon.png"
import stardullicon from "../assets/star_dull_icon.png"
import RelatedProduct from './RelatedProduct'
import { ShopContext } from '../Context/ShopContext'


const ProductDisplay = (props) => {
    const {addToCart}=useContext(ShopContext)
    const {product}=props

  return (
    <>
    <div className='container flex flex-row mt-4 gap-10 justify-evenly overflow-hidden'> 
        <div className='leftcontainer flex flex-col  mt-5 w-2/4'>
            <div className='leftside flex flex-col gap-2 m-2'>
            <span><img  className='h-[50px] w-[50px]' src={product.image} alt="" /></span> 
            <span><img  className='h-[50px] w-[50px]'src={product.image} alt="" /></span> 
            <span><img  className='h-[50px] w-[50px]'src={product.image} alt="" /></span> 
            <span><img  className='h-[50px] w-[50px]'src={product.image} alt="" /></span> 
            <span><img  className='h-[50px] w-[50px]'src={product.image} alt="" /></span> 
            
            </div>
            <div className='rightside absolute right-50 pl-[70px] my-auto flex justify-center items-center '>
                <img className="h-[300px] w-[200px] " src={product.image} alt="" />
            </div>
        </div>
        <div className='righthalf flex flex-col  my-2.5 pl-10 justify-center items-center'>
            <div className='rightcontainer flex flex-col w-full'>
                <div className='title font-bold text-3xl'>
                    {product.name}
                </div>
                <div className='stars  flex flex-row gap-1 size-5 m-1'>
                    <img src={staricon} alt="" />
                    <img src={staricon} alt="" />
                    <img src={staricon} alt="" />
                    <img src={staricon} alt="" />
                    <img src={stardullicon} alt="" />
                    <span>(122)</span>
                </div>
            <div className='flex flex-row gap-3'>
                <span className='line-through text-slate-400'>{product.old_price}</span>
                <span>{product.new_price}</span>
            </div>
            <span>A lightweight, usually knitted,pullover shirt, close-fitting and with a round necklin and short sleeves,worn as an undershirt or outer garment</span>
            <span className='font-bold text-xl m-1'>Select Size</span>
            <div className='sizes flex flex-row gap-3 '>
                <span className='border border-1 p-1 m-1 justify-center items-center hover:cursor-pointer'>S</span>
                <span className='border border-1 p-1 m-1 justify-center items-center hover:cursor-pointer'>M</span>
                <span className='border border-1 p-1 m-1 justify-center items-center hover:cursor-pointer'>L</span>
                <span className='border border-1 p-1 m-1 justify-center items-center hover:cursor-pointer'>XL</span>
                <span className='border border-1 p-1 m-1 justify-center items-center hover:cursor-pointer'>XXL</span>
            </div>
            <button onClick={()=>addToCart(product.id)} className='cartbutton bg-red-700 flex justify-center items-center text-white m-1 w-[200px] hover:bg-red-400 mt-1'>ADD TO CART</button>
            </div>

        </div>
    </div>
    <RelatedProduct  />

        </>
  )
}

export default ProductDisplay