import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Item = (props) => {
  const navigate = useNavigate()
  return (
    <div >
        <div onClick={()=>navigate(`/product/${props.id}`)}><img onClick={window.scroll(0,0)} src={props.image} alt="" /></div>
        <span className='itemname text-md font-medium flex justify-center'>{props.name}</span>
        <div className='price flex gap-2 items-center '>
        <span className='newprice font-medium  '>{props.newprice}</span>
        <span className='newprice font-medium line-through text-gray-500 '>{props.oldprice}</span>
        </div>


    </div>
  )
}

export default Item