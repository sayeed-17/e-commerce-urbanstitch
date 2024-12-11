import React, { useContext } from 'react'
import Footer from '../subcomponents/Footer'
import { ShopContext } from '../Context/ShopContext'
import downarrow from "../assets/dropdown_icon.png"
import Item from '../subcomponents/Item'
import {  useNavigate } from 'react-router-dom'


const ShopCategory = (props) => {
    const {all_products}=useContext(ShopContext)
    const navigate = useNavigate()
  return (
    <div>
        <div className='banner-category'>
            <img src={props.banner} alt="" />
            <div className='flex flex-row justify-between'>
                <div>
            <span className='font-semibold text-md'>Showing 1-12</span>
            <span >out of 36 products</span>
            </div>
            <div className=''>
            <button>Sort by </button>
            <img src={downarrow} alt="" />
            </div>
            </div>
            <div className='products grid grid-cols-4 gap-3 justify-center items-center'>
            {
            all_products.map((item,i) =>
            {       if(props.category===item.category){
                    return (
                    <div onClick={() => navigate(`/product/${item.id}`)}>
                    <Item  image={item.image} name={item.name} newprice={item.new_price} oldprice={item.old_price}/>
                    </div>);
                    }else {
                        return null
                    }
})
        }
        </div>

        </div>

        <Footer/>
    </div>
  )
}

export default ShopCategory