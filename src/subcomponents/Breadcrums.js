import React from 'react'
import breadcrumarrowicon from "../assets/breadcrum_arrow.png"

const Breadcrums = (props) => {
    const {product}=props;
  return (
    <div className='flex flex-row ' >
        HOME<img src={breadcrumarrowicon} alt="" />SHOP<img src={breadcrumarrowicon} alt="" />{product.category}<img src={breadcrumarrowicon} alt="" />{product.name}




    </div>
  )
}

export default Breadcrums