import React from 'react';
import {  Link, NavLink,} from "react-router-dom";
import deleteIcon from './images/delete.png';
import {BiSearch, BiMenuAltLeft, BiHeart, BiShoppingBag} from 'react-icons/bi';
import {FiUser} from 'react-icons/fi';
  import {useState} from "react";
function Header(){
    let showNav=()=>{
        document.body.querySelector('ul').classList.add('ul');
    document.body.querySelector('ul').classList.add('animate2');
    document.body.querySelector('ul').onanimationend=()=>{
        document.body.querySelector('ul').classList.remove('animate');
    }       
    }
    let hideNav=()=>{
        document.body.querySelector('ul').classList.remove('animate2');
        document.body.querySelector('ul').classList.add('animate');
        document.body.querySelector('ul').onanimationend=()=>{
            document.body.querySelector('ul').classList.toggle('ul');
        };
    }
    let showSearch=()=>{
        document.body.querySelector('input').classList.toggle('show');
    }
    const [state, setState]= useState(0);
    return(
        <header className="flex justify-around content-center items-center md:py-5 py-2 sticky text-0xl">
            <div className='flex gap-5 '>
                <button className='w-[50px]'><BiMenuAltLeft onClick={showNav} className='md:hidden mt-3' /></button>
                <h1 className='text-bold text-3xl md:text-5xl mt-2'>FoodChat</h1>
            </div>
            <nav className='sm:mt-5'>
             <ul className="md:flex gap-2 justify-around hidden sm:hidden">
                <div  className="md:hidden flex justify-between mb-5 mr-5 ml-5 mt-5">
                  <h1 className='text-bold  md:text-3xl'>FoodChat</h1> 
                  <button><img src={deleteIcon}  onClick={hideNav}/></button>
                </div>
                <li onClick={hideNav}>
                    <NavLink to="/" end>Home</NavLink>
                </li>
                <li onClick={hideNav}>
                    <NavLink to="/menu">Menu</NavLink>
                </li>
                <li onClick={hideNav}>
                    <NavLink to="/blog">Blog</NavLink>
                </li>
                <li onClick={hideNav}>
                    <NavLink to="/pages">Pages</NavLink>
                </li>
                <li onClick={hideNav}>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li onClick={hideNav}>
                    <NavLink to="/shop">Shop</NavLink>
                </li>
                <li onClick={hideNav}>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </nav>
            <div className='flex justify-center aliign-center content-center item-center md:mt-5'>
              <Link to="user/login" className='ml-2'><FiUser /></Link>
              <Link to="/wishlist" className='relative '><BiHeart className='ml-2'/><span className='absolute bg-red-600 text-xs rounded-full -top-4 -right-0 w-[20px] h-[20px] flex justify-center items-center text-white'>{'0'}</span></Link>
              <Link to="/cart" className='relative'><BiShoppingBag className='ml-2'/><span className='absolute bg-red-600 text-xs rounded-full -top-4 -right-0 w-[20px] h-[20px] flex justify-center items-center text-white'>{'0'}</span></Link>
            </div>
            <div className=' inputfield'>
               <input type='search' className=" mt-8 hidden md:block bg-gray-50 text-sm rounded-lg border border-yellow-300 focus:border-red-500 focus:ring-red-500"/>
               <button onClick={showSearch}><BiSearch  className='md:hidden mt-1' /></button>
           </div>
    </header>
    )
}
export default Header;