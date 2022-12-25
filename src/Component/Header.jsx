import deleteIcon from './images/delete.png';
import {BiSearch, BiMenuAltLeft, BiHeart, BiShoppingBag} from 'react-icons/bi';
import {FiUser} from 'react-icons/fi';

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
    return(
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
                <li><a>Home</a></li>
                <li><a>Menu</a></li>
                <li><a>Blog</a></li>
                <li><a>Pages</a></li>
                <li><a>About</a></li>
                <li><a>Shop</a></li>
                <li><a>Contact</a></li>
              </ul>
            </nav>
            <div className='flex justify-center aliign-center content-center item-center md:mt-5 ml-2'>
                <FiUser/>
                <BiShoppingBag/>
                <BiHeart/>
            </div>
            <div className=' inputfield'>
              <input type='search' className=" mt-5 hidden md:block bg-gray-50 text-sm rounded-lg border border-yellow-300 focus:border-red-500 focus:ring-red-500"/>
              <BiSearch className='md:hidden mt-1' onClick={showSearch}/>
           </div>
    </header>
  
    )
}
export default Header;