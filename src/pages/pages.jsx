import React from 'react';
import {Link} from "react-router-dom";
function Pages(props) {
  let {page, pageName}=props;
  return (
    <div className='hero py-20 text-center text-white flex c0ntent-center justify-center items-center'>
      <h1 className='font-bold'><Link to='/foodapp'>Home</Link>/{pageName}</h1>
    </div>
  )
}

export default Pages
