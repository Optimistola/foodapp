import deleteIcon from './images/delete.png';
import {BiSearch, BiMenuAltLeft, BiHeart, BiShoppingBag} from 'react-icons/bi';
import {FiUser} from 'react-icons/fi';
import {  BrowserRouter as Router,
    Switch,
    Route,
    Link, NavLink,
  } from "react-router-dom";
  import {state, useState} from "react";
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
            document.body.querySelector('ul').classList.remove('ul');
        }
    }
    let showSearch=()=>{
        document.body.querySelector('input').classList.toggle('show');
    }
    const [state, setState]= useState(0);
    return(
        <Router>
        <header className="flex justify-around content-center items-center md:py-5 py-2 sticky text-0xl">
            <div className='flex gap-5 '>
                <BiMenuAltLeft onClick={showNav} className='md:hidden mt-3' />
                <h1 className='text-bold text-3xl md:text-5xl mt-2'>FoodChat</h1>
            </div>
            <nav className='sm:mt-5'>
             <ul className="md:flex gap-2 justify-around hidden sm:hidden">
                <div  className="md:hidden flex justify-between mb-5 mr-5 ml-5 mt-5">
                  <h1 className='text-bold  md:text-3xl'>FoodChat</h1> 
                  <img src={deleteIcon}  onClick={hideNav}/>
                </div>
                <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/menu">Menu</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/pages">Pages</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/shop">Shop</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
            </nav>
            <div className='flex justify-center aliign-center content-center item-center md:mt-5'>
            <Link to="/login" className='ml-2'><FiUser /></Link>
            <Link to="/wishlist" className='relative '><BiHeart className='ml-2'/><span className='absolute bg-red-600 text-xs rounded-full -top-2 -right-0 w-[10px] h-[10px] flex justify-center items-center text-white'>{'0'}</span></Link>
            <Link to="/cart" className='relative'><BiShoppingBag className='ml-2'/><span className='absolute bg-red-600 text-xs rounded-full -top-2 -right-0 w-[10px] h-[10px] flex justify-center items-center text-white'>{'0'}</span></Link>
            </div>
            <div className=' inputfield'>
              <input type='search' className=" mt-5 hidden md:block bg-gray-50 text-sm rounded-lg border border-yellow-300 focus:border-red-500 focus:ring-red-500"/>
              <button onClick={showSearch}><BiSearch  className='md:hidden mt-1' /></button>

           </div>
    </header>
    </Router>
    )
}
export default Header;