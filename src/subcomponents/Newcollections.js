import React from 'react'
import newcollection from "../assets/new_collections.js"
import Item from './Item'

const Newcollections = () => {
  return (
    <div className='newcontainer mt-5 '>
        <h2 className='newcollections flex items-center justify-center font-semibold text-3xl '>NEW COLLECTIONS</h2>
        <hr/>
        <div className='grid grid-cols-4  gap-3 mt-1'>
            {
                newcollection.map(items=>
                (
                    <Item key={items.id} image={items.image} name={items.name} newprice={items.new_price} oldprice={items.old_price} />
                )
                )
                
            }
        </div>



    </div>
  )
}

export default Newcollections