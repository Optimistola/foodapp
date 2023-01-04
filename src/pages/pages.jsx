import React from 'react';
import {Link} from "react-router-dom";
function Pages(props) {
  let {page, pageName}=props;
  return (
    <div className='hero py-20 text-center text-white'>
      <h1><Link to='/foodapp'>Home</Link>/{pageName}</h1>
    </div>
  )
}

export default Pages
