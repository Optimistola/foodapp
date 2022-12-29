import React from 'react';
import {Link} from "react-router-dom";
import Error from './error'
function Login(){
  let error =document.getElementById('error');
  let sub=function(){
    let loginForm= document.forms['loginForm'];
    let userName=loginForm.elements.userName;
    let psw=loginForm.elements.psw;
    if(userName.value===''||psw.value===''){
      window.navigator.vibrate(700);
      error.className='visible';
    }
  }
    return(
      <div>
        <Error errortext={'Either of the two field is empty'}/>
<div class="flex flex-col justify-center items-center mt-20">
    <h1 className='font-bold text-sm-5 bold text-red-400 text-center'>Login</h1>
  <form className=" ml-5 mr-5 mt-10 md:mr-20 md:mr-20 md:ml-20" name='loginForm'>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input name='userName' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div className="mb-6">
      <label  className= "block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input name='psw' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
      <p className="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div className="md:flex items-center justify-between">
      <button onClick={sub} className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="button" id='sub'>
        Sign In
      </button>
      <p className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-500 ml-5" >
        Forgot Password?<span className=" text-red-800 text-sm font-bold inline-block"><Link to="../user/register">/Register.</Link></span></p>
    </div>
  </form>
  </div>
  </div>
        );
}
export default Login;