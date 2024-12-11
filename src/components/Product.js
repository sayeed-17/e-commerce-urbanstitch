import React, { useContext } from 'react';
import Breadcrums from '../subcomponents/Breadcrums';
import { ShopContext } from '../Context/ShopContext';
import ProductDisplay from '../subcomponents/ProductDisplay';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const {productId} = useParams();

  // Ensure productId is converted to a number before comparison
  const product = all_products.find((e) => e.id === Number(productId));

  console.log('All Products:', all_products);
  console.log('Product ID from useParams:', productId);

  // Handle case where product is not found
  if (!product) {
    return <div>Product not found. Please check the URL or try again.</div>;
  }
  
  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
     
      

    </div>
  );
};

export default Product;
