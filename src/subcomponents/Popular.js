import React from 'react'
import datalist from "../assets/data.js"
import Item from './Item'

const Popular = () => {
  return (
    <>
        <h2 className='flex justify-center font-bold text-3xl'>POPULAR IN WOMEN</h2>
        <hr/>
    <div className='popular grid grid-cols-4 mt-2 gap-2'>
        {datalist.map((items)=>
         <Item key={items.id} image={items.image} name={items.name}  newprice={items.new_price} oldprice={items.old_price} />
        )
        }




    </div>
    </>
  )
}

export default Popular