import './App.css';
import React from 'react';
import Header from "./Component/Header.jsx";
import Footer from "./Component/footer.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/home";
import Menu from "./pages/menu";
import Blog from "./pages/blog";
import Chef from "./pages/chef";
import About from "./pages/about";
import Shop from "./pages/shop";
import Contact from "./pages/contact";
import Login from "./pages/user/login";
import Register from "./pages/user/register";
import Cart from "./pages/cart";
import Wishlist from "./pages/wishlist"
import { createContext } from 'react';
import ProductList from './Component/shopFile'

function App() {
   function parent(){
    const storeData=createContext(null);
   }
  return (
    <main className=''>
      <Router>
      <Header/>
        <Routes>
           <Route path='/foodapp' element={<Home/>}/>
           <Route path='menu' element={<Menu/>}/>
           <Route path='blog' element={<Blog/>}/>
           <Route path='chef' element={<Chef/>}/>
           <Route path='about' element={<About/>}/>
           <Route path='shop' element={<Shop/>}/>
           <Route path='about' element={<About/>}/>
           <Route path='contact' element={<Contact/>}/>
           <Route path='user/login' element={<Login/>}/>
           <Route path='user/register' element={<Register/>}/>
           <Route path='cart' element={<Cart/>}/>
           <Route path='wishlist' element={<Wishlist/>}/>
        </Routes>
      </Router>
      <Footer/>
    </main>
  );
}

export default App;
