import React, { useState } from 'react';
import Error from './error';
import {Link} from 'react-router-dom';
import Pages from '../pages'
function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', cpassword:'',
  });

  const [errors, setErrors] = useState({});

  function validateForm() {
    let newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Username is required';
      window.navigator.vibrate(700);
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
      window.navigator.vibrate(700);
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
      window.navigator.vibrate(700);
    }else if (formData.cpassword!==formData.password){
      newErrors.password = 'Password must match';
      window.navigator.vibrate(700);
    }
    setErrors(newErrors);
    return !Object.keys(newErrors).length;
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (validateForm()) {
      // submit the form
    }
  }

  return (
    <div>
      <Pages pageName={'Register'}/>
    <div class="flex flex-col justify-center items-center mt-10 pt-20">
    <h1 className='font-bold text-sm-5 bold text-red-400 text-center'>Register</h1>
    <Error errortext={!formData.name? errors.name: !formData.password? errors.password: formData.password.length < 8? 'Password must be at least 8 characters': formData.cpassword!==formData.password? 'Password must match':''} />
    <form onSubmit={handleSubmit} className='ml-5 mr-5 mt-10 md:mr-20 md:mr-20 md:ml-20'>
      <label className='label'>
        Username:
        <input
         className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
          type="text"
          value={formData.name}
          onChange={event => setFormData({ ...formData, name: event.target.value })}
        />
      </label>
      <br />
      <label className='label'>
        Email:
        <input
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
          type="email"
        />
        </label>
        <label className='label'>
        password:
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
          type="password"
          value={formData.password}
          onChange={event => setFormData({ ...formData, password: event.target.value })}
        />
        </label><br/>
        <label className='label'>
        Confirm password:
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
          type="password"
          value={formData.cpassword}
          onChange={event => setFormData({ ...formData, cpassword: event.target.value })}
        />
        </label><br/>

        <button
 className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline'>Login</button>
      </form>
      <p className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-500 ml-5" >
        Already have an account?<span className=" text-red-800 text-sm font-bold inline-block">/<Link to='../user/login'>Login</Link></span></p>
      </div>
      </div>
      )
  }
      export default Register;
      