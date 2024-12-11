import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ShopContextProvider from './Context/ShopContext';
// import all_product from './assets/all_product';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
 <ShopContextProvider>
    <App />
    </ShopContextProvider>
 
);

