import React from 'react'
import Hero from '../subcomponents/Hero'
import Offers from '../subcomponents/Offers'
import Popular from '../subcomponents/Popular'
import Newcollections from '../subcomponents/Newcollections'
import Newsletter from '../subcomponents/Newsletter'
import Footer from '../subcomponents/Footer'


const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <Newcollections/>
        <Newsletter/>
        {/* <Product/>
        <ProductDisplay/> */}
        <Footer/>
    </div>
  )
}

export default Shop