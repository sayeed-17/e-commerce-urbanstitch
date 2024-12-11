import React, { createContext, useState ,useEffect} from "react";
import all_products from "../assets/all_product.js";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_products.length+1; index++) {
    cart[index] = 0;
    
  }
  return cart;
};
const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const addToCart = (itemid) => {
    setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
    
  };
  const RemoveFromCart = (itemid) => {
    setCartItems((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
    
  };
  useEffect(() => {
    console.log(cartItems); // Logs updated state when `cartItems` changes
  }, [cartItems]);

  const getTotalCartItems=()=>{
    let totalItems=0;
    for(const item in cartItems){
    if(cartItems[item]>0){
        totalItems+=cartItems[item];

    }
}
return totalItems;
  }
  const contextvalue = { getTotalCartItems,all_products, cartItems, addToCart, RemoveFromCart };
  return (
    <ShopContext.Provider value={contextvalue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
