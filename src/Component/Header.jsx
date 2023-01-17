import {React, useEffect, useRef} from 'react';
import {  Link, NavLink} from "react-router-dom";
import deleteIcon from './images/delete.png';
import menuIcon from './images/menu.svg';
import {BiSearch, BiMenuAltLeft, BiHeart, BiShoppingBag} from 'react-icons/bi';
import {FiUser} from 'react-icons/fi';
  import {useState} from "react";
import storeWish from './storewish';
import Wishlist from '../pages/wishlist';
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
    let liNav= document.querySelectorAll('li');
    liNav.forEach(item=>{
        item.addEventListener('click', function(){
            for(let j=0; j<liNav.length; j++){
                liNav[j].classList.remove('li-active');
            }
            item.classList.add('li-active');
        })
    });
    const [item, setItem]=useState([]);
    const [cartitem, setcartItem]=useState([]);

    useEffect(()=>{
     const storedItem=(JSON.parse(localStorage.getItem('items')))
     ;
     const storedcartItem=(JSON.parse(localStorage.getItem('cartitems')))
     setcartItem(storedcartItem);

    setItem(storedItem);
    });  
      return(
        <header className="flex justify-around content-center items-center md:py-5 py-2 sticky text-0xl shadow-md">
            <div className='flex gap-5 '>
                <button className='md:hidden'><img src={menuIcon}  onClick={showNav}/></button>
                <h1 className='text-bold text-3xl mt-2 font-bold'>FoodChat</h1>
            </div>
            <nav className='sm:mt-5' >
             <ul className="md:flex gap-10 justify-around hidden sm:hidden">
                <div  className="md:hidden flex justify-between mb-5 mr-5 ml-5 mt-5">
                  <h1 className='text-bold  md:text-5xl'>FoodChat</h1> 
                  <button><img src={deleteIcon}  onClick={hideNav}/></button>
                </div>
                <li onClick={hideNav} className='li li-active'>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li onClick={hideNav} className='li'>
                    <NavLink to="/menu">Menu</NavLink>
                </li>
                <li onClick={hideNav} className='li'>
                    <NavLink to="/blog">Blog</NavLink>
                </li>
                <li onClick={hideNav} className='li'>
                    <NavLink to="/chef">Chef</NavLink>
                </li>
                <li onClick={hideNav} className='li'>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li onClick={hideNav} className='li'>
                    <NavLink to="/shop">Shop</NavLink>
                </li>
                <li onClick={hideNav} className='li'>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </nav>
            <div className='flex justify-center aliign-center content-center item-center md:mt-5'>
              <Link to="user/login" className='ml-2'><FiUser /></Link>
              <Link to="/wishlist" className='relative '><BiHeart className='ml-2'/><span className='absolute bg-red-600 text-xs rounded-full -top-4 -right-0 w-[20px] h-[20px] flex justify-center items-center text-white'>{ item.length}</span></Link>
              <Link to="/cart" className='relative'><BiShoppingBag className='ml-2'/><span className='absolute bg-red-600 text-xs rounded-full -top-4 -right-0 w-[20px] h-[20px] flex justify-center items-center text-white' >{cartitem.length}</span></Link>
            </div>
    </header>
    )
}
export default Header;