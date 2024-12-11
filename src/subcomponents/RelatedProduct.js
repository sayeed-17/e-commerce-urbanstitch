import React from 'react'
import data_product from '../assets/data'
import Item from './Item'
import { useNavigate } from 'react-router-dom'


const RelatedProduct = ({category})=> {
    const navigate = useNavigate();

    return(
        <div>
            <div className='font-bold text-xl flex justify-center'>
                Related Products
            </div>
            <hr/>
            <div className='flex flex-row gap-3'>
                {
                    data_product
                    .filter(item => item.category === category)
                    .map((item)=>{
                        
                            return(
                                <div className="cursor-pointer" key={item.id} onClick={()=>navigate(`/product/${item.id}`)}>
                                    <Item key={item.id} image={item.image} name={item.name} oldprice={item.old_price} newprice={item.new_price} category={item.category} />
                                </div>
                            )
                        
                    })
                }
            </div>
            
        </div>
    )
}



export default RelatedProduct