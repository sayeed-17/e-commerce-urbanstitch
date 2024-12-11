import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Shop from './components/Shop';
import LoginSignup from './components/LoginSignup';
import Cart from './components/Cart';
import Product from './components/Product';
import ShopCategory from './components/ShopCategory';
import menbanner from "./assets/banner_mens.png"
import womenbanner from "./assets/banner_women.png"
import kidsbanner from "./assets/banner_kids.png"




function App() {
  return (
    <div className="App pt-[60px]">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/login" element={<LoginSignup/>}/>
        <Route path="/cart" element={<Cart/>}/>
        {/* <Route path="/product" element={<ShopCategory/>}/> */}
        <Route path="/product/:productId" element={<Product/>}/>
       
        <Route path="/men" element={<ShopCategory banner={menbanner} category="men"/>}/>
        <Route path="/women" element={<ShopCategory banner={womenbanner} category="women"/>}/>
        <Route path="/kids" element={<ShopCategory banner={kidsbanner} category="kid"/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
