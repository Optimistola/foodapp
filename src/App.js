import './App.css';
import react from 'react';
import Header from "./Component/Header.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/home";
import Menu from "./pages/menu";
import Blog from "./pages/blog";
import Pages from "./pages/pages";
import About from "./pages/about";
import Shop from "./pages/shop";
import Contact from "./pages/contact";
import Login from "./pages/user/login";
import Register from "./pages/user/register"
function App() {
  return (
    <main className=''>
      <Router>
      <Header/>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='menu' element={<Menu/>}/>
           <Route path='blog' element={<Blog/>}/>
           <Route path='pages' element={<Pages/>}/>
           <Route path='about' element={<About/>}/>
           <Route path='shop' element={<Shop/>}/>
           <Route path='about' element={<About/>}/>
           <Route path='contact' element={<Contact/>}/>
           <Route path='user/login' element={<Login/>}/>
           <Route path='user/register' element={<Register/>}/>
        </Routes>
      </Router>

    </main>
  );
}

export default App;
